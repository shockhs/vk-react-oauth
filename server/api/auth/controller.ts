import axios from 'axios'
import * as express from 'express'
import { URL } from 'url'
import { currentUser } from '../../models/user'

const methodUrl = 'https://api.vk.com/method'
const accessUrl = 'http://oauth.vk.com/access_token'

const logout = (req: { session: { currentUser: currentUser } }, res: express.Response) => {
    req.session.currentUser = undefined
    res.sendStatus(200)
}

const login = async (req: { body: { code: any }; session: { currentUser: currentUser } }, res: express.Response) => {
    const code = req.body.code
    const currentUser = req.session.currentUser

    if (currentUser) {
        try {
            const { userID, authToken } = currentUser
            const endpoint = new URL(`${methodUrl}/users.get`)
            endpoint.searchParams.append('user_ids', userID)
            endpoint.searchParams.append('fields', 'bdate')
            endpoint.searchParams.append('access_token', authToken)
            endpoint.searchParams.append('v', process.env.API_VERSION)
            await axios.get(endpoint.href).then((result) => {
                res.status(200).send(result.data.response[0])
            })
        } catch (err) {
            res.sendStatus(403)
        }
    } else {
        const endpoint = new URL(accessUrl)
        endpoint.searchParams.append('client_id', process.env.VK_OAUTH_ID)
        endpoint.searchParams.append('client_secret', process.env.VK_OAUTH_SECRET)
        endpoint.searchParams.append('redirect_uri', process.env.REDIRECT_URL)

        try {
            await axios.get(`${endpoint.href}/callback&code=${code}`).then((response) => {
                const { access_token: authToken, user_id: userID } = response.data
                req.session.currentUser = { authToken, userID }

                const endpointUser = new URL(`${methodUrl}/users.get`)
                endpointUser.searchParams.append('user_ids', userID)
                endpointUser.searchParams.append('fields', 'bdate')
                endpointUser.searchParams.append('access_token', authToken)
                endpointUser.searchParams.append('v', process.env.API_VERSION)
                axios.get(endpointUser.href).then((result) => {
                    res.status(200).send(result.data.response[0])
                })
            })
        } catch (err) {
            res.sendStatus(403)
        }
    }
}

export { login, logout }

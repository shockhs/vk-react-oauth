import { Method } from 'axios'
import { Response } from 'express'
import { currentUser } from '../../models/user'
import Agent from '../../services/Agent'
import { getUserDataResponse, loginRequest } from '../types'

const logout = (req: { session: { currentUser: currentUser } }, res: Response) => {
    req.session.currentUser = undefined
    res.sendStatus(200)
}

const login = async (req: { body: { code: any }; session: { currentUser: currentUser } }, res: Response) => {
    const code = req.body.code
    const currentUser = req.session.currentUser

    if (currentUser) {
        try {
            const { userID, authToken } = currentUser

            const requestData = {
                method: 'GET' as Method,
                params: {
                    method: 'users.get',
                    query: {
                        user_ids: userID,
                        fields: 'bdate',
                        access_token: authToken,
                    }
                }
            }

            await Agent.getMethodRequest(requestData).then((result: getUserDataResponse) => {
                res.status(200).send(result.data.response[0])
            })
        } catch (err) {
            res.sendStatus(403)
        }
    } else {

        const accessData = {
            method: 'GET' as Method,
            params: {
                method: ``,
                query: {
                    client_id: process.env.VK_OAUTH_ID,
                    client_secret: process.env.VK_OAUTH_SECRET,
                    redirect_uri: process.env.REDIRECT_URL,
                    code,
                }
            }
        }

        try {
            const response = await Agent.getAccessRequest(accessData).then((response: loginRequest) => response)

            const { access_token: authToken, user_id: userID } = response.data
            req.session.currentUser = { authToken, userID }

            const requestData = {
                method: 'GET' as Method,
                params: {
                    method: 'users.get',
                    query: {
                        user_ids: userID,
                        fields: 'bdate',
                        access_token: authToken,
                    }
                }
            }

            await Agent.getMethodRequest(requestData).then((result: getUserDataResponse) => {
                res.status(200).send(result.data.response[0])
            })
        } catch (err) {
            res.sendStatus(403)
        }
    }
}

export { login, logout }

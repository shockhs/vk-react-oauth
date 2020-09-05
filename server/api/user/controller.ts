import axios from 'axios'
import * as express from 'express'
import { URL } from "url"
import { currentUser } from "../../models/user"

const methodUrl = 'https://api.vk.com/method'

const getCurrentUserData = async (req: { session: { currentUser: currentUser } }, res: express.Response) => {
    const { userID, authToken } = req.session.currentUser
    const endpoint = new URL(`${methodUrl}/users.get`)
    endpoint.searchParams.append('user_ids', `${userID}`)
    endpoint.searchParams.append('fields', 'bdate')
    endpoint.searchParams.append('access_token', `${authToken}`)
    endpoint.searchParams.append('v', process.env.API_VERSION)
    try {
        await axios.get(endpoint.href).then((response) => {
            res.status(200).send(response.data.response[0])
        })
    } catch (err) {
        res.status(403).send({ error: 'You are not authorized' })
    }
}

const getGroupPosts = async (req: { session: { currentUser: currentUser } }, res: express.Response) => {
    const { userID, authToken } = req.session.currentUser
    const endpointGroups = new URL(`${methodUrl}/groups.get`)
    const endpointWall = new URL(`${methodUrl}/wall.get`)
    endpointGroups.searchParams.append('user_ids', userID)
    endpointGroups.searchParams.append('access_token', authToken)
    endpointGroups.searchParams.append('v', '5.120')
    endpointGroups.searchParams.append('count', '5')
    try {
        await axios.get(endpointGroups.href).then((response) => {
            const groupID = response.data.response.items[0]
            endpointWall.searchParams.append('owner_id', `-${groupID}`)
            endpointWall.searchParams.append('user_ids', userID)
            endpointWall.searchParams.append('access_token', authToken)
            endpointWall.searchParams.append('v', process.env.API_VERSION)
            endpointWall.searchParams.append('count', '10')
            axios.get(endpointWall.href).then((resp) => {
                res.status(200).send(resp.data.response.items)
            })
        })
    } catch (err) {
        res.status(403).send({ error: 'You are not authorized' })
    }
}

export { getCurrentUserData, getGroupPosts }


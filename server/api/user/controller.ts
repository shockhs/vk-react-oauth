import { Method } from 'axios'
import { Response } from 'express'
import { currentUser } from "../../models/user"
import Agent from '../../services/Agent'
import { getGroupsDataResponse, getUserDataResponse } from '../types'


const getCurrentUserData = async (req: { session: { currentUser: currentUser } }, res: Response) => {
    const { userID, authToken } = req.session.currentUser

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

    try {
        await Agent.getMethodRequest(requestData).then((response: getUserDataResponse) => {
            res.status(200).send(response.data.response[0])
        })
    } catch (err) {
        res.status(403).send({ error: 'You are not authorized' })
    }
}

const getGroupPosts = async (req: { session: { currentUser: currentUser } }, res: Response) => {
    const { userID, authToken } = req.session.currentUser

    const requestGroups = {
        method: 'GET' as Method,
        params: {
            method: 'groups.get',
            query: {
                user_ids: userID,
                access_token: authToken,
                count: '5',
            }
        }
    }

    try {
        const response = await Agent.getMethodRequest(requestGroups).then((res: getGroupsDataResponse) => res)
        const groupID = response.data.response.items[0]

        const requestWall = {
            method: 'GET' as Method,
            params: {
                method: 'wall.get',
                query: {
                    owner_id: `-${groupID}`,
                    user_ids: userID,
                    access_token: authToken,
                    count: '10',
                }
            }
        }

        await Agent.getMethodRequest(requestWall).then((resp: getGroupsDataResponse) => {
            res.status(200).send(resp.data.response.items)
        })

    } catch (err) {
        res.status(403).send({ error: 'You are not authorized' })
    }
}

export { getCurrentUserData, getGroupPosts }


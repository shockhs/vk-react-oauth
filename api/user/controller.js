const axios = require('axios')
const methodUrl = 'https://api.vk.com/method'

exports.getCurrentUserData = async (req, res) => {
    const { userID, authToken } = req.session.currentUser
    const endpoint = new URL(`${methodUrl}/users.get`)
    endpoint.searchParams.append('user_ids', `${userID}`)
    endpoint.searchParams.append('fields', 'bdate')
    endpoint.searchParams.append('access_token', `${authToken}`)
    endpoint.searchParams.append('v', '5.120')
    try {
        await axios.get(endpoint.href).then((response) => {
            res.status(200).send(response.data.response[0])
        })
    } catch (err) {
        console.log(err)
        res.status(403).send({ error: 'You are not authorized' })
    }
}

exports.getGroupPosts = async (req, res) => {
    const { userID, authToken } = req.session.currentUser
    const endpointGroups = new URL(`${methodUrl}/groups.get`)
    const endpointWall = new URL(`${methodUrl}/wall.get`)
    endpointGroups.searchParams.append('user_ids', userID)
    endpointGroups.searchParams.append('access_token', authToken)
    endpointGroups.searchParams.append('v', '5.120')
    endpointGroups.searchParams.append('count', 5)
    try {
        await axios.get(endpointGroups.href).then((response) => {
            const groupID = response.data.response.items[0]
            endpointWall.searchParams.append('owner_id', `-${groupID}`)
            endpointWall.searchParams.append('user_ids', userID)
            endpointWall.searchParams.append('access_token', authToken)
            endpointWall.searchParams.append('v', '5.120')
            endpointWall.searchParams.append('count', 10)
            axios.get(endpointWall.href).then((resp) => {
                res.status(200).send(resp.data.response.items)
            })
        })
    } catch (err) {
        console.log(err)
        res.status(403).send({ error: 'You are not authorized' })
    }
}
const axios = require('axios')
const methodUrl = 'https://api.vk.com/method'
const accessUrl = 'http://oauth.vk.com/access_token'

exports.getCurrentUserData = async (req, res) => {
    const { userID, authToken } = req.session.currentUser
    const accessData = `?user_ids=${userID}&fields=bdate&access_token=${authToken}&v=5.120`
    try {
        await axios.get(`${methodUrl}/users.get${accessData}`).then((response) => {
            res.status(200).send(response.data.response[0])
        })
    } catch (err) {
        console.log(err)
        res.status(403).send({ error: 'You are not authorized' })
    }
}

exports.getGroupPosts = async (req, res) => {
    const { userID, authToken } = req.session.currentUser
    const accessData = `?user_ids=${userID}&access_token=${authToken}&v=5.120`
    try {
        await axios.get(`${methodUrl}/groups.get${accessData}&count=5`).then((response) => {
            const groupID = response.data.response.items[0]
            axios.get(`${methodUrl}/wall.get${accessData}&owner_id=-${groupID}&count=10`).then((resp) => {
                res.status(200).send(resp.data.response.items)
            })
        })
    } catch (err) {
        console.log(err)
        res.status(403).send({ error: 'You are not authorized' })
    }
}

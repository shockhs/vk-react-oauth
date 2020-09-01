const axios = require('axios')
const methodUrl = 'https://api.vk.com/method'
const accessUrl = 'http://oauth.vk.com/access_token'

exports.logout = (req, res) => {
    req.session.currentUser = undefined
    res.sendStatus(200)
}

exports.login = async (req, res) => {
    const code = req.body.code
    const currentUser = req.session.currentUser
    if (currentUser) {
        try {
            const { userID, authToken } = currentUser
            const accessData = `?user_ids=${userID}&fields=bdate&access_token=${authToken}&v=5.120`
            await axios.get(`${methodUrl}/users.get${accessData}`).then((response) => {
                res.status(200).send(response.data.response[0])
            })
        } catch (err) {
            console.log(err)
            res.sendStatus(403)
        }
    } else {
        try {
            await axios
                .get(
                    `${accessUrl}?client_id=${process.env.VK_OAUTH_ID}&client_secret=${process.env.VK_OAUTH_SECRET}&redirect_uri=http://localhost:5000/callback&code=${code}`
                )
                .then((response) => {
                    const authToken = response.data.access_token
                    const userID = response.data.user_id
                    req.session.currentUser = { authToken, userID }
                    const accessData = `?user_ids=${userID}&fields=bdate&access_token=${authToken}&v=5.120`
                    axios.get(`${methodUrl}/users.get${accessData}`).then((response) => {
                        res.status(200).send(response.data.response[0])
                    })
                })
        } catch (err) {
            console.log(err)
            res.sendStatus(403)
        }
    }
}

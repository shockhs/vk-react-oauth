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
            const endpoint = new URL(`${methodUrl}/users.get`)
            endpoint.searchParams.append('user_ids', userID)
            endpoint.searchParams.append('fields', 'bdate')
            endpoint.searchParams.append('access_token', authToken)
            endpoint.searchParams.append('v', '5.120')
            await axios.get(endpoint.href).then((response) => {
                res.status(200).send(response.data.response[0])
            })
        } catch (err) {
            console.log(err)
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
                endpointUser.searchParams.append('v', '5.120')
                axios.get(endpointUser.href).then((response) => {
                    res.status(200).send(response.data.response[0])
                })
            })
        } catch (err) {
            res.sendStatus(403)
        }
    }
}

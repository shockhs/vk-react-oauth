export const apiURL = 'http://localhost:5000'
const domain = 'http://localhost:5000'
const oAuth = new URL('https://oauth.vk.com/authorize')
oAuth.searchParams.append('client_id', process.env.VK_OAUTH_ID)
oAuth.searchParams.append('display', 'page')
oAuth.searchParams.append('redirect_uri', `${domain}/callback`)
oAuth.searchParams.append('scope', 'groups')
oAuth.searchParams.append('response_type', 'code')
oAuth.searchParams.append('v', process.env.API_VERSION)

export const oAuthURL = oAuth.href

export const apiURL = 'http://localhost:5000'
const domain = 'http://localhost:5000'
export const oAuthURL = `https://oauth.vk.com/authorize?client_id=${process.env.VK_OAUTH_ID}&display=page&redirect_uri=${domain}/callback&scope=groups&response_type=code&v=5.120`

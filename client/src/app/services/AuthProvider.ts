import axios from 'axios'
import { apiURL } from '../constants'

class AuthProvider {
    options = { headers: { responseType: 'application/json' } }

    login = async (code: string | string[]) => {
        try {
            return await axios.post(`${apiURL}/api/auth/login`, { code }, this.options)
        } catch (e) {
            return { error: 'You are not authorized' }
        }
    }

    logout = async () => {
        try {
            return await axios.post(`${apiURL}/api/auth/logout`, this.options)
        } catch (e) {
            return { error: 'You are not authorized' }
        }
    }
}

export default new AuthProvider()
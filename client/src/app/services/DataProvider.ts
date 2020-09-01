import axios from 'axios'
import { apiURL } from '../constants'

class AuthProvider {
    options = { headers: { responseType: 'application/json' } }

    getGroupsData = async () => {
        return await axios.get(`${apiURL}/api/user/groups`, this.options)
    }

    getUserData = async () => {
        return await axios.get(`${apiURL}/api/user/`, this.options)
    }
}

export default new AuthProvider()
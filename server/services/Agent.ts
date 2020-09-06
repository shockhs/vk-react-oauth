import { URL } from "url"
import axios, { Method } from 'axios'

type RequestParams = {
    method: Method,
    params: { method: string, query?: { [key: string]: string } }
    data?: object
}

type getUrlParams = {
    method: string,
    query?: { [key: string]: string }
    isAccess?: boolean
}

interface IAgent {
    methodUrl: string
    accessUrl: string
    getUrlWithQuery: (arg: getUrlParams) => string
    getAccessRequest: (arg: RequestParams) => Promise<object>
    getMethodRequest: (arg: RequestParams) => Promise<object>
}


class Agent implements IAgent {

    methodUrl = 'https://api.vk.com/method'
    accessUrl = 'http://oauth.vk.com/access_token'

    getUrlWithQuery = ({ method, query, isAccess }) => {
        if (isAccess) {
            const endpoint = new URL(`${this.accessUrl}`)

            for (let item in query) {
                if (item !== 'code') endpoint.searchParams.append(item, query[item])
            }

            return `${endpoint.href}/callback&code=${query.code}`
        } else {
            const endpoint = new URL(`${this.methodUrl}/${method}`)

            for (let item in query) {
                endpoint.searchParams.append(item, query[item])
            }

            endpoint.searchParams.append('v', process.env.API_VERSION)
            return endpoint.href
        }
    }

    getAccessRequest = ({ method, params, data }) => {
        if (data) return axios({ method, url: this.getUrlWithQuery({ ...params, isAccess: true }), data })
        else return axios({ method, url: this.getUrlWithQuery({ ...params, isAccess: true }) })
    }

    getMethodRequest = ({ method, params, data }) => {
        if (data) return axios({ method, url: this.getUrlWithQuery(params), data })
        else return axios({ method, url: this.getUrlWithQuery(params) })
    }

}

export default new Agent()
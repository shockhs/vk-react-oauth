export type getUserDataResponse = {
    data: { response: any[] }
}

export type getGroupsDataResponse = {
    data: {
        response: {
            items: any[]
        }
    }
}

export type loginRequest = {
    data: {
        access_token: string,
        user_id: string
    }
}

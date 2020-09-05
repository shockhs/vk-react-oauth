import { observer } from 'mobx-react'
import queryString from 'query-string'
import React, { FC, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import AuthProvider from '../../services/AuthProvider'
import DataProvider from '../../services/DataProvider'
import { useAuthStore } from '../../store/Auth'
import Groups from './Groups'
import User from './User'

const Profile: FC<RouteComponentProps> = observer(({ location, history }) => {
    const authStore = useAuthStore()

    useEffect(() => {
        const code = queryString.parse(location.search)?.code
        if (code) {
            AuthProvider.login(code).then((res: any) => {
                if (res.error) {
                    history.push('/login')
                } else if (res.status === 200) {
                    const { bdate: bDate, last_name: lastName, first_name: firstName, id } = res.data
                    authStore.setData({ bDate, lastName, firstName, id })
                }
            })
        } else {
            DataProvider.getUserData().then((res) => {
                if (res.status === 200) {
                    const { bdate: bDate, last_name: lastName, first_name: firstName, id } = res.data
                    authStore.setData({ bDate, lastName, firstName, id })
                } else {
                    history.push('/login')
                }
            })
        }
    }, [location])
    return (
        <>
            <User currentUser={authStore.info} />
            <Groups id={authStore.info.id} />
        </>
    )
})

export default withRouter(Profile)

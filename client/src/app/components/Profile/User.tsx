import React, { FC } from 'react'
import { User, useAuthStore } from '../../store/Auth'
import moment from 'moment'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import AuthProvider from '../../services/AuthProvider'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

interface IProps extends RouteComponentProps<any> {
    currentUser: User
}

const User: FC<IProps> = observer(({ currentUser, history }) => {
    const authStore = useAuthStore()

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        AuthProvider.logout().then((res: any) => {
            if (res.status === 200) {
                authStore.removeData()
                history.push('/login')
            }
        })
    }
    return (
        <div className="user">
            <Link className="homepageLink" to="/">
                Homepage
            </Link>
            <div className="username">{`${currentUser.firstName} ${currentUser.lastName}`}</div>
            <div className="id">{`@${currentUser.id}`}</div>
            <div className="date">
                Дата рождения: {currentUser.bDate ? moment(new Date(currentUser.bDate)).format('DD.MM.YYYY') : 'Скрыто'}
            </div>
            <button className="logoutBtn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
})

export default withRouter(User)

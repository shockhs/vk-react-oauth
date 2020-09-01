import React from 'react'
import { oAuthURL } from '../../constants'
import VKIcon from '../../assets/images/icon_vk.svg'
import './styles.scss'

export default () => {
    return (
        <main className="login">
            <a href={oAuthURL}>
                <span>Login</span>
                <img src={VKIcon} alt="VK icon" />
            </a>
        </main>
    )
}

import React, { FC } from 'react'
import { Switch, Route } from 'react-router'
import { observer } from 'mobx-react'
import Login from './Login'
import Profile from './Profile'

const Template: FC = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/login" render={() => <Login />} />
                <Route path="/" render={() => <Profile />} />
            </Switch>
        </div>
    )
}

export default observer(Template)

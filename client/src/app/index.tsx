import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Template from './components'
import './styles/styles.scss'

render(
    <BrowserRouter>
        <Template />
    </BrowserRouter>,
    document.getElementById('app') as HTMLElement
)

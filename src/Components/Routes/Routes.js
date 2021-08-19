import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom"
import Chats from '../Chats/Chats'

function Routes() {
    return (
        <BrowserRouter>
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                </ul>
            </header>

            <Switch>
                <Route exact path="/">
                    <h3>Home</h3>
                </Route>
                <Route exact path="/profile">
                    <h3>Profile</h3>
                </Route>
                <Route path="/chats/:chatId?">
                    <Chats />
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
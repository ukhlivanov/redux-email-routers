import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

export default function Email() {
    return (
        <Router>
            <div className="email">
                <Sidebar/>   
                <main>
                    <switch>
                        <Redirect from='/' to='/inbox'/>
                        <Route exact path="/:folderId" component={EmailList}/>
                        <Route exact path="/:folderId/:emailId" component={SingleEmail}/>
                    </switch>                   
                </main>
            </div>
        </Router>
    );
}

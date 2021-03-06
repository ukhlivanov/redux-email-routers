import React from 'react';
import {connect} from 'react-redux';
import './email-list.css';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
export function EmailList(props) {
    console.log(222);
    console.log(props);
    const emails = props.emailList.map(email =>
        <li key={email.id} className="email-list-email">
            <div className="email-list-email-from">
                {email.from}
            </div>
            <div className="email-list-email-title">
                <Link to={`/${props.folderId}/${email.id}`}>{email.title}</Link>
            </div>
        </li>
    );

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>
            <ul className="email-list">
                {emails}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const folderId = props.match.params.folderId;
    const folder = state[folderId];
    return {
        folderId,
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);

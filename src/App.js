import React from 'react';
import './App.css';
import NewComment from './NewComment'
import Comments from './Comments';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { AuthProvider } from './auth'
import CreateUser from './CreateUser';
import UserInfo from './UseInfo';
import SignInUser from './SignInUser';

function App() {

    return (
        <AuthProvider>
            <div className='container'>
                <NewComment />
                <Comments />
                <CreateUser />
                <SignInUser />
                <UserInfo />
            </div>
        </AuthProvider>
    )
}

export default App;

// create login pg using amplify 

import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    async function signIn() {
        try {
        await Auth.signIn(username, password);
        console.log('signed in');
        history.push('/childcare');
        } catch (error) {
        console.log('error signing in', error);
        }
    }
    
    return (
        <div>
        <h1>Sign In</h1>
        <input
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
        />
        <input
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={signIn}>Sign In</Button>
        <Link to="/signup">Sign Up</Link>
        </div>
    );
    }

export default withAuthenticator(Login);
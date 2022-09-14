import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import Amplify from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);


// function Login({ isPassedToWithAuthenticator, signOut, user }) {
//     if (!isPassedToWithAuthenticator) {
//       throw new Error(`isPassedToWithAuthenticator was not provided`);
//     }
  
//     return (
//       <>
//         <h1>Hello {user.username}</h1>
//         <button onClick={signOut}>Sign out</button>
//       </>
//     );
//   }
  
//   export default withAuthenticator(Login);
  
//   export async function getStaticProps() {
//     return {
//       props: {
//         isPassedToWithAuthenticator: true,
//       },
//     };
//   }

// define current user
const currentUser = Auth.currentAuthenticatedUser();


export default function Login() {
    console.log('hello world');
    const userAttributes = Auth.userAttributes(currentUser);
    console.log(userAttributes);
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            {/* print current user credentials */}
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    );
  }
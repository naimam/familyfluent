import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import Amplify from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);


const authen = Auth.currentAuthenticatedUser().then((user) => {

        const email = user.attributes.email;
        console.log(email);
        const firstName = user.attributes.given_name;
        console.log(firstName);
        const lastName = user.attributes.family_name;
        console.log(lastName);
        const phone = user.attributes.phone_number;
        console.log(phone); 

        // return json object
        return {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone
        }
    }).catch((err) => {
        console.log('no user signed in');
    }
    
    );




export default function Login() {
    

   
    return (
    
       <Authenticator>


                {({ signOut, user }) => (
                    <main>
                        <h1>Hello fname </h1>
                        {/* display authen data */}
                        
                        {/* print current user credentials */}
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        )
    

  }

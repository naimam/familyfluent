import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Axios from 'axios'

import { Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import Amplify from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);


const authen = Auth.currentAuthenticatedUser().then((user) => {

        let email = user.attributes.email;
        console.log(email);
        let firstName = user.attributes.given_name;
        console.log(firstName);
        let lastName = user.attributes.family_name;
        console.log(lastName);
        let phone = user.attributes.phone_number;
        console.log(phone); 




        return (
            <div>
                <h1>Logged in</h1>
                <h2>{email}</h2>
                <h2>{firstName}</h2>
                <h2>{lastName}</h2>
                <h2>{phone}</h2>
            </div>

        // // return json object
        // // return {
        // //     email: email,
        // //     firstName: firstName,
        // //     lastName: lastName,
        // //     phone: phone
        // // }

        ) 
    }).catch((err) => {
        console.log('no user signed in');
    }
    
    );

    const printAuthen = async () => {
        const a = await authen;
        console.log("a");
        console.log(a);
      };

    printAuthen.firstName = "Naima ";
    printAuthen.lastName = "Khan";
    printAuthen.email = "naima@gmail.com";
    printAuthen.phone = "1234567890";

    



export default function Login() {

    Axios.get("/test").then((response) => {
        console.log(response);
    });
    

   
    return (
    
       <Authenticator>


                {({ signOut, user }) => (
                    <main>
                        {/* display authen data */}
                       <h1>Welcome,  {printAuthen.firstName} </h1>
                        
                        {/* print current user credentials */}
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        )
    

  }

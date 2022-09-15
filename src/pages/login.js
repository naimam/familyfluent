import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Axios from 'axios'

// import { Button, Heading, Image, View, Card } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import Amplify from 'aws-amplify';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './login.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);


// const authen = Auth.currentAuthenticatedUser().then((user) => {

//         let email = user.attributes.email;
//         console.log(email);
//         let firstName = user.attributes.given_name;
//         console.log(firstName);
//         let lastName = user.attributes.family_name;
//         console.log(lastName);
//         let phone = user.attributes.phone_number;
//         console.log(phone); 




//         return (
//             <div>
//                 <h1>Logged in</h1>
//                 <h2>{email}</h2>
//                 <h2>{firstName}</h2>
//                 <h2>{lastName}</h2>
//                 <h2>{phone}</h2>
//             </div>

//         // // return json object
//         // // return {
//         // //     email: email,
//         // //     firstName: firstName,
//         // //     lastName: lastName,
//         // //     phone: phone
//         // // }

//         ) 
//     }).catch((err) => {
//         console.log('no user signed in');
//     }
    
//     );

//     const printAuthen = async () => {
//         const a = await authen;
//         console.log("a");
//         console.log(a.email);
//       };

//     printAuthen.firstName = "Henry ";
//     printAuthen.lastName = "Blue";
//     printAuthen.email = "henry@gmail.com";
//     printAuthen.phone = "1234567890";

    

export default function Login() {


    return (
    
       <Authenticator>
                {({ signOut, user }) => (
                    <main>
                       <Container className="login-container">
                                 <h1 className="welcome-message">Welcome!  </h1>
                                
                                <Row xs={1} md={2} className="g-2">
                                    <Col>
                                        <Card style={{ width: '25rem' }}>
                                            <Card.Img variant="top" src={require('../pictures/Child Care/daycare1.jpg')} />
                                            <Card.Body>
                                            <Card.Title>Childcare</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                            <Button variant="primary" href="/login/childcarePortal">Access Childcare Portal </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                    <Card style={{ width: '25rem' }}>
                                            <Card.Img variant="top" src={require('../pictures/Elder Care/eldercare1.jpg')} />
                                            <Card.Body>
                                            <Card.Title>Eldercare</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                            <Button variant="primary" href="/login/eldercarePortal">Access Eldercare Portal </Button>
                                            </Card.Body>
                                        </Card>
                                    

                                    </Col>

                                </Row>
                           

                                <Button className="signout-button" variant="danger" onClick={signOut}>Sign out</Button> 
                            
                           
                        </Container>
                        
                    </main>
                )}
            </Authenticator>
        )
    

  }

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './login.css';
import Form from 'react-bootstrap/Form';

function hueyBlue() {




    return (
        <>

        <Container className='hueyTab'>
        <Tab.Container className="tabCol" id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Child Information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Schedule Pickup / Dropoff</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <h1>Child Information</h1>

                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="Huey" disabled />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Middle Initial</Form.Label>
                                    <Form.Control placeholder="M" disabled/>
                                    </Form.Group>


                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Blue" disabled/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-2">

                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control placeholder="02/10/2018" disabled/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Sex</Form.Label>
                                    <Form.Control placeholder="M" disabled/>
                                </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" disabled/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Floor 2, Room 37" disabled/>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="Columbia" disabled/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control placeholder="SC" disabled/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control placeholder="30069" disabled/>
                                    </Form.Group>
                                </Row>

                             

                                <Button variant="primary" type="submit">
                                    Edit Information
                                </Button>
                                </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h1>Schedule Pickup / Dropoff</h1>
                            <Form>
                            

                            </Form>
                        </Tab.Pane>

                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </Container>
        </>

    )





}

export default hueyBlue;
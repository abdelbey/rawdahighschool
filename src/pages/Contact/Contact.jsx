import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
    const map = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33347.88575517343!2d35.82551213936739!3d34.42591318949651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4vCURRENT_TIMESTAMP`;
    return (
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Get In Touch</h1>
                </div>
            </header>

            <div className='container my-5'>
                <Row>
                    <Col md={6}>
                        <iframe title="Google Map" src={map} className='w-100 h-100' allowFullScreen="" loading="lazy"></iframe>
                    </Col>
                    <Col md={6}>
                        <div className='d-flex justify-content-center'>
                            <Form id='contact-form'>
                                <Row className='mb-3'>
                                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control placeholder='First name' />
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder='Last name' />
                                    </Col>
                                </Row>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' placeholder='Enter email' />
                                    <Form.Text className='text-muted'>
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder='Your address' />
                                </Form.Group>

                                <Row className='mb-3'>
                                    <Col sm={12} md={6}>
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control placeholder='Postcode' />
                                    </Col>
                                </Row>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button variant="danger btn-lg" type='submit'>Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact;

import {
    Button,
    Col,
    FormGroup,
  } from "react-bootstrap";
  import Form from "react-bootstrap/Form";
  import React, { useRef } from "react";
  import emailjs from '@emailjs/browser';

  export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_g3kpyfk', 'template_asv26sj', form.current, {
          publicKey: 'x9HYiLzpdC_yZyD0e',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (

        <Col lg={4}>
            <Form 
            ref={form}
            onSubmit = {sendEmail}
              method="POST"
              action="https://formsubmit.co/johnlloydbutay123@gmail.com"
            >
              <FormGroup>

              <Form.Control
                  className="mb-3"
                  name="userName"
                  aria-label="userName"
                  placeholder="Name"
                  required
                />

                <Form.Control
                  className="mb-3"
                  name="userEmail"
                  aria-label="email"
                  placeholder="Email"
                  required
                />

                <Form.Control
                  className="mb-3"
                  name="phone"
                  aria-label="phone"
                  placeholder="Phone"
                  required
                />

                <Form.Control
                  name="message"
                  aria-label="message"
                  className="mb-3"
                  as="textarea"
                  placeholder="Message"
                  required
                />
              </FormGroup>
              <Button type="submit">Send</Button>
            </Form>
          </Col>


    )
}

export default ContactUs;
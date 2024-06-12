import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import lottieanimation from '../Animation - 1718092338892 (1).json';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8pr5vcn', 'template_jpwfdtj', form.current, 'uXsOzKUaUXFXfdE2O')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <div className="contact-container">
            <div className="contact-left" style={{ width: '48%' }}>
                <form ref={form} onSubmit={sendEmail} className="contact-form" id="myForm">
                    <h2><span style={{ color: '#333' }}>Contact Us</span></h2>
                    {/* <label>Name</label> */}
                    <input type="text" name="name" required placeholder="Name" />
                    {/* <label>Email</label> */}
                    <input type="email" name="email" required placeholder="Email" />
                    {/* <label>Message</label> */}
                    <textarea name="message" required placeholder="Message" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="contact-right">
                <Lottie animationData={lottieanimation} style={{ width: '46%' }} className="contact-animation" />
                <h2>Contact Information</h2>
                <p>Phone: +91 7588542265</p>
                <p>Email: info@northwayarchitects.com</p>
            </div>
        </div>
    );
};

export default Contact;


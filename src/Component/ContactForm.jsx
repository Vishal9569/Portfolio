import React, { useState } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export function ContactForm() {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        // Basic form validation
        if (!form.to_name.value || !form.user_email.value || !form.message.value) {
            alert('Please fill out all the fields.');
            return;
        }

        setFormStatus('Form submitted!');
        setTimeout(() => {
            alert('Your message has been sent successfully!');
            form.reset();
            setFormStatus('');
        }, 1000);
    };

    return (
        <div className="ConnectMe" id="Contact">
            <h2>Connect Us</h2>
            <div className="mainForm">
                <img src="./connect.png" alt="Connect" />
                <form name="contact" netlify className="Contact-form">
                    <div className="NameDiv">
                        <p><BsFillPersonFill /> Name</p>
                        <input type="text" name="name" required />
                    </div>

                    <div className="EmailDiv">
                        <p><MdOutlineAlternateEmail /> Email</p>
                        <input type="email" name="email" required />
                    </div>

                    <div className="MessageBox">
                        <p><MdOutlineMail /> Message</p>
                        <textarea rows="6" name="message" required></textarea>
                    </div>
                    <button type="submit"><IoIosSend /> Send Message</button>
                </form>

            </div>
        </div>
    );
}

export default ContactForm;

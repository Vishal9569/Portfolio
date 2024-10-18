import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
function ContactForm() {
    return (
        <div className="ConnectMe" id="Contact">
            <h2>Connect Us</h2>
            <div className="mainForm">
                <img src="./connect.png" alt="Connect" />
                <form className="Contact-form" action='#'>
                    <div className="NameDiv">
                        <p><BsFillPersonFill /> Name</p>
                        <input type="text" />
                    </div>

                    <div className="EmailDiv">
                        <p><MdOutlineAlternateEmail /> Email</p>
                        <input type="email" />
                    </div>

                    <div className="MessageBox">
                        <p><MdOutlineMail /> Message</p>
                        <textarea rows="6"></textarea>
                    </div>

                    <button><IoIosSend />Send Message</button>
                </form>
            </div>
        </div>

    )
}

export default ContactForm;
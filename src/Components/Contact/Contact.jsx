import React from 'react'
import ContactImg from "../../Assets/contactus.svg"
import "./Contact.css"
export default function Contact() {
    return (
        <div className="container">
            <div className="contact-wrapper">
                <div className="img">
                    <img className="img-fluid" src={ContactImg} alt="contact_illustration" />
                </div>
                <div className="contact-content">
                    <h1>Contact US</h1>
                    <div>
                        <label htmlFor="#name">Enter Name</label>
                        <div><input className="form-control" type="text" id="name" placeholder="E.g. Jhon Doe" /></div>
                    </div>

                    <div>
                        <label htmlFor="#mail">Enter Mail</label>
                        <div><input className="form-control" type="mail" id="mail" placeholder="E.g. Jhondoe@gmail.com" /></div>
                    </div>

                    <div>
                        <label htmlFor="#subject">Enter Subject</label>
                        <div><input className="form-control" type="text" id="subject" /></div>
                    </div>

                    <div>
                        <label htmlFor="#message">Enter Message</label>
                        <div><textarea className="form-control" id="message"></textarea></div>
                    </div>
                    <div>
                        <button className="btn btn-hire">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

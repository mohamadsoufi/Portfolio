import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import classNames from "classnames";

export default function Contact(props) {
    let { popup, contactPageProp } = props;

    const [contactPage, setContactPage] = useState("");
    const [sendMsg, setSendMsg] = useState(false);
    useEffect(() => {
        if (contactPageProp !== null) {
            setContactPage(contactPageProp);
        } else {
            setContactPage("contactPage");
        }
        // setSendMsg(false);
    }, [contactPageProp, sendMsg]);

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_27i2ykv",
                "template_zvw2vu2",
                e.target,
                "user_IgHB6WPsAng0NHnDeEflQ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
                setSendMsg(true)
            );
    }
    let contactContainer = classNames({
        "contact-container": true,
        popup,
        contactPage,
    });

    return (
        <div className={contactContainer}>
            <h3>
                <span role="img" aria-label="finger">
                    👇🏼
                </span>
                Contact me
            </h3>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <input
                    type="text"
                    name="user_name"
                    placeholder=" Name"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder=" Email"
                    required
                />
                <textarea
                    name="message"
                    placeholder=" Please write a message to me"
                    required
                />
                <input className="send-btn" type="submit" value="Send" />
                {sendMsg && (
                    <h1 className="send-msg">
                        Sent!
                        <span role="img" aria-label="finger">
                            🥳
                        </span>
                    </h1>
                )}
            </form>
        </div>
    );
}

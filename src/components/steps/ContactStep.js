import React from 'react';
import { Input } from 'antd';

const ContactStep = ({ contact }) => {
    const handleNameChange = ({ target }) => {
        contact.name = target.value;
    };

    const handlePhoneChange = ({ target }) => {
        contact.phone = target.value;
    };

    const handleEmailChange = ({ target }) => {
        contact.email = target.value;
    };

    return (
        <Input.Group>
            <Input onChange={handleNameChange} value={contact.value} placeholder="Your name" />
            <Input onChange={handlePhoneChange} value={contact.phone} placeholder="Your phone number" />
            <Input onChange={handleEmailChange} value={contact.email} placeholder="Your email" />
        </Input.Group>
    );
};

export default ContactStep;
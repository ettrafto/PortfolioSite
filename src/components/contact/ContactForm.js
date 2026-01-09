import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                await emailjs.send(
                    'service_2duai76',   // Replace with your EmailJS Service ID
                    'template_iozjnxb',   // Replace with your EmailJS Template ID
                    formData,
                    'D7PKVm4zaJad74jjy'     // Replace with your EmailJS Public Key
                );
                setStatus('SUCCESS');
                setFormData({ name: '', email: '', message: '' }); // Clear form fields
            } catch (error) {
                setStatus('FAILED');
                console.error('Failed to send email:', error);
            }
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit">Send Message</button>
                {status === 'SUCCESS' && <p className="success-message">Message sent successfully!</p>}
                {status === 'FAILED' && <p className="error-message">Failed to send message. Please try again.</p>}
            </form>
        </div>
    );
};

export default ContactForm;

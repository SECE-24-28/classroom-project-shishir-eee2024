import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
                console.log('Form submitted:', formData);
                alert(`Thank you ${formData.name}! Your message has been sent. We'll contact you at ${formData.email}.`);
                setFormData({ name: '', email: '', message: '' });
    };
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <div className="info-item">
                        <span>📧</span>
                        <p>Email: support@shopeasy.com</p>
                    </div>
                    <div className="info-item">
                        <span>📞</span>
                        <p>Phone: +9779811557177</p>
                    </div>
                    <div className="info-item">
                        <span>📍</span>
                        <p>Address: Ramgram-16 Nawalparasi West, Nepal</p>
                    </div>
                </div>
                
                <div className="contact-form">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
                        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
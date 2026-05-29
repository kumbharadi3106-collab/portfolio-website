import React, { useState } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: '[Email]',
    label: 'Email',
    value: 'kumbharadi3106@gmail.com',
    href: 'mailto:kumbharadi3106@gmail.com',
  },
  {
    icon: '[Phone]',
    label: 'Phone',
    value: '+91 9137576070',
    href: 'tel:+919137576070',
  },
  {
    icon: '[Loc]',
    label: 'Location',
    value: 'Maharashtra, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: '[Git]',
    label: 'GitHub',
    href: 'https://github.com/kumbharadi3106-collab',
    color: '#94a3b8',
  },
  {
    icon: '[Link]',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: '#0ea5e9',
  },
  {
    icon: '[Email]',
    label: 'Email',
    href: 'mailto:kumbharadi3106@gmail.com',
    color: '#06b6d4',
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <div className="contact">
      <div className="section">
        <h2 className="section-title">Contact Me</h2>

        <p className="contact-subtitle">
          Have a question, project idea, or just want to say hi? I would love to hear from you!
        </p>

        <div className="contact-layout">
          <div className="contact-form-wrapper glass-card">
            <h3 className="form-title">Send a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Aditya Kumbhar"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Hey Aditya, I wanted to reach out about..."
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn btn btn-primary">
                Send Message
              </button>

              {status === 'success' && (
                <div className="form-status success">
                  Message sent! I will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  Please fill in all fields.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-card glass-card">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <p className="info-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="info-value link">
                        {item.value}
                      </a>
                    ) : (
                      <p className="info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section glass-card">
              <h4 className="social-heading">Find me on</h4>
              <div className="social-row">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label={social.label}
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon-emoji">{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="fun-note glass-card">
              <p>
                I am always open to learning opportunities, internships, and collaboration on
                beginner friendly open source projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

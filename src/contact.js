import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Tetris from './tetris';
import { Theme } from './theme';

function Contact() {
  const { theme } = useContext(Theme);
  const [formData, setFormData] = useState({
    email: '',
    services: [],
  });

  const servicesList = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Fullstack Development',
    'UI/UX Design',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: formData.email,
      services: formData.services,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        alert('Your request has been sent successfully!');
        setFormData({ email: '', services: [] });
      })
      .catch((err) => {
        alert('Failed to send your request. Please try again.');
      });
  };

  return (
    <section id="contact" className={`contact ${theme}`}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Services you are interested in:</label>
          {servicesList.map((service) => (
            <div key={service} className="checkbox">
              <label>
                {service}
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleChange}
                />
              </label>
            </div>
          ))}
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
      <Tetris />
    </section>
  );
}

export default Contact;

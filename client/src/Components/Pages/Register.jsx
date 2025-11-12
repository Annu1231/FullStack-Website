// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    language: [],      // array of selected languages
    email: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'language') {
      // toggle a language in languages array
      setForm(prev => {
        const exists = prev.language.includes(value);
        return {
          ...prev,
          language: exists
            ? prev.language.filter(l => l !== value)
            : [...prev.language, value],
        };
      });
    } else if (type === 'checkbox' && name === 'terms') {
      setForm(prev => ({ ...prev, terms: checked }));
    } else if (type === 'radio') {
      setForm(prev => ({ ...prev, [name]: value }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // front-end validation (simple)
    if (!form.firstName || !form.lastName || !form.gmail) {
      alert('Please fill First Name, Last Name and Email.');
      return;
    }
    if (!form.terms) {
      alert('You must accept the terms and conditions.');
      return;
    }

    try {
  const url = '/api/users/register'; // या 'http://localhost:5000/api/users/register' (if no proxy)
  console.log('Sending payload:', form);
 const res = await axios.post('http://localhost:5000/api/users/register', form);
  console.log('Success response:', res.data);
  alert('Registered successfully!');
  // reset...
} catch (err) {
  // show full info
  console.error('Axios error full ->', err);
  console.error('Response data ->', err?.response?.data);
  console.error('Response status ->', err?.response?.status);
  const serverMsg = err?.response?.data?.message;
  alert(serverMsg || err.message || 'Registration failed — check console');
}
  };

  return (
    <div className="form-container">
      <h2>Get Started Today!</h2>
      <p>Fill in your details and take control of your tasks.</p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Gender</label>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={form.gender === 'Male'}
                onChange={handleChange}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={form.gender === 'Female'}
                onChange={handleChange}
              />{' '}
              Female
            </label>
          </div>
        </div>

        <div className="input-group">
          <label>Language</label>
          <div className="language-group">
            <label>
              <input
                type="checkbox"
                name="language"
                value="English"
                checked={form.language.includes('English')}
                onChange={handleChange}
              />{' '}
              English
            </label>
            <label>
              <input
                type="checkbox"
                name="language"
                value="Hindi"
                checked={form.language.includes('Hindi')}
                onChange={handleChange}
              />{' '}
              Hindi
            </label>
            <label>
              <input
                type="checkbox"
                name="language"
                value="Marathi"
                checked={form.language.includes('Marathi')}
                onChange={handleChange}
              />{' '}
              Marathi
            </label>
          </div>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="gmail"
            value={form.gmail}
            onChange={handleChange}
          />
        </div>

        <div className="terms">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />{' '}
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>

        <button type="submit" className="sbutton">Done</button>
      </form>
    </div>
  );
};

export default Register;

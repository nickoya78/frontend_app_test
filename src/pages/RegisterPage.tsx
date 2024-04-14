
import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config/config';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users/register`, { email, password });
      console.log('Registration successful. Please check your email.', response.data);
    } catch (error) {
        console.error('An error occurred while registering:', error);
      }
    }

    return (
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  };

export default RegisterPage;
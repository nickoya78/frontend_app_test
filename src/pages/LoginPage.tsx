import React, { useState } from 'react';
import axios from 'axios';

// Replace with your Elastic Beanstalk environment's URL
const API_URL = 'http://backend-test-app-env.eba-kgsm3q4m.us-west-1.elasticbeanstalk.com';

const LoginPage: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/login`, { email, password });
      console.log('Logged in successfully:', response.data);
      // Handle storing JWT token and redirecting the user
    } catch (error) {
      console.error('An error occurred while logging in:', error);
    }
  };

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
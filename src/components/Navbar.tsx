import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <nav>
      <Link className="mr-3 p-3" to="/">Home</Link>
      <Link className="mr-3 p-3" to="/login">Login</Link>
      <Link className="mr-3 p-3" to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;


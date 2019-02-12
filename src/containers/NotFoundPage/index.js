import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>Page not found.</h1>
    <Link to="/">go home</Link>
  </div>
);

export default NotFoundPage;
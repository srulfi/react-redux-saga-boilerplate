import React from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../constants/Routes';

const NotFoundPage = () => (
	<div>
		<h1>Page not found.</h1>
		<Link to={Routes.HOME}>go home</Link>
	</div>
);

export default NotFoundPage;

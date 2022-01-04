import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent }) => {
	const isLogin = localStorage.getItem('access_token');

	return isLogin ? <RouteComponent /> : <Navigate to='/login' />;
};

export default PrivateRoute;

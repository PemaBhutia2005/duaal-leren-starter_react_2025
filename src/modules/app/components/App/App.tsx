import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';

export const App = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === '/') {
			navigate('/home');
		}
	}, []);

	return <Outlet />;
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import PokeBuzz from './pages/PokeBuzz/PokeBuzz';
import './index.css';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Home />
		},
		{
			path: 'pokeBuzz',
			element: <PokeBuzz />
		}
	],
	{
		basename: process.env.PUBLIC_URL
	}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

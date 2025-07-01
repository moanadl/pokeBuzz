import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import PokeBuzz from './pages/PokeBuzz/PokeBuzz';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: 'pokeBuzz',
		element: <PokeBuzz />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);


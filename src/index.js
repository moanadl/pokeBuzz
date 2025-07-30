import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PokeBuzzQuiz from './pages/PokeBuzzQuiz/PokeBuzzQuiz';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pokeBuzz" element={<PokeBuzzQuiz />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

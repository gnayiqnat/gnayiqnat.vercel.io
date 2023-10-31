import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import Homepage from './homepage';
import { ThemeProvider, createTheme } from '@mui/material';

// ---------------------
function App() {
	return (
		<>
				<BrowserRouter>
					<Routes>
						<Route exact path='/' element={<Homepage />} />
					</Routes>
				</BrowserRouter>
		</>
	);
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import Homepage from './homepage';
import { useEffect } from 'react';

// ---------------------
function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={
								<Homepage />
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import Homepage from './homepage';
import { ThemeProvider, createTheme } from '@mui/material';
import { useEffect } from 'react';
import InProgressWarning from './InProgressWarning';

// ---------------------
function App() {
	const [IsFirstTime, setIsFirstTime] = useState(true);

	useEffect(() => {
		if (window.location.href.includes('?bypassWarning=true')) {
			setIsFirstTime(false);
		}
		if (IsFirstTime !== true) {
			document.cookie = 'isFirstTime=false';
		}
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={
							document.cookie === 'isFirstTime=false' ? (
								<Homepage />
							) : (
								<InProgressWarning setIsFirstTime={setIsFirstTime} />
							)
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

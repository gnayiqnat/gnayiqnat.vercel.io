import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import Homepage from './homepage';
import { useEffect } from 'react';
import InProgressWarning from './InProgressWarning';

// ---------------------
function App() {
	const [IsFirstTime, setIsFirstTime] = useState(true);

	useEffect(() => {
		if (window.location.href.includes('?bypassWarning=true')) {
			setIsFirstTime(false);
			document.cookie = 'isFirstTime=false; SameSite=Strict; Secure';
		} else if (IsFirstTime === false) {
			document.cookie = 'isFirstTime=false; SameSite=Strict; Secure';
		}
	}, [IsFirstTime]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path='/'
						element={
							IsFirstTime === false || document.cookie.includes('isFirstTime=false') ? (
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

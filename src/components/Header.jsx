// Header.js
import React from 'react';
import { Grid } from '@mui/material';
import logo from '/gnayiqnat-logo.png';

function Header() {
	return (
		<Grid
			container
			sx={{
				padding: '30px 25px 0px 25px',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Grid item>
				<img src={logo} style={{ width: '60px' }} />
			</Grid>
		</Grid>
	);
}

export default Header;

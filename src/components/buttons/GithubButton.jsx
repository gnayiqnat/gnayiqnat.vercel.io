// GithubButton.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import { FiGithub } from 'react-icons/fi';

function GithubButton() {
	return (
		<Button
			target='_blank'
			href='https://github.com/gnayiqnat'
			sx={{

				color: '#ffffff',
				borderStyle: 'solid',
				borderWidth: '2px',
				borderColor: '#ffffff',
				padding: '10px 20px',
				gap: '10px',
				textTransform: 'none',
				borderRadius: '30px',
			}}
		>
			<Typography sx={{ fontSize: '18px' }}>Github</Typography>
			<FiGithub size='18px' />
		</Button>
	);
}

export default GithubButton;

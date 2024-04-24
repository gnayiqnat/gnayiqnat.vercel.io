// Header.js
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Header() {
	return (
		<Grid
			container
			sx={{
				padding: '25px',
				
				justifyContent: 'end',
				alignItems: 'center',
			}}
		>
			
		</Grid>
	);
}

export default Header;

// GithubButton
function GithubButton() {
	return (
		<motion.div initial={{ opacity: 1 }} whileHover={{ opacity: 0.3 }}>
			<IconButton
				target='_blank'
				href='https://github.com/gnayiqnat'
				sx={{
					color: 'primary.main',
					gap: '10px',
					textTransform: 'none',
					borderRadius: '30px',
				}}
			>
				<FaGithub fontSize='25px' />
			</IconButton>
		</motion.div>
	);
}

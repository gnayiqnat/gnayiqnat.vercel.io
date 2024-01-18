// ButtonOutlined.jsx
import React from 'react';
import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function ButtonOutlined(props) {
	return (
		<motion.button
			style={{
				backgroundColor: 'transparent',
				borderStyle: 'solid',
				borderColor: '#c60054',
				borderRadius: 20,
				padding: '13px 15px',
				cursor: 'pointer',
			}}
			whileHover={{opacity: 0.3}}
		>
			<Typography sx={{ color: '#c60054', fontSize: '20px', fontWeight: 500 }}>
				{props.text}
			</Typography>
		</motion.button>
	);
}

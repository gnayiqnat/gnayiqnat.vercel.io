// ButtonOutlined.jsx
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

export default function ButtonOutlined({ text, onClick }) {
	return (
		<>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 0.95 }}
				whileTap={{ scale: 0.8 }}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button
						variant='outlined'
						sx={{
							borderColor: 'primary.main',
							borderWidth: '1.8px',
							backgroundColor: '#ffffff',
							padding: '15px 20px',
							width: '100%',
							borderRadius: '15px',
							'&:hover': {
								borderWidth: '1.8px',
								backgroundColor: 'transparent',
							},
						}}
						onClick={() => {
							onClick && onClick();
						}}
					>
						<Typography
							sx={{
								opacity: 0.9,
								fontFamily: 'Nunito',
								textTransform: 'none',
								color: 'primary.main',
								fontWeight: '600',
								fontSize: '18px',
							}}
						>
							{text ? text : 'null'}
						</Typography>
					</Button>
				</Box>
			</motion.div>
		</>
	);
}

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
						sx={{
							borderColor: 'primary.main',
							borderWidth: '1.8px',
							backgroundColor: '#ffffff',
							padding: '12px 18px',
							width: '100%',
							borderRadius: '7px',
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

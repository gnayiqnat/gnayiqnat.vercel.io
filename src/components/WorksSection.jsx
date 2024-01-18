// WorksSection.js
import React, { useRef } from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import digitalascentPeek from '/digitalascent-peek.png';
import { motion } from 'framer-motion';
function WorksSection() {
	const MotionCard = motion(Card);

	return (
		<section>
			<Grid container sx={{ padding: '5vh 5vw', height: '100dvh' }}>
				{/* 
				<Typography
					variant='h3'
					sx={{ color: '#c60054', fontWeight: 600, marginBottom: '30px' }}
				>
					My Works
				</Typography>
				 */}
				<Grid
					container
					sx={{ flexDirection: 'column', gap: '30px', height: '80dvh' }}
				>
					<Grid item>
						<MotionCard
							whileHover={{ borderColor: '#c60054', opacity: 1 }}
							variant='outlined'
							sx={{
								backgroundColor: 'transparent',
								borderColor: '#550024',
								opacity: 0.6,
								padding: 1.5,
								borderRadius: 3,
								width: '330px',
								maxWidth: '80vw',
							}}
						>
							<a
								draggable='false'
								target='_blank'
								href='https://digitalascent.space'
								style={{ width: '330px', maxWidth: '80vw' }}
							>
								<img
									draggable='false'
									style={{
										width: '330px',
										maxWidth: '80vw',
										borderRadius: '7px',
									}}
									src={digitalascentPeek}
								/>
							</a>
						</MotionCard>{' '}
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}

export default WorksSection;

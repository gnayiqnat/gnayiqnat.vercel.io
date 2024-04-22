// WorksSection.js
import React, { useRef } from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
function WorksSection() {
	const MotionCard = motion(Card);

	const listofWorks = [
		{ url: 'https://digitalascent.space', img: '/digitalascent-peek.png' },
		{ url: 'https://msssa.pages.dev', img: '/msssa-peek.png' },
	];
	return (
		<section id='sec-2'>
			<Grid
				container
				sx={{
					padding: 3,
					height: '100dvh',
					display: 'grid',
					placeContent: 'center',
				}}
			>
				{/* <Typography
                align='center'
					variant='h4'
					sx={{ color: '#c60054',fontFamily: 'Nunito', fontWeight: 500, marginBottom: '30px' }}
				>
					Projects
				</Typography> */}

				<Grid
					container
					sx={{
						display: 'flex',
						gridTemplateColumns: '350px 350px',
						gap: '30px',
						height: '80dvh',
					}}
				>
					{listofWorks.map((e, i) => (
						<Grid item key={i} sx={{ margin: '0 auto' }}>
							<MotionCard
								whileHover={{
									borderColor: '#c60054',
									opacity: 1,
								}}
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
									href={e.url}
									style={{ width: '330px', maxWidth: '80vw' }}
								>
									<img
										draggable='false'
										style={{
											width: '330px',
											maxWidth: '80vw',
											borderRadius: '7px',
										}}
										src={e.img}
									/>
								</a>
							</MotionCard>
						</Grid>
					))}
				</Grid>
			</Grid>
		</section>
	);
}

export default WorksSection;

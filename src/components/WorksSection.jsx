// WorksSection.js
import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import digitalascentPeek from '/digitalascent-peek.png';

function WorksSection() {
	return (
		<section>
			<Grid container sx={{ padding: '5vw', height: '100dvh' }}>
				<Typography
					variant='h3'
					sx={{ color: '#c60054', fontWeight: 600, marginBottom: '30px' }}
				>
					My Works
				</Typography>
				<Grid
					container
					sx={{ flexDirection: 'column', gap: '30px', height: '80dvh' }}
				>
					<Grid item sx={{ backgroundColor: 'transparent' }}>
						<Card
							variant='outlined'
							sx={{
								backgroundColor: 'transparent',
								borderColor: '#c60054',
								padding: 1.5,
								borderRadius: 3,
								width: '330px',
								maxWidth: '80vw',
							}}
						>
							<a target='_blank' href='https://digitalascent.space'>
								<img
									style={{
										width: '330px',
										maxWidth: '80vw',
										borderRadius: 3,
									}}
									src={digitalascentPeek}
								/>
							</a>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}

export default WorksSection;

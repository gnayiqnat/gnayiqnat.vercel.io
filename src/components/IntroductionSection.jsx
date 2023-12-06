// IntroductionSection.jsx
import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import ButtonOutlined from './buttons/ButtonOutlined';
import GithubButton from './buttons/GithubButton';

function IntroductionSection() {
	return (
		<>
			<Grid
				container
				sx={{
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 'clamp(100px, 20vh, 30vh)',
                    gap: '30px',
                    
                    marginBottom: '20vh',
				}}
			>
				<Grid item>
					<Typography
						variant='h2'
						sx={{
							fontWeight: 700,
							lineHeight: 0.7,
							fontSize: { xs: 50 },
						}}
					>
						i am
					</Typography>
					<Typography
						sx={{
							color: '#c60054',
							fontWeight: 700,
							lineHeight: 0.5,
							fontSize: { xs: 60, sm: 80, md: 100 },
						}}
						gutterBottom
					>
						gnayiqnat.
					</Typography>
					<Grid container sx={{ justifyContent: 'center', padding: '30px' }}>
						<Grid item>
							<ButtonOutlined text='Explore my works' />
						</Grid>
					</Grid>
				</Grid>
			</Grid>{' '}
		</>
	);
}

export default IntroductionSection;

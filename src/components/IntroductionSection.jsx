// IntroductionSection.jsx
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ButtonOutlined from './buttons/ButtonOutlined';
import { motion } from 'framer-motion';
import ButtonFilled from './buttons/ButtonFilled';
import ParallaxText from '../parallaxText/ParallaxText';

function IntroductionSection() {
	return (
		<>
			<Box
				sx={{
					height: '100dvh',
					display: 'grid',
					placeContent: 'center',
				}}
			>
				<Grid
					container
					sx={{
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100vw',
					}}
				>
					<Grid item>
						<Typography
							gutterBottom
							align='center'
							sx={{
								color: 'primary.main',
								fontWeight: 700,
								lineHeight: 0.5,
								fontSize: { xs: 60, sm: 80, md: 100 },
								marginBottom: '35px',
							}}
						>
							gnayiqnat
						</Typography>
						{/*<Typography
						align='center'
						sx={{
							color: 'primary.main',
							opacity: 0.5,
							fontSize: '23px',
							fontFamily: 'Nunito',
							fontWeight: '400',
							
						}}
					>
					</Typography>*/}

						<Grid
							container
							sx={{
								justifyContent: 'center',
								padding: '30px',
								marginTop: '10px',
								gap: '10px 15px',
								marginBottom: '-10px',
							}}
						>
							<Grid item>
								<ButtonOutlined
									text='About me'
									onClick={() => {
										document
											.getElementById('about-me')
											.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</Grid>
							<Grid item>
								<ButtonFilled
									text='My Projects'
									onClick={() => {
										document
											.getElementById('sec-2')
											.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}


export default IntroductionSection;

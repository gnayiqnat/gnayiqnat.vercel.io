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
					height: '100lvh',
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
						width: '80vw',
					}}
				>
					<Grid item>
						<Typography
							gutterBottom
							align='center'
							sx={{
								color: 'primary.main',
								fontWeight: 400,
								lineHeight: 1,
								fontSize: {xs:30 , md: 40},
								maxWidth: 700,
								marginBottom: '35px',
							}}
						>
							Hello, I am <b>Tan Qi Yang. </b> A full-stack web developer based in
							Malaysia.
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
									text='My Skills'
									onClick={() => {
										document
											.getElementById('language')
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

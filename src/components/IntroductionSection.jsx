// IntroductionSection.jsx
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ButtonOutlined from './buttons/ButtonOutlined';
import GithubButton from './buttons/GithubButton';
import { motion } from 'framer-motion';
import ButtonFilled from './buttons/ButtonFilled';

function IntroductionSection(props) {
	return (
		<Box sx={{height: '100dvh',maxHeight: '100dvh', display: 'grid', placeContent: 'center'}}>
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
					<Typography
						align='center'
						sx={{
							color: 'secondary.main',
							fontSize: '23px',
							fontFamily: 'Inter',
						}}
					>
						Full-stack web developer
					</Typography>
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
									alert('A');
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
			<Grid
				container
				sx={{
					width: '100vw',
					padding: '20px',
					justifyContent: 'end',
					padding: '10px 30px',
				}}
			>
				<Grid item>
					<GithubButton />
				</Grid>
			</Grid>
		</Box>
	);
}

function ExploreButton(props) {
	return (
		<>
			<Button
				variant='outlined'
				sx={{
					backgroundColor: 'primary.main',
					borderRadius: 3,
					padding: '13px 15px',
					cursor: 'pointer',
					textTransform: 'none',
				}}
			>
				<motion.div
					whileHover={{ opacity: 0.3 }}
					onClick={() => {
						document
							.getElementById('sec-2')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Nunito',
							color: 'white',
							fontSize: '20px',
							fontWeight: 400,
						}}
					>
						{props.text}
					</Typography>
				</motion.div>
			</Button>
		</>
	);
}

export default IntroductionSection;

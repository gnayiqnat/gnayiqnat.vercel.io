// IntroductionSection.jsx
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ButtonOutlined from './buttons/ButtonOutlined';
import GithubButton from './buttons/GithubButton';
import { motion } from 'framer-motion';

function IntroductionSection(props) {
	return (
		<>
			<Grid
				container
				sx={{
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 'clamp(100px, 20dvh, 30dvh)',
					width: '100vw',
					marginBottom: '10dvh',
					position: 'relative',
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
						gutterBottom
						sx={{
							color: '#c60054',
							fontWeight: 700,
							lineHeight: 0.5,
							fontSize: { xs: 60, sm: 80, md: 100 },
						}}
					>
						gnayiqnat.
					</Typography>
					<Grid container sx={{ justifyContent: 'center', padding: '30px' }}>
						<Grid item>
							<ExploreButton
								exploreIsClicked={props.exploreIsClicked}
								setExploreIsClicked={props.setExploreIsClicked}
								text='Explore my works'
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>{' '}
			<Grid
				container
				sx={{
					width: '100vw',
					padding: '20px',
					justifyContent: 'end',
				}}
			>
				<Grid item>
					<GithubButton />
				</Grid>
			</Grid>
		</>
	);
}

function ExploreButton(props) {
	return (
		<>
			<motion.button
				onClick={() => {
					props.setExploreIsClicked(true);
				}}
				style={{
					backgroundColor: 'transparent',
					borderStyle: 'solid',
					borderColor: '#c60054',
					borderRadius: 20,
					padding: '13px 15px',
					cursor: 'pointer',
				}}
				whileHover={{ opacity: 0.3 }}
			>
				<Typography
					sx={{ color: '#c60054', fontSize: '20px', fontWeight: 500 }}
				>
					{props.text}
				</Typography>
			</motion.button>
		</>
	);
}

export default IntroductionSection;

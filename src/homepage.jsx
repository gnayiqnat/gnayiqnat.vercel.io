import { Typography, Box, Grid, Card, Button } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';

// icons
import { FiMenu } from 'react-icons/fi';
import logo from '../public/gnayiqnat-logo.png';
import digitalascentPeek from '../public/digitalascent-peek.png';

export default function Homepage() {
	return (
		<>
			<Grid
				container
				sx={{
					padding: '30px 20px 0px 20px',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Grid item>
					<img src={logo} style={{ width: '60px' }} />
				</Grid>
				<Grid item>
					<FiMenu style={{ fontSize: '40px' }} />
				</Grid>
			</Grid>
			<section style={{ marginBottom: 'clamp(300px, 20vh, 30vh)' }}>
				<Grid
					container
					sx={{
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',

						marginTop: 'clamp(100px, 20vh, 30vh)',
						gap: '30px',
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
					</Grid>
					<Grid item>
						<ExploreButton />
					</Grid>
				</Grid>
			</section>
			<section>
				<Grid container sx={{ padding: '5vw', height: '100dvh'}}>
					<Typography
						variant='h3'
						sx={{ color: '#c60054', fontWeight: 600, marginBottom: '30px' }}
					>
						My Works
					</Typography>
					<Grid container sx={{ flexDirection: 'column', gap: '30px', height: '80dvh' }}>
						<Grid item sx={{ backgroundColor: 'transparent' }}>
							<a href='https://digitalascent.space'>
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
									<img
										style={{
											width: 'inherit',
											maxWidth: 'inherit',
											borderRadius: 3,
										}}
										src={digitalascentPeek}
									/>
								</Card>
							</a>
						</Grid>
					</Grid>
				</Grid>
			</section>
		</>
	);
}

function ExploreButton() {
	const exploreClick = useAnimationControls();

	function handleExploreClick() {
		exploreClick.start({});
	}

	return (
		<>
			<motion.button
				animate={exploreClick}
				onClick={handleExploreClick}
				style={{
					backgroundColor: '#c60054',
					borderStyle: 'none',
					borderRadius: 20,
					padding: '15px 20px',
				}}
			>
				<Typography sx={{ color: 'white', fontSize: 20, fontWeight: 500 }}>
					Explore my works
				</Typography>
			</motion.button>
		</>
	);
}

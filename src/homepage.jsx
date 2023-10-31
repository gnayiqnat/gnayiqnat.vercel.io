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
					padding: '2rem',
					paddingBottom: '0',
					paddingTop: '1.5rem',
					justifyContent: 'space-between',
					alignItems: 'end',
				}}
			>
				<img src={logo} style={{ width: '60px' }} />
				<FiMenu style={{ fontSize: '40px' }} />
			</Grid>
			<section>
				<Grid
					container
					sx={{
						marginTop: -4,
						rowGap: 8,
						justifyContent: 'center',
						flexDirection: 'column',
						height: '92vh',
					}}
				>
					<Grid item>
						<Grid
							container
							sx={{ justifyContent: 'center', alignItems: 'center' }}
						>
							<Box>
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
								<Typography></Typography>
							</Box>
						</Grid>
					</Grid>
					<Grid item>
						<ExploreButton />
					</Grid>
				</Grid>
			</section>
			<section>
				<Grid container sx={{ padding: 5, height: '100vh' }}>
					<Typography variant='h3' sx={{ color: '#c60054', fontWeight: 600 }}>
						My Works
					</Typography>
					<Grid container sx={{ flexDirection: 'column' }}>
						<Grid item sx={{ backgroundColor: 'transparent' }}>
							<Grid container sx={{ columnGap: 4 }}>
								<Card
									variant='outlined'
									sx={{
										backgroundColor: 'transparent',
										borderColor: '#c60054',
										padding: 1.5,
										borderRadius: 3,
									}}
								>
									<img
										style={{ width: 330, borderRadius: 3 }}
										src={digitalascentPeek}
									/>
								</Card>
							</Grid>
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
			<Grid container sx={{ justifyContent: 'center' }}>
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
			</Grid>
		</>
	);
}

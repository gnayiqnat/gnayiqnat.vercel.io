import {
	Typography,
	Box,
	Grid,
	Card,
	Button,
	Avatar,
	IconButton,
} from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';

// icons
import { FiGithub, FiMenu } from 'react-icons/fi';
import logo from '../public/gnayiqnat-logo.png';
import digitalascentPeek from '../public/digitalascent-peek.png';

export default function Homepage() {
	return (
		<>
			<Grid
				container
				sx={{
					padding: '30px 25px 0px 25px',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Grid item>
					<img src={logo} style={{ width: '60px' }} />
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
				<Grid
					container
					sx={{
						position: 'absolute',
						width: '100vw',

						bottom: '0%',
						left: '0%',

						justifyContent: 'end',
						padding: '20px',
					}}
				>
					<Grid item>
						<Button
							target='_blank'
							href='https://github.com/gnayiqnat'
							sx={{
								color: '#ffffff',
								borderStyle: 'solid',
								borderWidth: '2px',
								borderColor: '#ffffff',

								padding: '10px 20px',

								gap: '10px',
								textTransform: 'none',

								borderRadius: '30px',
							}}
						>
							<Typography sx={{ fontSize: '18px' }}>Github</Typography>
							<FiGithub size='18px' />
						</Button>
					</Grid>
				</Grid>
				<Box
					sx={{
						width: '100vw',
						maxWidth: '100vw',
						overflow: 'hidden',
						position: 'absolute',
						opacity: 0.07,
						zIndex: '-1',
						top: '0%',
						alignItems: 'start',
					}}
				>
					<Typography
						sx={{
							color: '#c60054',
							fontWeight: 700,
							lineHeight: 0.5,
							fontSize: 335,
							marginLeft: '-100px',
						}}
						gutterBottom
					>
						gnayiqnatgnayiqnat
					</Typography>
				</Box>
			</section>
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

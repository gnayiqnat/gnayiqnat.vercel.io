// components
import { Box, Grid, Typography } from '@mui/material';
import BackgroundTypography from './components/BackgroundTypography';
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import WorksSection from './components/WorksSection';
import {
	AnimatePresence,
	motion,
	useAnimate,
	useAnimation,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import DigiAscePeek from './digiascepeek';

export default function Homepage() {
	const [scope, animate] = useAnimate();
	const [exploreIsClicked, setExploreIsClicked] = useState(false);
	const whichIsClicked = useRef(null);

	useEffect(() => {
		if (exploreIsClicked) {
			animate(scope.current, { scale: 0.6, x: '30vw' });
		} else if (exploreIsClicked === false) {
			animate(scope.current, { x: '0px', scale: 1 });
		}
	}, [exploreIsClicked]);

	return (
		<AnimatePresence>
			<Grid container sx={{ position: 'relative' }}>
				<Grid
					item
					ref={scope}
					onClick={() => {
						exploreIsClicked === true && setExploreIsClicked(false);
					}}
					sx={
						exploreIsClicked
							? {
									borderStyle: 'solid',
									borderWidth: '2px',
									borderRadius: '20px',
									borderColor: '#c60054',
									cursor: 'pointer',
									backgroundColor: '#202020',
							  }
							: { backgroundColor: '#202020' }
					}
				>
					<Header />

					<IntroductionSection
						exploreIsClicked={exploreIsClicked}
						setExploreIsClicked={setExploreIsClicked}
					/>

					{/* Backdrop */}
					<BackgroundTypography />
				</Grid>
			</Grid>

			{exploreIsClicked && (
				<Grid
					item
					sx={{
						width: '100vw',
						height: '100vh',
						backgroundColor: '#c60054',
						position: 'relative',
					}}
				>
					<motion.div
						whileHover={{ x: 'calc(-30vw + 25px)' }}
						initial={{ scale: 0.6, x: '-30vw' }}
					>
						<a href='https://digitalascent.space'>
							<div>
								<iframe
									style={{
										borderStyle: 'solid',
										borderWidth: '2px',
										borderRadius: '20px',
										borderColor: '#c60054',
										cursor: 'pointer',
										height: '100dvh',
										width: '100vw',
										pointerEvents: 'none',
									}}
									src='https://digitalascent.space'
								></iframe>{' '}
							</div>
						</a>
					</motion.div>
					<Box
						sx={{
							position: 'absolute',
							top: '20%',
							right: '25dvh',
							width: '400px',
							zIndex: '50',
						}}
					>
						<Typography variant='h3' sx={{ fontFamily: 'Inter' }} gutterBottom>
							Digital Ascent
						</Typography>
						<Typography variant='h6'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Voluptatum maiores ipsa non incidunt quas amet veniam, quisquam
							eveniet magnam, qui ipsam! Modi aliquam vero vel reiciendis a odio
							quibusdam ut.
						</Typography>
					</Box>
				</Grid>
			)}
		</AnimatePresence>
	);
}

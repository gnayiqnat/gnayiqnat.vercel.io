// components
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AboutMe from './AboutMeSection';
import BackgroundTypography from './components/BackgroundTypography';
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import LanguageSection from './components/LanguageSection';
import WorksSection from './components/WorksSection';
import ParallaxText from './parallaxText/ParallaxText';
import { useMediaQuery } from 'react-responsive';

export default function Homepage() {
	const isMobile = useMediaQuery({query: '(max-width: 800px)'})

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 0.75 }}
		>
			<Header />

			<Box sx={{ mt: '-50px' }}>
				<IntroductionSection />

				<Box
					sx={{
						width: '100vw',
						maxWidth: '100vw',
						height: '100lvh',
						overflow: 'hidden',
						position: 'absolute',
						top: '0%',
						alignItems: 'start',
						pointerEvents: 'none',
					}}
				>
					<ParallaxText baseVelocity={0.05}>
						<Typography
							sx={{
								opacity: 0.07,
								color: 'secondary.main',
								fontWeight: 700,
								lineHeight: 0.5,
								fontSize: '1450px',
								marginLeft: '-100px',
							}}
						>
							gnayiqnat
						</Typography>
					</ParallaxText>
				</Box>

				<WorksSection />

				{/*<AboutMe />*/}

				<LanguageSection />
			</Box>
		</motion.div>
	);
}

// components
import { Box, duration } from '@mui/material';
import BackgroundTypography from './components/BackgroundTypography';
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import WorksSection from './components/WorksSection';
import { motion } from 'framer-motion';

export default function Homepage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 0.75 }}
		>
			<Header />

			<IntroductionSection />

			<WorksSection />

			{/* Backdrop */}
			<BackgroundTypography />
		</motion.div>
	);
}

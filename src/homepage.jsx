// components
import BackgroundTypography from './components/BackgroundTypography';
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import WorksSection from './components/WorksSection';

export default function Homepage() {
	return (
		<>
			<Header />

			<IntroductionSection />

			<WorksSection />

\			
			{/* Backdrop */}
			<BackgroundTypography />
		</>
	);
}

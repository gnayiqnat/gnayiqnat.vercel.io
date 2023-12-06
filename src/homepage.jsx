
// components
import BackgroundTypography from './components/BackgroundTypography';
import Header from './components/Header';
import IntroductionSection from './components/IntroductionSection';
import WorksSection from './components/WorksSection';
import GithubButton from './components/buttons/GithubButton';

export default function Homepage() {
	return (
		<>
			<Header />

			<IntroductionSection />

			<WorksSection />


			<BackgroundTypography />
			<GithubButton />
		</>
	);
}

import { Box, Typography } from '@mui/material';

export default function LanguageSection() {
	const languagesList = [
		{ name: 'HTML', img: 'html-5.svg' }, // worldvectorlogo.com
		{ name: 'CSS', img: 'css-3.svg' }, // worldvectorlogo.com
		{ name: 'Javascript', img: 'javascript.svg' }, // worldvectorlogo.com
		{ name: 'React JS', img: 'react.svg' }, // worldvectorlogo.com
		{ name: 'Python', img: 'python.svg' }, // worldvectorlogo.com
		{ name: 'FastAPI', img: 'fastapi.svg' }, // worldvectorlogo.com
	];
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					padding: '20px',
					height: '100dvh',
					width: '100vw',
					gap: '20px',
					justifyContent: 'center',

					alignItems: 'center',
				}}
			>
				<Typography
					align='center'
					variant='h4'
					sx={{
						color: 'primary.main',
						fontFamily: 'Nunito',
						fontWeight: 500,
						marginBottom: '30px',
					}}
				>
					Skills
				</Typography>{' '}
				<Box
					sx={{
						display: 'flex',
						maxWidth: '450px',
						flexWrap: 'wrap',
						gap: '25px',
					}}
				>
					{languagesList.map((e, i) => (
						<Box
							key={i}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								padding: '10px',
							}}
						>
							<img
								style={{ width: '60px', height: '60px' }}
								src={`/languages-icons/${e.img}`}
							/>
							<Typography
								sx={{
									color: 'primary.main',
									fontFamily: 'Nunito',
									fontWeight: 500,
									fontSize: '18px',
								}}
							>
								{e.name}
							</Typography>
						</Box>
					))}{' '}
				</Box>
			</Box>
		</>
	);
}

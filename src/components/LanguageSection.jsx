import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function LanguageSection() {
	const languagesList = [
		{ name: 'HTML', img: 'html-5.svg' }, // worldvectorlogo.com
		{ name: 'CSS', img: 'css-3.svg' }, // worldvectorlogo.com
		{ name: 'Javascript', img: 'javascript.svg' }, // worldvectorlogo.com
		{ name: 'React JS', img: 'react.svg' }, // worldvectorlogo.com
		{ name: 'Python', img: 'python.svg' }, // worldvectorlogo.com
		{ name: 'FastAPI', img: 'fastapi.svg' }, // worldvectorlogo.com
		{ name: 'PostgreSQL', img: 'postgresql.svg' }, // https://wiki.postgresql.org/wiki/Logo
	];
	return (
		<>
			<Box
				id='language'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '100dvh',
					width: '100vw',
					padding: '70px 0px',
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
						maxWidth: '500px',
						display: 'grid',
						placeContent: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '30px',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{languagesList.map((e, i) => (
							<motion.div whileHover={{scale: 1.1}}>
								<Box
									key={i}
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										padding: '10px',
										gap: '5px',
									}}
								>
									<img
										style={{ width: '70px', height: '70px' }}
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
							</motion.div>
						))}{' '}
					</Box>
				</Box>
			</Box>
		</>
	);
}

import { Box, Typography } from '@mui/material';
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';

export default function LanguageSection() {
	return (
		<>
			<Box
				sx={{
					display: 'grid',
					placeContent: 'center',
					padding: '20px',
					height: '100dvh',
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
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: '20px',
						}}
					>
						<IoLogoJavascript
							fontSize='40px'
							style={{ color: 'yellow', backgroundColor: 'black' }}
						/>
						<Typography
							sx={{
								color: 'primary.main',
								fontFamily: 'Nunito',
								fontWeight: 600,
								fontSize: '20px',
							}}
						>
							Javascript
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: '20px',
						}}
					>
						<IoLogoReact
							fontSize='40px'
							style={{ color: 'cyan' }}
						/>
						<Typography
							sx={{
								color: 'primary.main',
								fontFamily: 'Nunito',
								fontWeight: 600,
								fontSize: '20px',
							}}
						>
							React JS
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
}

import { Box, Typography } from '@mui/material';
import { IoLogoJavascript } from 'react-icons/io5';

export default function LanguageSection() {
	return (
		<>
			<Box
				sx={{
					display: 'grid',
					placeContent: 'center',
					padding: '20px',
				}}
			>
				<Typography
					align='center'
					variant='h4'
					sx={{
						color: 'black',
						fontFamily: 'Nunito',
						fontWeight: 500,
						marginBottom: '30px',
					}}
				>
					Skills
				</Typography>{' '}
				<Box>
					<IoLogoJavascript />
				</Box>
			</Box>
		</>
	);
}

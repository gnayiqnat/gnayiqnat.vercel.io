import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

function DigiAscePeek() {
	return (
		<Container
			component='main'
			maxWidth='sm'
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				userSelect: 'none',
				marginTop: 14,
			}}
		>
			<Box>
				<Typography sx={headerStyle}>
					DIGITAL{' '}
					<Box marginLeft={3} color='primary.color'>
						ASCENT
					</Box>
				</Typography>
			</Box>
		</Container>
	);
}

export default DigiAscePeek;

const headerStyle = {
	lineHeight: 0.88,
	fontFamily: 'Monoton',
	variant: 'h1',
	fontSize: 'clamp(30px, 15vw, 105px)',
	fontWeight: 400,
	cursor: 'pointer',
};

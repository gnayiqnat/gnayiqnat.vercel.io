import { Box, Typography } from '@mui/material';

export default function AboutMe() {
	return (
		<>
			<Box
				id='about-me'
				sx={{ padding: '50px 30px', display: 'grid', placeContent: 'center' }}
			>
				<Typography
					gutterBottom
					align='center'
					sx={{
						fontFamily: 'Nunito',
						fontWeight: '600',
						fontSize: '30px',
						color: 'primary.main',
					}}
				>
					About me
				</Typography>
				<Typography
					align='center'
					sx={{
						fontFamily: 'Nunito',
						fontWeight: '400',
						fontSize: '22px',
						color: 'primary.main',
						maxWidth: '700px',
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
					eligendi eum dicta sed itaque libero inventore, iure, dolorem omnis
					autem deleniti hic et? Non nisi necessitatibus, a harum optio omnis.
				</Typography>
			</Box>
		</>
	);
}

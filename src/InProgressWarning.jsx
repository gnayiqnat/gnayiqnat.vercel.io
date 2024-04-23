import { Box, Button, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ButtonOutlined from './components/buttons/ButtonOutlined';
import ButtonFilled from './components/buttons/ButtonFilled';

export default function InProgressWarning(props) {
	return (
		<Grid
			container
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				height: '100dvh',
				gap: '25px',
			}}
		>
			<Grid item>
				<Typography
					align='center'
					sx={{ fontSize: '1.5rem', margin: '0px 25px', maxWidth: '700px' }}
				>
					This website is still in its baby stages. Sorry for any bugs or
					missing stuff you might find. Thank you for understanding.
				</Typography>
			</Grid>
			<Grid item>
				<ButtonFilled
					text={'Proceed Anyway'}
					onClick={() => {
						props.setIsFirstTime(false);
					}}
				/>
			</Grid>
		</Grid>
	);
}

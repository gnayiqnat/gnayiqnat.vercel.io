import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function InProgressWarning(props) {
	return (
		<Grid
			container
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				height: '100dvh',
				gap: '30px',

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
				<motion.button
					onClick={() => {
						props.setIsFirstTime(false);
					}}
					style={{
						backgroundColor: 'transparent',
						borderStyle: 'solid',
						borderColor: '#c60054',
						borderRadius: 20,
						padding: '13px 15px',
						cursor: 'pointer',
					}}
				>
					<Typography
						sx={{ color: '#c60054', fontSize: '20px', fontWeight: 500 }}
					>
						Proceed anyway
					</Typography>
				</motion.button>
			</Grid>
		</Grid>
	);
}

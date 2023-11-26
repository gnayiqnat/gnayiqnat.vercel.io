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
				padding: '130px',
				gap: '30px',
			}}
		>
			<Grid item>
				<Typography
					align='center'
					sx={{ maxWidth: 'clamp(500px, 80vw, 700px)', fontSize: '1.5rem' }}
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
						backgroundColor: '#c60054',
						borderStyle: 'none',
						borderRadius: 20,
                        padding: '13px 15px',
                        cursor: 'pointer',
					}}
				>
					<Typography sx={{ color: 'white', fontSize: '20px', fontWeight: 500 }}>
						Proceed anyway
					</Typography>
				</motion.button>
			</Grid>
		</Grid>
	);
}

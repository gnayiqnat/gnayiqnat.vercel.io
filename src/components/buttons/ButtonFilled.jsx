import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ButtonFilled({text, onClick}) {
	
	return (
		<>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 0.95 }}
				whileTap={{ scale: 0.8 }}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
				<Button
						sx={{
							backgroundColor: 'primary.main',
							padding: '15px 20px',
							width: '100%',
							borderRadius: '15px',
							'&:hover': {
								backgroundColor: 'primary.main',
							},
						}}
						onClick={() => {
							onClick();
						}}
					>
						<Typography
							sx={{
								opacity: 0.9,
								fontFamily: 'Nunito',
								textTransform: 'none',
								color: 'hsl(216, 18%, 85%)',
								fontWeight: '600',
								fontSize: '18px',
							}}
						>
							{text ? text : 'null'}
						</Typography>
					</Button>
				</Box>
			</motion.div>
		</>
	);
}

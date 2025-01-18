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
							padding: '13px 20px',
							width: '100%',
							borderRadius: '7px',
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
								opacity: 1,
								fontFamily: 'Nunito',
								textTransform: 'none',
								color: 'hsl(218, 42.20%, 91.20%)',
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

import { Box, Container, Typography } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export default function Footer() {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<Container
				sx={{
					borderTop: '1px solid #3f3f3f',
					display: 'flex',
					flexDirection: 'row',
					padding: '7lvh 10px 9lvh 10px',
					height: 'min-content',
					maxWidth: 'clamp(300px, 90vw, 900px)',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}
				>
					<Typography
						sx={{
							opacity: 0.75,
							fontFamily: 'Nunito',
							fontWeight: '700',
							fontSize: '27px',
						}}
					>
						Get in touch
					</Typography>
					<Box
						sx={{
							opacity: 0.6,
						}}
					>
						<a
							href={'mailto:contact@tanqiyang.com'}
							style={{
								fontFamily: 'Nunito',
                                fontWeight: '00',
                                fontSize: '17px',
								color: '#000000',
								textDecoration: 'none',

								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'left',
								alignItems: 'center',
								gap: '5px',
							}}
						>
							{' '}
							<MdOutlineEmail size={25} />
							contact@tanqiyang.com
						</a>
					</Box>
				</Box>

				<Box
					sx={{ opacity: 0.7, display: 'flex', flexDirection: 'row-reverse' }}
				>
					<a href='https://github.com/gnayiqnat' target='_blank' style={{ color: '#000000' }}>
						<FaGithub size={35} />
					</a>
				</Box>
			</Container>
		</Box>
	);
}

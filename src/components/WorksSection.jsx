// WorksSection.js
import React, { useRef } from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
function WorksSection() {
    const MotionCard = motion(Card);

    const listofWorks = [
        { url: 'https://digitalascent.space', img: '/digitalascent-peek.png' },
		{ url: 'https://msssa.pages.dev', img: '/msssa-peek.png'}
    ];
    return (
        <section id='sec-2'>
            <Grid
                container
                sx={{
                    margin: 'auto',
                    marginTop: 10,
                    marginBottom: -3,
                    padding: 3,
                    height: '100dvh',
                }}
            >
                {/* 
				<Typography
					variant='h3'
					sx={{ color: '#c60054', fontWeight: 600, marginBottom: '30px' }}
				>
					My Works
				</Typography>
				 */}
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
						gap: '30px',
                        height: '80dvh',
                    }}
                >
                    {listofWorks.map((e, i) => 
                        <Grid item key={i}>
                            <MotionCard
                                whileHover={{
                                    borderColor: '#c60054',
                                    opacity: 1,
                                }}
                                variant='outlined'
                                sx={{
                                    backgroundColor: 'transparent',
                                    borderColor: '#550024',
                                    opacity: 0.6,
                                    padding: 1.5,
                                    borderRadius: 3,
                                    width: '330px',
                                    maxWidth: '80vw',
                                }}
                            >
                                <a
                                    draggable='false'
                                    target='_blank'
                                    href={e.url}
                                    style={{ width: '330px', maxWidth: '80vw' }}
                                >
                                    <img
                                        draggable='false'
                                        style={{
                                            width: '330px',
                                            maxWidth: '80vw',
                                            borderRadius: '7px',
                                        }}
                                        src={e.img}
                                    />
                                </a>
                            </MotionCard>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </section>
    );
}

export default WorksSection;

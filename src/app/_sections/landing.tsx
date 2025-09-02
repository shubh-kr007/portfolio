'use client'

import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import Typography from '@mui/joy/Typography'
import { Parallax } from 'react-parallax'
import { scroller } from 'react-scroll'
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'
import { useTheme } from '@mui/joy'
import Nav from '../_components/nav'
import SideNav from '../_components/sideNav'

const Landing = () => {
    const theme = useTheme();

    return (
        <Parallax
            bgImage='images/landing-bg.jpg'
            bgImageAlt='software developer landing page background'
            strength={-200}
        >
            <div style={{
                minHeight: '100vh',
                minWidth: '100vw',
                // --- CHANGE THIS ---
                backgroundColor: `rgba(20, 20, 20, 0.7)`, // Use a dark overlay for contrast
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Nav />
                <SideNav />

                <svg viewBox="0 0 1320 120">
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Shubh Kumar
                    </text>
                </svg>

                <Divider sx={{
                    width: '30%',
                    // --- CHANGE THIS ---
                    backgroundColor: theme.palette.primary.main, // Use tan for the divider
                    margin: '20px auto',
                    blockSize: '2px !important'
                }} />

                <Typography level='h2' sx={{
                    // --- CHANGE THIS ---
                    color: theme.palette.text.primary, // Use beige for the subtitle
                    animation: 'fadeIn',
                    animationDuration: '4s',
                    animationDelay: '2s',
                    animationFillMode: 'both'
                }}>
                    Full Stack Developer
                </Typography>

                <Button
                    size='lg'
                    variant='outlined'
                    sx={{
                        bottom: 40,
                        position: 'absolute',
                        borderRadius: 20,
                        // --- CHANGE THESE ---
                        color: theme.palette.text.primary,
                        borderColor: theme.palette.neutral.outlinedBorder,
                        '&:hover': {
                            backgroundColor: 'rgba(245, 245, 220, 0.1)', // Faint beige on hover
                            borderColor: theme.palette.text.primary,
                        }
                    }}
                    onClick={() => scroller.scrollTo('about', {
                        duration: 1000,
                        smooth: true,
                    })}
                >
                    <ExpandMoreOutlined />
                </Button>
            </div>
        </Parallax>
    )
}

export default Landing

'use client'

import Typography from "@mui/joy/Typography"
import SectionLayout from "../_components/sectionLayout"
import ScrollAnimation from 'react-animate-on-scroll'
import LocationOn from '@mui/icons-material/LocationOn'
import Link from '@mui/joy/Link'
import { scroller } from 'react-scroll'
import content from '../../content'
import { useTheme } from "@mui/joy"

const About = () => {
    const theme = useTheme();
    const aboutMe = content.homepage.about.description;

    return (
        <SectionLayout name='about'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1'>About me</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <Typography level='body-sm'
                    startDecorator={ <LocationOn fontSize='small' /> }
                    sx={{ ml: -1, mb: 2, color: 'text.secondary' }} // Use secondary color for location
                >
                    Noida, India
                </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                {/* --- THIS IS THE FIX --- */}
                <Typography sx={{ color: 'text.primary' }}>{aboutMe}</Typography>
            </ScrollAnimation>
            <Link
                role="menuitem"
                component="a"
                onClick={() => scroller.scrollTo('skills', {
                    duration: 1000,
                    smooth: true,
                })}
                sx={{ mt: 2 }}
            >
                Check out my Skills...
            </Link>
        </SectionLayout>
    )
}

export default About

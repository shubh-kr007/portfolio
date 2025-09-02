'use client'

import SectionLayout from '../_components/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from '@mui/joy';
import content, { IProjects } from '../../content';
import ExperienceItem from '../_components/experienceItem'

const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const projects: IProjects[] = content.homepage.projects

const Projects = () => {
    const theme = useTheme()
    return (
        <SectionLayout odd fullHeight col name='experience'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
                <Typography level='h1'>Projects</Typography>
            </ScrollAnimation>
            <Stepper orientation="vertical" sx={{
                '--StepIndicator-size': '6rem',
                '--Step-connectorRadius': '1rem',
                '--Step-connectorThickness': '2px',
                '--Step-connectorBg': theme.palette.neutral.outlinedBorder,
                [theme.breakpoints.down(800)]: {
                    '--StepIndicator-size': '4rem',
                },
                [`.${stepIndicatorClasses.root}`]: {
                    [`& img`]: {
                        height: '100%',
                    },
                    overflow: 'hidden',
                    position: 'relative',
                    borderColor: theme.palette.neutral.outlinedBorder,
                }
            }}>
                {projects.map((projects, i) => (
                    <Step key={i} indicator={
                        <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                            <StepIndicator>
                                <img src={'images/' + projects.logo} />
                            </StepIndicator>
                        </ScrollAnimation>
                    }>
                        <ExperienceItem.Head {...projects} />
                        <ExperienceItem.Body {...projects} />
                    </Step>
                ))}
                <Step sx={{ display: 'none !important' }} indicator={
                    <StepIndicator sx={{ display: 'hidden' }}>
                    </StepIndicator>
                }></Step>
            </Stepper>

        </SectionLayout >
    )
}

export default Projects
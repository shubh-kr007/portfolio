'use client'

import React from 'react'
import SectionLayout from '../_components/sectionLayout'
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack'
import ScrollAnimation from 'react-animate-on-scroll';
import { useTheme } from '@mui/joy';
import content from '../../content'

interface IEducation {
    institute: string,
    location: string,
    degree?: string,
    time: {
        start: number
        end: number
    },
}

const educations: IEducation[] = content.homepage.education

const Education = () => {
    const theme = useTheme()
    return (
        <SectionLayout name='education'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                <Typography level='h1'>Education</Typography>
            </ScrollAnimation>

            <Stack sx={{
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',

                [theme.breakpoints.down(600)]: {
                    flexDirection: 'column-reverse',
                },
            }}>
                <Stepper orientation="vertical" sx={{
                    '--StepIndicator-size': '2rem',
                    '--Step-connectorRadius': '1rem',
                    '--Step-connectorThickness': '2px',
                }}>
                    {educations.map(({ institute, location, degree, time: { start, end } }, i: number) =>
                        // @ts-ignore
                        <Step key={i}>
                            <Stack>
                                <ScrollAnimation animateIn='fadeIn' animateOnce>
                                    <Typography level='h3'>{`${institute}, ${location}`}</Typography>
                                </ScrollAnimation>
                            </Stack>
                            <Stack>
                                <ScrollAnimation animateIn='fadeIn' animateOnce>
                                    {degree && <Typography level='title-md'>{degree}</Typography>}
                                    <Typography level='body-sm'>{`${start} - ${end}`}</Typography>
                                </ScrollAnimation>
                            </Stack>
                        </Step>
                    )}
                    <Step sx={{ display: 'none !important' }} indicator={
                        <StepIndicator sx={{ display: 'hidden' }}>
                        </StepIndicator>
                    }></Step>
                </Stepper>

                <ScrollAnimation animateIn='fadeInLeft' animateOnce>
                    <Card component="li" sx={{
                        mr: 2,
                        minHeight: '400px',
                        maxWidth: 400,
                        '& > div:not(:first-of-type)': {
                            opacity: 0,
                            transition: '0.4s ease'
                        },
                        '&:hover > div:not(:first-of-type)': {
                            opacity: 1
                        },
                        [theme.breakpoints.down(700)]: {
                            mb: 4
                        },
                    }}>
                        <CardCover>
                            <img src='images/childhood.jpg' alt='childhood picture' />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography
                                level="body-xs"
                                sx={{ color: 'text.secondary' }}
                            >
                                Mom captured a sweet moment of me and my brother heading to school. Grateful for the little moments :)
                            </Typography>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </Stack>


        </SectionLayout >
    )
}


export default Education

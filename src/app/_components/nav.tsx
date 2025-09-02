'user client'

import React from 'react'
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Stack from '@mui/joy/Stack'
import { scroller } from 'react-scroll';

const Nav = () => {
    return (
        <Stack sx={(theme) => ({
            position: 'absolute',
            top: 0,
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
            overflow: 'hidden',
            zIndex: 50,
            animation: 'fadeInDown',
            animationDuration: '1s',
            animationFillMode: 'both',
            [theme.breakpoints.down(780)]: {
                display: 'none'
            }
        })}>
            <Box
                component="nav"
                sx={{
                    flexGrow: 1,
                    p: 1,
                    // --- CHANGE THIS ---
                    backgroundColor: 'rgba(28, 28, 28, 0.8)', // Use a semi-transparent dark background
                    backdropFilter: 'blur(8px)',
                }}
            >
                <List role="menubar" orientation="horizontal">
                    {['about', 'experience', 'education', 'skills', 'blogs', 'contact'].map((section, i) => (
                        <React.Fragment key={section}>
                            {i !== 0 && <ListDivider sx={{ backgroundColor: '#4a4a4a' }} />}
                            <ListItem role="none">
                                <ListItemButton
                                    role="menuitem"
                                    component="a"
                                    onClick={() => scroller.scrollTo(section, {
                                        duration: 500 * (i + 1),
                                        smooth: true,
                                    })}
                                    sx={(theme) => ({
                                        // --- UPDATE THESE ---
                                        color: theme.palette.text.secondary,
                                        '&:hover': {
                                            color: theme.palette.primary.main, // Tan on hover
                                            backgroundColor: 'transparent',
                                        },
                                        '&:not(.Mui-selected, [aria-selected="true"]):hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            display: 'block',
                                            width: '0%',
                                            height: '2px',
                                            mt: 3,
                                            backgroundColor: theme.palette.primary.main, // Tan underline
                                            transition: '0.4s ease'
                                        },
                                        '&:hover::after': {
                                            width: '80%',
                                        },
                                    })}
                                >
                                    {section.replace(/^./, n => n.toUpperCase())}
                                </ListItemButton>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Stack >
    )
}

export default Nav

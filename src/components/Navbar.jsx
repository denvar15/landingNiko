import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';


// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'center',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("md")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Для кондитеров",
      to: "/#makers" 
    },
    {
      text: "Для потребителей",
      to: "/#consumers"
    },
    {
        text: "О нас",
        to: "/#about"
    },
    {
        text: "Наша миссия",
        to: "/#mission"
    },
    {
        text: "Для связи",
        to: "/#contact"
    }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'transparent',
            height: "50px",
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Typography
                variant="h6"
                component="h2"
                style={{fontFamily: "GirloSP", marginRight: "auto"}}
                >
                    NIKO
                </Typography>
                <Box sx={{display: { xs: 'block', md: 'none' }}}>
                    <DrawerItem />
                </Box>
                <ListMenu style={{marginRight: "auto"}}>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#cd0ad4',
                                    },
                                    whiteSpace: "nowrap"
                                }}
                                >
                                    <ListItemText href={item.to} primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;

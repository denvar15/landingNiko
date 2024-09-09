import React, { useState } from 'react'
import {  
  styled, 
  useTheme,
  Drawer,
  Divider,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
// rotas
import { Link } from 'react-router-dom';
// icons
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CakeIcon from '@mui/icons-material/Cake';
import PeopleIcon from '@mui/icons-material/People';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 5),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

//rotas
const itemList = [
    {
        text: "Для кондитеров",
        icon: <CakeIcon />,
        to: "/#makers"
    },
    {
        text: "Для потребителей",
        icon: <PeopleIcon />,
        to: "/#consumers"
    },
    {
        text: "О нас",
        icon: <InfoIcon />,
        to: "/#about"
    },
    {
        text: "Наша миссия",
        icon: <TipsAndUpdatesIcon />,
        to: "/#mission"
    },
    {
        text: "Для связи",
        icon: <RecentActorsIcon />,
        to: "/#contact"
    }
];


const DrawerItem = () => {

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      onClick={handleDrawerOpen}
      sx={{ ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
      sx={{
          flexGrow: 1,
          flexShrink: 0,
          overflow: "hidden",
          height: "100%",
          '& .MuiDrawer-paper': {
          width: drawerWidth,
          },
      }}
      ModalProps={{ disableScrollLock: true }}
      variant="persistent"
      anchor="right"
      open={open}
      >
        <DrawerHeader style={{backgroundColor: "rgb(233, 199, 196)"}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List style={{backgroundColor: "rgb(233, 199, 196)"}}>
          {itemList.map( ( item ) => {
            const { text } = item;
            return(
              <ListItem 
              key={text} 
              to={item.to}
              sx={{
                color: '#414141',
                "&:hover": {
                  backgroundColor: 'rgb(178 110 194 / 42%)',
                  color: '#1c2859',
                }
              }}
              >
                <ListItemIcon
                sx={{
                  "&:hover":{
                    backgroundColor: 'transparent',
                    color: '#1c2859',
                  }
                }}
                >
                  <a style={{color: "#414141"}} href={item.to}>
                    {item.icon}
                  </a>
                </ListItemIcon>
                <a style={{textDecoration: "none", color: "#414141"}} href={item.to}>
                  <ListItemText href={item.to} primary={text} />
                </a>
              </ListItem>
            )
          })}
        </List>
        <div id="mem" style={{backgroundColor: "rgb(233, 199, 196)", height:"100vh"}}> </div>
      </Drawer>
    </div>
  )
}

export default DrawerItem;
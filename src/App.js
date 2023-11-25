// import './App.css';
import { Box, Toolbar, Link} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sablony from './pages/Sablony';
import EditSablony from './pages/EditSablony';
import Prehled from './pages/Prehled';
import Novy from './pages/Novy';

const drawerWidth = 240;

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <MainPage />,

  // },
  {
    path: "/prehled",
    element: <Prehled />,
  },
  {
    path: "/sablony",
    element: <Sablony />,
  },
  {
    path: "/edit/:id",
    element: <EditSablony/>,
  },
  {
    path: "/novy",
    element: <Novy />,
  },
]);


function App() {
  const [open,setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="App" sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        // position='static'
        anchor="left"
        // open={open}
      >
         <Toolbar>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <ListItem key={'Přehled'} disablePadding>
            <ListItemButton component={Link} to="/prehled">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Přehled'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Nový'} disablePadding>
            <ListItemButton component={Link} to="/novy">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Nový'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Šablony'} disablePadding>
            <ListItemButton component={Link} to="/sablony">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Šablony'} />
            </ListItemButton>
          </ListItem>
          {/* {['Přehled', 'Nový', 'Šablony'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>

      <Box component="main" sx={{  p: 3 }}>
        <RouterProvider router={router} />
      </Box>

      

    </Box>
  );
}

export default App;

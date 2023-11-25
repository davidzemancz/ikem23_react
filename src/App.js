
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
  {
    path: "/",
    element: <Box />,

  },
  {
    path: "/prehled",
    element: <Prehled />,
  },
  {
    path: "/sablony",
    element: <Sablony />,
  },
  {
    path: "/sablony/pridat",
    element: <EditSablony/>,
  },
  {
    path: "/sablony/edit",
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
    <Box className="App" sx={{ display: 'flex', overflow:'hidden', width: '100%' }}>
      <AppBar position="fixed">
        <Toolbar sx={{display:'flex'}}>
        <List sx={{display:'flex'}}>
          <ListItem key={'Přehled'} disablePadding sx={{width:'100px'}}>
            <ListItemButton component={Link} to="/prehled">
              <ListItemText primary={'Přehled'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Statistiky'} disablePadding sx={{width:'100px'}}>
            <ListItemButton component={Link} to="/prehled">
              <ListItemText primary={'Statistiky'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Nový záznam'} disablePadding sx={{width:'140px'}}>
            <ListItemButton component={Link} to="/novy">
              <ListItemText primary={'Nový záznam'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Šablony'} disablePadding sx={{width:'100px'}}>
            <ListItemButton component={Link} to="/sablony">
              <ListItemText primary={'Šablony'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Import'} disablePadding sx={{width:'100px'}}>
            <ListItemButton component={Link} to="/prehled">
              <ListItemText primary={'Import'} />
            </ListItemButton>
          </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      {/* <Drawer
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
              <ListItemText primary={'Přehled'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Nový záznam'} disablePadding>
            <ListItemButton component={Link} to="/novy">
              <ListItemText primary={'Nový záznam'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Šablony'} disablePadding>
            <ListItemButton component={Link} to="/sablony">
              <ListItemText primary={'Šablony'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer> */}

      <Box component="main" sx={{ m:2, width:'96%'}}>
        <RouterProvider router={router} />
      </Box>

      

    </Box>
  );
}

export default App;

import { React, useState } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CallIcon from '@mui/icons-material/Call';
import SportsIcon from '@mui/icons-material/Sports';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PageviewIcon from '@mui/icons-material/Pageview';
import AddIcon from '@mui/icons-material/Add';
import BookIcon from '@mui/icons-material/Book';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import GrassIcon from '@mui/icons-material/Grass';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'; // Updated import statements
// import Register from "./Register"
import Error from "./Error";
import Orders from "./Orders"
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import CreateTurf from './CreateTurf';
import MyTurf from './MyTurf';
import BookTurf from './BookTurf';
// import { Home } from '@mui/icons-material';
import Singleturf from './Singleturf';
import CreateAdmin from './CreateAdmin';
import ViewAdmin from './ViewAdmin';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/UserSlice';
const drawerWidth = 240;



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleClick = () => {
       
      dispatch(login({
        name: null,
        Password: null,
        logged: false,
       
      }))
      navigate('/')


    }


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" >
            <GrassIcon />
            PROJECT-TURF
          </Typography>
          <Typography variant="h12" noWrap component="div">
            welcome sadik
          </Typography>
        </Toolbar>
        
      </AppBar>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => open && handleDrawerOpen()}
      >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}

        <List onClick={handleDrawerOpen}>
          <Link to="/Home" style={{ textDecoration: 'none' }}>
            <ListItem >

              <ListItemButton >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                Home
                <ListItemText />
              </ListItemButton>

            </ListItem>
          </Link>
        </List>
        {/* <Divider />
        <Divider /> */}
        <List onClick={handleDrawerOpen}>
          <Link to="/About" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton >
                <ListItemIcon>
                  <PersonPinIcon />
                </ListItemIcon >
                About
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        {/* <Divider />
        <Divider /> */}
        <List onClick={handleDrawerOpen}>
          <Link to="/BookTurf" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton >
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon >
                BookTurf
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Divider />
        <List onClick={handleDrawerOpen}>
          <Link to="/Contact" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton >
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                Contact
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Divider />
        <List onClick={handleDrawerOpen}>
          <Link to="/Orders" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <AddShoppingCartIcon />
                </ListItemIcon>
                Orders
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />


        <Divider />
        <List>
          <Link to="/CreateAdmin" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton onClick={handleDrawerOpen}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                Create Admin
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Divider />
        <List>
          <Link to="/ViewAdmin" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton onClick={handleDrawerOpen}>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                view Admins
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton onClick={handleDrawerOpen}>
                <ListItemIcon>
                  <PageviewIcon />
                </ListItemIcon>
                view inquires
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Divider />
        <List onClick={handleDrawerOpen}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton onClick={handleDrawerOpen}>
                <ListItemIcon>
                  <SportsIcon />
                </ListItemIcon>
                ground/turfs
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />

        <Divider />
        <List>
          <Link to="/CreateTurf" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton onClick={handleDrawerOpen}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                Create turf
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton onClick={handleDrawerOpen}>
                <ListItemIcon>
                  <EditCalendarIcon />
                </ListItemIcon>
                My Orders
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem >
              <ListItemButton onClick={handleDrawerOpen}>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                Contact
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Button  variant="contained" onClick={handleClick}>logout</Button>
        <Divider />

      </Drawer>
      </ClickAwayListener>
      <Main open={open} >
        <DrawerHeader  />
        <Routes >
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Orders" exact element={<Orders />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/CreateTurf" exact element={<CreateTurf />} />
          <Route path="/MyTurf" exact element={<MyTurf />} />
          <Route path="/seeTurf" exact element={<seeTurf />} />
          <Route path="/BookTurf" element={<BookTurf />} />
          <Route path="*" element={<Error/>} />
          <Route path="/CreateAdmin" element={<CreateAdmin />} />
          <Route path="/ViewAdmin" element={<ViewAdmin />} />
          <Route path="/SingleTurf/:id" element={<Singleturf />} />

        </Routes>
       
      </Main>
      
    </Box>
  );

}

export default Header

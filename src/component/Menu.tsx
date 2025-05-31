import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Ricardosalinas from '../assets/Ricardo salinas.jpg';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Servicio', path: '/servicio' },
  { label: 'Proyecto', path: '/proyecto' },
  { label: 'Contacto', path: '/contacto' },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* Logo en el drawer para móviles */}
      <Box
        component="img"
        src={Ricardosalinas}
        alt="Logo"
        sx={{
          height: 50,
          width: 'auto',
          marginY: 2,
        }}
      />
      <Typography variant="h6" sx={{ my: 0 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item.label} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundImage: `url('https://images.pexels.com/photos/7736101/pexels-photo-7736101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: {
            xs: '#000',
            sm: 'transparent',
          },
          boxShadow: 'none',
          zIndex: 1100,
        }}
      >
        <Toolbar>
          {/* Logo en AppBar: opacidad y blend ajustados según breakpoint */}
          <Box
            component="img"
            src={Ricardosalinas}
            alt="Logo"
            sx={{
              height: { xs: 50, sm: 70, md: 80 },
              width: 'auto',
              marginRight: 2,
              opacity: { xs: 1, sm: 0.9 },
              mixBlendMode: { xs: 'normal', sm: 'multiply' },
            }}
          />
          <Typography variant="h6" sx={{ color: '#1976d2' }} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: '#fff' }}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#000',
              color: '#fff',
              zIndex: 1000,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
        <Toolbar />
        {/* Contenido principal */}
      </Box>
    </Box>
  );
}

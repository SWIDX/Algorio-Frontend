import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Searchbar from './Searchbar.js';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Grid } from "@mui/material";

// const pages = ['Products', 'Pricing', 'Blog'];
//const settings = ['Setting', 'Login'];
const settings = ['Setting'];

const ResponsiveAppBar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = (event) => {
    console.log(event.target.textContent);
    if (event.target.textContent === 'Login') {
      navigate('/login');
    }
    setAnchorElUser(null);
  };
  
  const homeClick = () => {
    navigate('/');
  };

  const onClickWrite = () => {
    navigate('/write');
  };

  const onClickLogin = () => {
    navigate('/login');
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
        {/**
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          */}

          <Typography
            variant="h6"
            noWrap
            component={Link}
            onClick={homeClick}
            sx={{ overflow: 'visible', mr: 2, display: 'flex',  color: '#ffffff', textDecoration: 'none' }}
          >
            Algorio
          </Typography>

          
          
          {/*
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          */}

          <Box sx={{flexGrow: 1 }}>
              <Searchbar />
          </Box>
          <Box justifyContent="right" sx={{flexGrow: 3 }}>
          <Grid sx={{ paddingRight: 3, justifyContent:'right', flexWrap: 'nowrap' }} container spacing={2} >
            <Grid item write sx={{flexShrink: 0 }}>
              <Button variant="contained" onClick={onClickWrite} sx={{textTransform:'none', borderRadius: '0.375rem'}}>Post</Button>
            </Grid>
            <Grid item write sx={{flexShrink: 0 }}>
              <Button variant="outlined" onClick={onClickLogin} sx={{textTransform:'none', color: '#ffffff', borderColor: '#ffffff', borderWidth: '1px', borderRadius: '0.375rem'}}>Sign in</Button>
            </Grid>
            {/*
            <Grid item view sx={{flexShrink: 0 }}>
              <Button variant="contained" onClick={onClickView}>글보기</Button>
            </Grid>
            */}
          </Grid>
          </Box>

          <Box justifyContent="right">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

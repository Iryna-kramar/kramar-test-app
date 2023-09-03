"use client"; 

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Microblogging App
        </Typography>
        <Link href="/general-feed" passHref>
          <Button color="inherit">General Feed</Button>
        </Link>
        <Link href="/register" passHref>
          <Button color="inherit">Register</Button>
        </Link>
        <Typography variant="h6" component="div">
         /
        </Typography>
        <Link href="/login" passHref>
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

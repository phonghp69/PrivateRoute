import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Topbar() {
    return (
    <div>
        <AppBar position="static" color="error">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" >
            Home
          </Typography>
          <Button color="inherit">User Name</Button>
        </Toolbar>
      </AppBar>
    </div>  
    );
}

export default Topbar;
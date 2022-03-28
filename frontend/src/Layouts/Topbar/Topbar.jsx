import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { authAtom } from '../../Services/auth';
import { useUserActions } from '../../Services/user.actions';
import { useRecoilValue } from 'recoil';
function Topbar() {
  const auth = useRecoilValue(authAtom);
  const userActions = useUserActions();

  // only show nav when logged in
  if (!auth) return null;
    return (
    <div>
        <AppBar position="static" color="error">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" >
            Home
          </Typography>
          <Button color="inherit">User Name</Button>
          <a onClick={userActions.logout} className="nav-item nav-link">Logout</a>
        </Toolbar>
      </AppBar>
    </div>  
    );
}

export default Topbar;
import React from 'react';
import Custombtn from '../../Components/Card/CustomBtn'
import logo from '../../logo.svg';
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { Link } from "react-router-dom";
<link href="../../dist/css/bootstrap.min.css" rel="stylesheet"></link>
const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "dark",
       
       
    },
    logo: {
        width: "8%", 
        
    },
    menuItem: {
        fontWeight: "bold",
        cursor: "pointer", 
        flexGrow: 1,
       
    },
    noUnderline:{
        textDecoration: 'none',
        "&:hover": {
            color:  "#4f25c8"
        }
    }
});

const Navbar = () => {
    const classes = styles();
    const handleLogout=()=>{
        localStorage.clear()
       
        window.location.reload()
    }
    
    return (
        <div>
             <Toolbar position="sticky"  color="rgba(0, 0, 0, 0.87)" bg="dark" variant="dark">   
                <img src={logo} className={classes.logo}/> 
                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/" className={classes.noUnderline}>Home</Link>
                </Typography>

                <Typography variant="h6" className={classes.menuItem}>
                    <Link to="/asset" className={classes.noUnderline}>Asset</Link>
                </Typography>

                <Typography variant="h6" className={classes.menuItem}>
                <Link to="/profile" className={classes.noUnderline}>Profile</Link>
                </Typography>

                {localStorage.getItem("token") == null && <Link to="/login" className={classes.noUnderline}><Custombtn content="Login"/></Link>}
                {localStorage.getItem("token") && <Custombtn toggle={handleLogout} content="Logout"/>}
            </Toolbar>
        </div>
    );
}

export default Navbar;

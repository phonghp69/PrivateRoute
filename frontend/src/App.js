import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Layouts/Topbar/Topbar";
import Leftbar from "./Layouts/Leftbar/Leftbar";
import Main from "./Layouts/Main/Main";
import { Grid } from "@mui/material";
import React from 'react';
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Layouts/NavBar/NavBar";
import "./App.css";
import Footer from "./Layouts/Footer/Footer";
import LoginPage from "./Pages/LoginPage/LoginPage";





function App() {
  return (
    <div className="App">
      
      <Topbar />
      <Grid container>
        <Grid item xs={3}>
          <Leftbar />
        </Grid>
        <Grid item xs={9} sx={{
          backgroundColor:"#d3d3d3"
        }}>
          <Main/>
        </Grid>
      </Grid>
        <Routes>
        {/* <Route exact path = "/" element={<HomePage/>} /> */}
        {/* <Route path = "/posts" exact element={<PostsPage/>} />
        <Route path = "/posts/:id" element={<PostDetail/>} />
        <Route path = "/profile" element={<ProfilePage/>}/> */}
        <Route path = "/login" element={<LoginPage/>} />
      </Routes>
        <div >
          <Footer />
        </div>
      
    </div>
  );
}

export default App;

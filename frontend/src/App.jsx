import Topbar from "./Layouts/Topbar/Topbar";
import Leftbar from "./Layouts/Leftbar/Leftbar";
import Main from "./Layouts/Main/Main";
import { Grid } from "@mui/material";
import React from "react";
import { Router, Route, Navigate, Routes} from "react-router-dom";
import "./App.css";
import Login from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/HomePage/Home";
import { PrivateRoute } from './Routes/PrivateRoute';
import { history } from './_helpers/history';
function App() {
  return (
  
    <div className="App">
      <Topbar />

      <Grid container>
        <Grid item xs={3}>
          <Leftbar />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            backgroundColor: "#d3d3d3",
          }}
        >
          <Main />
          <Router history={history} >
                   <Routes>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Navigate from="*" to="/" />
                   
                </Routes>
            </Router>
        </Grid>
      </Grid>

    </div>
   
  );
}

export default App;

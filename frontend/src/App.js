import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Layouts/Topbar/Topbar";
import Leftbar from "./Layouts/Leftbar/Leftbar";
import Main from "./Layouts/Main/Main";
import { Grid } from "@mui/material";
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
    </div>
  );
}

export default App;

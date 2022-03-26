import { makeStyles } from "@mui/styles";
import { Container, Typography, CardMedia } from "@mui/material/";
import { Box } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  container: {
    // height: "100vh",
    paddingTop: 10,
    // backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    // marginBottom: theme.spacing(4),
    padding: 10,
    backgroundColor: "#d3d3d3",
    margin: 3,
    '&:hover': {
        color: "white",
        background: "#f44336",
      },
    cursor: "pointer"
  },
  text: {
    fontWeight: 500,
  },
  intro: {
    fontWeight: 500,
    display: "flex",
    padding: 10,
    color: "red"
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box
        sx={{
          width: 200,
          height: 200,
        }}
      >
        <CardMedia
          component="img"
          image={require("../../Assets/Images/nashtech-logo.jpg")}
          alt="logo"
        />
      </Box>
      <div>
        <Typography className={classes.intro}>Online Asset Management</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Manage User</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Manage Asset</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Manage Assignment</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Request for Returning</Typography>
      </div>
      <div className={classes.item}>
        <Typography className={classes.text}>Report</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;

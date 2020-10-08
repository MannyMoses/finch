import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, Container, Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {}, // a style rule
  label: {}, // a nested style rule
});
export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          display="block"
          width={750}
          height={500}
          bgcolor="#f44336"
          justifyContent="center"
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            style={{ backgroundColor: "none", height: "10vh" }}
          >
            Finch
          </Typography>
          <Button size="large" variant="outlined" color="darkgray" mb="1">
            Register
          </Button>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </form>
          <Button size="large" variant="outlined" color="darkgray">
            Login
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

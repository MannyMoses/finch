import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, Container, Box } from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box component="span" m={5}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            Finch
          </Typography>
          <Button size="large" variant="outlined" color="darkgray">
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

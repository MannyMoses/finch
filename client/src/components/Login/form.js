import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

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
          <Button variant="outlined" color="darkgray">
            Login
          </Button>
          <Button variant="outlined" color="darkgray">
            Register
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

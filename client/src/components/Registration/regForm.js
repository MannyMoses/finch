import React, {Component} from "react";

import React from "react";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons"


//basecode for registration from
const App: React.FC = () => {
    return (
        <div>
            <Grid container style={{ minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img
                        src="Login\Finch.png"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        alt="brand"
                    /> 
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    style={{ padding: 10 }}
                >
                 <div />
                <div
                    style={{
                    display: 'flex',
                    flexDirection: "column",
                    maxWidth: 400,
                    minWidth: 300
                        }}
                    >
                     <Grid container justify="center">
                        <img
                            src=""
                            width={200}
                            alt="logo"
                        />
                    </Grid>
                    <TextField
                        label="Username"
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <LockRounded />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div style={{ height: 20 }} />
                    <Button color="primary" variant="contained">
                        Log In
                    </Button>
                    <div style={{ height: 20 }} />
                    <Button>Interested in joining?</Button>
                </div>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <Button color="primary">Go To Community Page</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined">Forgot Password?</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
    );
};

export default App;

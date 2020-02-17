import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Card, CardContent } from "@material-ui/core";
import Copyright from "./widgets/Copyright";
import Logo from "./widgets/Logo";
import LoginForm from "./widgets/LoginForm";
import { makeStyles } from "@material-ui/core/styles";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card raised>
        <CardContent>
          <div className={classes.paper}>
            <Logo />
            <Grid container>
              <Grid item xs>
                <LoginForm />
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default LoginPage;

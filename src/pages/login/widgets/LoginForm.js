import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { login } from "../../../services/authService";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: "",
        password: ""
      },
      errors: {}
    };
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const { name, value } = input;
    account[name] = value;
    this.setState({ account });
  };

  doSubmit = async () => {
    try {
      const { email, password } = this.state.account;
      await login(email, password);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.loginError = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // Call the backend server get a token if not return errors
    this.doSubmit();
    // route to the welcome page of the app
  };

  render() {
    const classes = useStyles;
    const { loginError } = this.state.errors;
    return (
      <div>
        {loginError && (
          <div className="alert alert-danger" role="alert">
            Invalid Credentials
          </div>
        )}
        <form method="POST" action="#" onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            LOGIN
          </Button>
        </form>
      </div>
    );
  }
}

const useStyles = {
  paper: {
    marginTop: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "20"
  },
  submit: {
    margin: "20px 0 20px 0"
  }
};

export default LoginForm;

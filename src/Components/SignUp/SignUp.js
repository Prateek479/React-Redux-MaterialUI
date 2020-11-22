import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import styles from "./SignUp.style";
import PasswordInput from "../Inputs/PasswordInput";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRePasswordChange = this.handleRePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleChange = function (value, fieldName) {
    let updatedState = this.state;
    updatedState[fieldName] = value;
    this.setState(updatedState);
  };
  handlePasswordChange = ({ target: { value } }) => {
    this.handleChange(value, "password");
  };
  handleRePasswordChange = ({ target: { value } }) => {
    this.handleChange(value, "repeatPassword");
  };
  handleUserNameChange = ({ target: { value } }) => {
    this.handleChange(value, "username");
  };
  handleEmailChange = ({ target: { value } }) => {
    this.handleChange(value, "email");
  };

  handleNameChange = ({ target: { value } }) => {
    this.handleChange(value, "name");
  };

  signup = () => {
    this.props.signupUser(this.state);
  };

  handleClickShowPassword = () => {
    this.setState((state) => ({
      showPassword: !state.showPassword,
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.signups}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className={classes.alignCenter}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Signup
              </Typography>
            </div>
            <div className={classes.column}>
              <div className={classes.m__b__15}>
                <TextField
                  className={classes.root_12}
                  id="name-input"
                  label="Name"
                  onChange={this.handleNameChange}
                />
              </div>
              <div className={classes.m__b__15}>
                <TextField
                  className={classes.root_12}
                  id="name-input"
                  label="Username"
                  onChange={this.handleUserNameChange}
                />
              </div>
              <div className={classes.m__b__15}>
                <TextField
                  className={classes.root_12}
                  id="email-input"
                  label="Email"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className={classes.m__b__15}>
                <PasswordInput
                  password={this.state.password}
                  label={"Password"}
                  handleChange={this.handlePasswordChange}
                />
              </div>
              <div className={classes.m__b__15}>
                <PasswordInput
                  password={this.state.repeatPassword}
                  label={"Repeat Password"}
                  handleChange={this.handleRePasswordChange}
                />
              </div>
              <CardActions className={classes.alignCenter}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.signup}
                >
                  Sign up
                </Button>
                <Button variant="contained">
                  <Link className={classes.decoration_none} to="login">
                    Log In
                  </Link>
                </Button>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);

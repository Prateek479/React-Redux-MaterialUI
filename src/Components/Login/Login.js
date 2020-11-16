import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import styles from "./Login.style";
import PasswordInput from "../Inputs/PasswordInput";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange = function (value, fieldName) {
    let updatedState = this.state;
    updatedState[fieldName] = value;
    this.setState(updatedState);
  };

  handlePasswordChange = (event) => {
    this.handleChange(event.target.value, "password");
  };
  handleEmailChange = (event) => {
    this.handleChange(event.target.value, "email");
  };

  login = () => {
    this.props.loginUser(this.state);
  };

  render() {
    console.log("propr", this.props);
    const { classes } = this.props;
    return (
      <div className={classes.login}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Login
              </Typography>
            </div>
            <div className={classes.m__b__15}>
              <TextField
                className={classes.root_12}
                id="standard-basic"
                value={this.state.email}
                onChange={this.handleEmailChange}
                label="email"
              />
            </div>
            <div className={classes.m__b__15}>
              <PasswordInput
                password={this.state.password}
                handleChange={this.handlePasswordChange}
              />
            </div>
          </CardContent>
          <CardActions className={classes.alignCenter}>
            <Button variant="contained" onClick={this.login} color="primary">
              Login
            </Button>
            <Button variant="contained">
              <Link className={classes.decoration_none} to="signup">
                Sign up
              </Link>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Login);

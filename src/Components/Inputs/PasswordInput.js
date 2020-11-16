import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import styles from "./PasswordInput.style";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState((state) => ({
      showPassword: !state.showPassword,
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.root_12}>
          <InputLabel htmlFor="standard-adornment-password">
            {this.props.label}
          </InputLabel>
          <Input
            type={this.state.showPassword ? "text" : "password"}
            value={this.props.password}
            onChange={this.props.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(PasswordInput);

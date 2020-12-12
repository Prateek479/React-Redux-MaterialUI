import * as userActions from "../Constants/user_actions";
//User Login
export function userLoginAction(data) {
  return {
    type: userActions.LOGIN_USER_REQUESTED,
    data,
  };
}

export function userLoginSucceededAction(data) {
  return {
    type: userActions.LOGIN_USER_SUCCESS,
    data,
  };
}

export function userLoginFailedAction(error) {
  return {
    type: userActions.LOGIN_USER_FAILED,
    error,
  };
}

//User Sign up
export function userSignUpAction(data) {
  return {
    type: userActions.SIGN_UP_USER_REQUESTED,
    data,
  };
}

export function userSignUpSucceededAction(data) {
  return {
    type: userActions.LOGIN_USER_SUCCESS,
    data,
  };
}

export function userSignUpFailedAction(error) {
  return {
    type: userActions.LOGIN_USER_FAILED,
    error,
  };
}

// User Redirect

export function redirectUser(path) {
  return {
    type: userActions.REDIRECT_USER,
    path,
  };
}

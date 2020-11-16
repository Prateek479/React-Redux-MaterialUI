import * as userActions from "../Constants/user_actions";
//User Login
export function userLoginAction(data) {
  console.log("i hit in action", data);
  return {
    type: userActions.LOGIN_USER_REQUESTED,
    data,
  };
}

export function userLoginSucceededAction(data) {
  console.log("i hit in action", data);
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

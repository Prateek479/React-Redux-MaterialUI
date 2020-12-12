import { call, all, put, takeLatest } from "redux-saga/effects";
import { loginUsers, signUpUsers } from "../Utils/apis";
import {
  userLoginSucceededAction,
  userLoginFailedAction,
  userSignUpSucceededAction,
  userSignUpFailedAction,
  redirectUser,
} from "../Actions/userActions";
import * as USER_ACTIONS from "../Constants/user_actions";

export function* loginUsersSaga({ data }) {
  const responseData = yield call(loginUsers, data);
  const { data: user } = responseData.data;
  const { headers } = responseData;
  console.log("user", user);
  console.log("headers", headers);
  if (users && headers) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(headers));
    yield put(
      userLoginSucceededAction({
        user: user,
        token: headers,
      })
    );
    yield put(
      redirectUser({
        redirectTo: "/",
      })
    );
  } else {
    yield put(
      userLoginFailedAction({
        error: "Internal Server Error",
      })
    );
  }
}

export function* signupUsersSagas({ data }) {
  const responseData = yield call(signUpUsers, data);
  console.log("responseData", responseData);
  if (responseData) {
    yield put(
      userSignUpSucceededAction({
        responseData: responseData.user,
      })
    );
  } else {
    yield put(
      userSignUpFailedAction({
        error: "Internal Server Error",
      })
    );
  }
}

export function* users() {
  yield all([
    takeLatest(USER_ACTIONS.LOGIN_USER_REQUESTED, loginUsersSaga),
    takeLatest(USER_ACTIONS.SIGN_UP_USER_REQUESTED, signupUsersSagas),
  ]);
}

export default [users];

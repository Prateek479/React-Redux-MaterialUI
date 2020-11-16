import { call, all, put, takeLatest } from "redux-saga/effects";
import { loginUsers, signUpUsers } from "../Utils/apis";
import {
  userLoginSucceededAction,
  userLoginFailedAction,
  userSignUpSucceededAction,
  userSignUpFailedAction,
} from "../Actions/userActions";
import * as USER_ACTIONS from "../Constants/user_actions";
import { Update } from "@material-ui/icons";

export function* loginUsersSaga({ data }) {
  const responseData = yield call(loginUsers, data);
  if (responseData.data.data) {
    yield put(
      userLoginSucceededAction({
        responseData: responseData.data.data,
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
  if (responseData.user) {
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

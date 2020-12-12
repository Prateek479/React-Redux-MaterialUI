import * as USER_ACTIONS from "../Constants/user_actions";

let initialState = {
  user: {},
  access_token: "",
  isLoading: false,
  error: null,
  redirectTo: null,
};

export default function (state = initialState, action = {}) {
  console.log("action", action);
  switch (action.type) {
    case USER_ACTIONS.LOGIN_USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTIONS.LOGIN_USER_SUCCESS:
      return {};
    case USER_ACTIONS.LOGIN_USER_FAILED:
      return {};
    case USER_ACTIONS.SIGN_UP_USER_REQUESTED:
      return {};
    case USER_ACTIONS.SIGN_UP_USER_SUCCESS:
      return {};
    case USER_ACTIONS.SIGN_UP_USER_FAILED:
      return {};
    case USER_ACTIONS.REDIRECT_USER:
      return {
        ...state,
        redirectTo: action.path.redirectTo,
      };

    default:
      return state;
  }
}

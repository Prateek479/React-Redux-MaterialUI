import * as USER_ACTIONS from "../Constants/user_actions";

let initialState = {
  user: {},
  access_token: "",
  isLoading: false,
  error: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case USER_ACTIONS.LOGIN_USER_REQUESTED:
      console.log("I hit i reducer", action);
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

    default:
      return state;
  }
}

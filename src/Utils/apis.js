import config from "../Config";
import { makeSaveCall } from "./request";

const urls = {
  login: "/api/v1/auth/sign_in",
  signup: "/users/signup",
};

function getEndpoint(endpoint) {
  if (urls[endpoint]) {
    return config.api.host + urls[endpoint];
  }
  return null;
}

function generateDefaultGetHeaders() {
  return {
    "Content-Type": "application/json;",
  };
}
const defaultHeader = generateDefaultGetHeaders();

function loginUsers(data, params = "") {
  return makeSaveCall(getEndpoint("login"), data, params, defaultHeader);
}

function signUpUsers(data, params = "") {
  makeSaveCall(getEndpoint("signup"), data, params, defaultHeader);
}

export { loginUsers, signUpUsers };

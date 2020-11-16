import axios from "axios";

export function makeFetchCall(url, params, headers) {
  return makeAPICall({
    url,
    method: "GET",
    headers: headers,
    params: params,
  });
}

export function makeSaveCall(url, data, params, headers) {
  return makeAPICall({
    url: url,
    method: "POST",
    headers: headers,
    params: params,
    data,
  });
}

export function makeUpdateCall(url, data, params, headers) {
  return makeAPICall({
    url: url,
    method: "PUT",
    headers: headers,
    params: params,
    data: data,
  });
}

export function makeDeleteCall(url, params, headers) {
  return makeAPICall({
    url: url,
    method: "DELETE",
    headers: headers,
    params: params,
  });
}

function handleError(error) {
  const errorObj = new Error(error);
  throw errorObj;
}
/**
 * make an http call using axios module with original headers
 * otherConfig used to pass configs like errorHandling etc
 */
function makeAPICall(config) {
  return axios(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return handleError(error);
    });
}

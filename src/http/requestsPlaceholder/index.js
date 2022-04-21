import axios from "axios";

export const apiGet = axios.create({baseURL: "https://enigmatic-spire-58695.herokuapp.com"})
export const apiPost = axios.create({baseURL: "https://enigmatic-spire-58695.herokuapp.com"})
export const apiPut = axios.create({baseURL: "https://enigmatic-spire-58695.herokuapp.com"})
export const apiDelete = axios.create({baseURL: "https://enigmatic-spire-58695.herokuapp.com"})

apiGet.interceptors.request.use((config) => {
  config.method = "get";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiPost.interceptors.request.use((config) => {
  config.method = "post";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiPut.interceptors.request.use((config) => {
  config.method = "put";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

apiDelete.interceptors.request.use((config) => {
  config.method = "delete";
  const token = localStorage.getItem("token");
  if (token)
    config.headers = {
      Authorization: "Bearer " + token,
    };
  return config;
});

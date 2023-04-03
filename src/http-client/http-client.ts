import axios, { AxiosError, AxiosInstance } from "axios";
import { BASE_URL_BFF, BASE_URL_KEYCLOAK } from "../constants/constants";

export const keycloakClient: AxiosInstance = axios.create(
  {
    baseURL: BASE_URL_KEYCLOAK,
    timeout: 1000,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }
);

keycloakClient.interceptors.request.use(request => {
  console.log("API Request", request.method, request.url);
  return request;
});

keycloakClient.interceptors.response.use(response => {
  const request = response.request;
  console.log("API Response", request.method, request.path, `Status: ${response.status}`);
  return response;
}, error => {
  console.log("API Error", error.request.method, error.request.path, `Status: ${error.response.status} ${error.response.statusText}`);
  return Promise.reject(error);
});

export const apiClient: AxiosInstance = axios.create(
  {
    baseURL: BASE_URL_BFF,
    timeout: 5000,
  }
);

apiClient.interceptors.request.use(request => {
  console.log("API Request", request.method, request.url);
  return request;
});

apiClient.interceptors.response.use(response => {
  const request = response.request;
  console.log("API Response", request.method, request.path, `Status: ${response.status}`);
  return response;
}, error => {
  console.log("API Error", error);
  return Promise.reject(error);
});

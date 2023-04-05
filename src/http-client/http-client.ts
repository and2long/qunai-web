import axios, { AxiosInstance } from "axios";
import { BASE_URL_BFF, BASE_URL_KEYCLOAK } from "../constants/constants";

export const keycloakClient: AxiosInstance = axios.create(
  {
    baseURL: BASE_URL_KEYCLOAK,
    timeout: 5000,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }
);

export const apiClient: AxiosInstance = axios.create(
  {
    baseURL: BASE_URL_BFF,
    timeout: 5000,
  }
);

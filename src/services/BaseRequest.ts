import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiUrl: string = import.meta.env.VITE_BASE_URL || "";

axios.defaults.baseURL = `${apiUrl}/api`;

export const DEFAULT_HEADERS: Record<string, string> = {
  Accept: "application/json",
};

class BaseRequest {
  static headers(): AxiosRequestConfig {
    return { headers: DEFAULT_HEADERS };
  }

  static get(url: string): Promise<AxiosResponse> {
    return axios.get(url, this.headers());
  }
}

export default BaseRequest;

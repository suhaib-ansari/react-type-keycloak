import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import UserService from "./UserService";

const _axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

  _axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      console.log("config-------------->", config);
        if (config && config.headers) {
          config.headers.Authorization = `Bearer ${UserService.getToken()}`;
        }
        return Promise.resolve(config);
    },
    (error: any) => {
      console.log("INITIALIZATION FAILD -----------");
      return Promise.reject(error);
    }
  );
  
// };

const getAxiosClient = () => _axios;

const HttpService = {
  getAxiosClient,
};

export default HttpService;

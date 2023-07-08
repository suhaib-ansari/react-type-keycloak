import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import UserService from "./UserService";

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};

const _axios: AxiosInstance = axios.create({
  baseURL: "http://localhost:9035",
});

// const configure = () => {
  _axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      console.log("config-------------->", config);
      // const cb = () => {
        if (config && config.headers) {
          config.headers.Authorization = `Bearer ${UserService.getToken()}`;
        }
        // console.log(`Bearer ${UserService.getToken()}`)
        // console.log(Promise.resolve(config));
        return Promise.resolve(config);
      // };
      // return UserService.updateToken(cb);
      // return config;
    },
    (error: any) => {
      console.log("Initialixationn -----------");
      return Promise.reject(error);
    }
  );
  
// };

const getAxiosClient = () => _axios;

const HttpService = {
  HttpMethods,
  // configure,
  getAxiosClient,
};

export default HttpService;

import HttpService from "./HttpService";

const api = HttpService.getAxiosClient();


const getAllUser = () => {
  return api.get("/rest/getAllUser");
};

const UserApi = {
  getAllUser,
};

export default UserApi;

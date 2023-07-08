import { UserData } from "../@types/UserType";
import HttpService from "./HttpService";

const api = HttpService.getAxiosClient();


const getAllUser = () => {
  return api.get("/rest/getAllUser");
};

const addUser = (data: UserData) => {
  return api.post("/rest/create/user", data );
};

const UserApi = {
  getAllUser,
  addUser
};

export default UserApi;

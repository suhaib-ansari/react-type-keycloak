import { UserData } from "../@types/UserType";
import HttpService from "./HttpService";

const api = HttpService.getAxiosClient();


const getAllUser = () => {
  return api.get("/rest/getAllUser");
};

const addUser = (data: UserData) => {
  return api.post("/rest/create/user", data );
};

const deleteUser = (id : number) =>{
  return api.delete(`/rest/delete/user/${id}`);
}

const UserApi = {
  getAllUser,
  addUser,
  deleteUser
};

export default UserApi;

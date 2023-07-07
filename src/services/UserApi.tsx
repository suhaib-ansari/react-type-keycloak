import HttpService from "./HttpService";

const api = HttpService.getAxiosClient();

function getAllUser() {
  HttpService.configure();
  api
    .get("/rest/getAllUser")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
}

const UserApi = {
  getAllUser,
};

export default UserApi;

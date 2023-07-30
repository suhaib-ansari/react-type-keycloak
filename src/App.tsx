import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import RenderOnAuthenticated from "./components/RendorOnAuthenticated";
import Welcome from "./components/Welcome";
import RendorOnRole from "./components/RendorOnRole";
import UserList from "./components/UserList";
import UserApi from "./services/UserApi";
import MyContext from "./services/Context";
import { UserData, User } from "./@types/UserType";
import CustomContext from "./services/Context";

const App = () => {

  const submitrole: string = import.meta.env.VITE_ROLES_OF_SUBMIT;
  const viewrole: string = import.meta.env.VITE_ROLES_OF_VIEW;

  const submitRoles: string[] = submitrole ? JSON.parse(submitrole) : [];

  const viewRoles: string[] = viewrole ? JSON.parse(viewrole) : [];

  console.log("submit role-->", JSON.stringify(submitRoles))
  console.log("view role-->", JSON.stringify(viewRoles))

  const [userdata, setUserdata] = useState<User[] | null>(null);
  const [roles, setRoles] = useState<string[] | null>(null);

  // submit the user data 
  const submitUser = (data: UserData) => {
    console.log("form data ----> ", data);
    UserApi.addUser(data).then((res) => {
      if (res.status === 200) {
        console.log("post response ---> ", res);
        window.location.reload();
      }
    });
  };

  //fetching all the user 
  const fetchUsers = () => {
    UserApi.getAllUser().then((red) => {
      console.log("red data --> ", red.data);
      const resp: User[] = red.data;
      setUserdata(resp);
    });
  };

  //delete the user 
  const deleteUser = (id: number) => {
    UserApi.deleteUser(id).then((res) => {
      if (res) {
        console.log("User Deleted succesfully!");
        window.location.reload();
      }
    }).catch((err) => console.log(err))
  }

  //get the current user role
  const getUserRole = () => {
    UserApi.getRoles().then((res) => {
      if (res.status === 200) {
        const re: string[] = res.data;
        setRoles(re);
      }
    }).catch(err => setRoles(null))
  }

  useEffect(() => {
    fetchUsers();
    getUserRole();
  }, []);


  return (
    <>
      <Welcome />
      <CustomContext.MyRoleContext.Provider value={roles}>
        <RendorOnRole roles={submitRoles} >
          <Dashboard onSubmit={submitUser} />
        </RendorOnRole>
        <RendorOnRole roles={viewRoles}>
          <CustomContext.MyContext.Provider value={userdata}>
            <UserList onDelete={deleteUser} />
          </CustomContext.MyContext.Provider>
        </RendorOnRole>
      </CustomContext.MyRoleContext.Provider>

    </>
  );
};

export default App;

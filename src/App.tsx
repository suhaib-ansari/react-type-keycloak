import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import RenderOnAuthenticated from "./components/RendorOnAuthenticated";
import Welcome from "./components/Welcome";
import RendorOnRole from "./components/RendorOnRole";
import UserList from "./components/UserList";
import UserApi from "./services/UserApi";
import MyContext from "./services/Context";
import { UserData, User } from "./@types/UserType";

const App = () => {

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
  const [userdata, setUserdata] = useState<User[] | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <>
      <Welcome />
      <RenderOnAuthenticated>
        <RendorOnRole roles={["ADMIN"]}>
          <Dashboard onSubmit={submitUser} />
        </RendorOnRole>
      </RenderOnAuthenticated>
      <RendorOnRole roles={["USER", "ADMIN"]}>
        <MyContext.Provider value={userdata}>
          <UserList />
        </MyContext.Provider>
      </RendorOnRole>
    </>
  );
};

export default App;

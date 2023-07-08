import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import RenderOnAuthenticated from "./components/RendorOnAuthenticated";
import Welcome from "./components/Welcome";
import RendorOnRole from "./components/RendorOnRole";
import UserList from "./components/UserList";
import UserApi from "./services/UserApi";
import MyContext from "./services/Context";
import { FormData, User } from "./@types/UserType";


const App = () => {
  const submit = (formData: FormData) => {
    console.log("form data to be submitting------>", formData);
  };

  const [userdata, setUserdata] = useState<User[] | null>(null);
  
  useEffect(() => {
    const fetchUsers = () => {
      UserApi.getAllUser().then((red) => {
        console.log("red data --> ", red.data);
        const resp: User[] = red.data;
        setUserdata(resp);
      });
    };
    fetchUsers();
  }, []);

  console.log("data -----> ", userdata);

  return (
    <>
      <Welcome />
      <RenderOnAuthenticated>
        <Dashboard onSubmit={submit} />
      </RenderOnAuthenticated>
      <RendorOnRole roles={["ADMIN"]}>
        <MyContext.Provider value={userdata}>
          <UserList />
        </MyContext.Provider>
      </RendorOnRole>
    </>
  );
};

export default App;

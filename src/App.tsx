import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import RenderOnAuthenticated from "./components/RendorOnAuthenticated";
import Welcome from "./components/Welcome";
import RendorOnRole from "./components/RendorOnRole";
import UserList from "./components/UserList";
import UserApi from "./services/UserApi";

interface FormData {
  username: string;
  userid: string;
}
interface FormDataTable {
  users: FormData[];
}

const App = () => {
  const submit = (formData: FormData) => {
    console.log("form data to be submitting------>", formData);
  };

  const [user, setUser] = useState<FormData[]>();
  useEffect(() => {
    const fetchUsers =  () => {
    const data = UserApi.getAllUser();
      console.log("data -----> ", data);
      // setUser(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Welcome />
      <RenderOnAuthenticated>
        <Dashboard onSubmit={submit} />
      </RenderOnAuthenticated>
      <RendorOnRole roles={["ADMIN"]}>
        <UserList users={[]} />
      </RendorOnRole>
    </>
  );
};

export default App;

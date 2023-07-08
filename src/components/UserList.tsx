import React, { useContext } from "react";
import MyContext from "../services/Context";
import { User, UserApiResponse } from "../services/Types";
import RendorOnRole from "./RendorOnRole";

const UserList = () => {
  const data = useContext(MyContext);

  console.log("userlist data --->", data);

  return (
    <>
      <div className="container mt-3 justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">UserId</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((u: User) => {
              return (
                <>
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.user_name}</td>
                    <td>{u.user_id}</td>
                    <td>
                      <RendorOnRole roles={["ADMIN"]}>
                        <button className="btn btn-sm btn-outline-danger">
                          x
                        </button>
                      </RendorOnRole>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;

import React, { useContext } from "react";
import MyContext from "../services/Context";

import RendorOnRole from "./RendorOnRole";
import { User } from "../@types/UserType";

const UserList = () => {
  const data = useContext(MyContext);

  console.log("userlist data --->", data);

  return (
    <>
      <div className="container mt-3 justify-content-center">
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center" scope="col">UserName</th>
              <th className="text-center" scope="col">UserId</th>
              <RendorOnRole roles={["ADMIN"]}>
              <th className="text-center" scope="col">Action</th>
              </RendorOnRole>
              
            </tr>
          </thead>
          <tbody>
            {data?.map((u: User) => {
              return (
                <>
                  <tr key={u.id}>
                    <td className="text-center">{u.id}</td>
                    <td className="text-center">{u.user_name}</td>
                    <td className="text-center">{u.user_id}</td>
                    <td>
                      <RendorOnRole roles={["ADMIN"]}>
                        <button className="btn btn-sm btn-outline-danger text-center">
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

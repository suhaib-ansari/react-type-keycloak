import React, { useContext } from "react";
import MyContext from "../services/Context";

import RendorOnRole from "./RendorOnRole";
import { DeleteProps, User } from "../@types/UserType";

const UserList = ({ onDelete }: DeleteProps) => {
  const data = useContext(MyContext);

  console.log("userlist data --->", data);

  const handleDelete = (id: number) => {
    onDelete(id);
  }

  return (
    <>
      <div className="container mt-3 w-75 table-responsive">
        {/* <div className="constainer text-center mb-4 mt-5 ">
          <h3>User Lists</h3>
        </div> */}
        <table className="table table-bordered table-hover table-sm h-25 caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center" scope="col">USERNAME</th>
              <th className="text-center" scope="col">USERID</th>
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
                        <div className="text-center">
                          <button className="btn btn-sm btn-outline-danger" onClick={(e) => handleDelete(parseInt(`${u.id}`))}>
                            Delete
                          </button>
                        </div>
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

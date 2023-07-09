import React, { useContext } from "react";
import MyContext from "../services/Context";

import RendorOnRole from "./RendorOnRole";
import { DeleteProps, User } from "../@types/UserType";

const UserList = ({ onDelete }: DeleteProps) => {

  //DELETE ROLES
  const deleterole: string = import.meta.env.VITE_ROLES_OF_DELETE
  const deleteRoles: string[] = deleterole ? JSON.parse(deleterole) : [];

  //CONTEXT
  const data = useContext(MyContext);

  console.log("userlist data --->", data);

  //HANDLE DELETE
  const handleDelete = (id: number) => {
    onDelete(id);
  }

  return (
    <>
      <div className="container mt-3 w-75 table-responsive">
        <table className="table table-bordered table-hover table-sm h-25 caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center" scope="col">USERNAME</th>
              <th className="text-center" scope="col">USERID</th>
              <RendorOnRole roles={deleteRoles}>
                <th className="text-center" scope="col">Action</th>
              </RendorOnRole>

            </tr>
          </thead>
          <tbody style={{ maxHeight: '200px' }}>
            {data?.map((u: User, index: number) => {
              return (
                <>
                  <tr key={index}>
                    <td className="text-center">{u.id}</td>
                    <td className="text-center">{u.user_name}</td>
                    <td className="text-center">{u.user_id}</td>
                    <td>
                      <RendorOnRole roles={deleteRoles}>
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

import React from "react";

interface FormData {
  username: string;
  userid: string;
}

interface FormDataTable {
  users: FormData[];
}

const UserList = ({ users }: FormDataTable) => {
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
            {users.map((u: FormData, index: number) => {
              return (
                <>
                  <tr key={index}>
                    <td>{u.username}</td>
                    <td>{u.userid}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-danger">
                        x
                      </button>
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

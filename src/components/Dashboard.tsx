import { ChangeEvent, FormEvent, useState } from "react";
import { FormProps } from "../@types/UserType";

const Dashboard = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState({ user_name: "", user_id: "" });

  const handleInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log("name :", name, "value ", value);
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit --> ", formData);
    onSubmit(formData);
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              UserName :
            </label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={handleInputs}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              UserID :
            </label>
            <input
              className="form-control"
              name="user_id"
              id="exampleFormControlTextarea1"
              onChange={handleInputs}
            />

            <button className="btn btn-primary mt-3 " type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;

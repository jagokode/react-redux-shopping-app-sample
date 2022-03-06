import "./Auth.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../features/authSlice";

function Auth() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const { id, password } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    // dispatch action
    dispatch(authActions.login());
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" id="id" name="id" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Auth;

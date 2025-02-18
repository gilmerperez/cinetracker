import { useState, FormEvent, ChangeEvent } from "react";
import Auth from "../utils/auth";
import { login } from "../api/authAPI";
import { UserLogin } from "../interfaces/UserLogin";
import LightThemeLogo from "../assets/LightThemeLogo.png";
import "../styles/Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./SignUp";

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  return (
    <div className="login-container">
      <img
        className="mb-4"
        src={LightThemeLogo}
        alt="Light theme logo"
        width="172"
        height="172"
      />

      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            name="username"
            className="form-control"
            id="floatingInput"
            placeholder="username"
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
      <p className="mt-5 mb-3 text-body-secondary">© 2025 CineTracker, Inc</p>
      <hr />
      <h3 className="container text-center mt-5">Don't have an account?</h3>
      <SignUp />
    </div>
  );
};

export default Login;

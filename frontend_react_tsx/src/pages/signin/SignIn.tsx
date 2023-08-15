/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useRef, useState } from "react";
import "./signin.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const customAxios = axios.create({
  baseURL: "http://localhost:5001",
});
const LOGIN_URL = "/api/v1.0.0/auth/login";

const SignIn = () => {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  // Setting focus
  useEffect(() => {
    if (userRef.current) userRef.current.focus();
  }, []); //dependency array is empty so it will only happen when the component loads
  //focus is on the input that we will reference with the userRef

  //Clearing error message when username/password is edited
  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await customAxios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const token = response?.data?.data?.accessToken;
      localStorage.setItem("jwtToken", token);

      setUsername("");
      setPassword(""); //empties the username and password when submitted

      navigate("/dashboard", { state: { jwtToken: token } });
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response"); //where there's no error response data
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorised");
      } else {
        setErrMsg("Login Failed");
      }
      if (errRef.current) errRef.current.focus();
    }
  };

  return (
    <>
      <section className="signinpage">
        <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>
          {errMsg}
        </p>
        <form className="KYC" action="">
          <h2>Sign in:</h2>
          <br />
          <div className="form-item">
            <label htmlFor="username"> User Name:</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username" //id needs to match the htmlFor
              ref={userRef} //to set focus on this input
              autoComplete="off"
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
            />
          </div>

          <button className="btn" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
        <p className="link">
          Need an account?
          <br />
          <Link to="/register">Register</Link> here
        </p>
      </section>

      <Footer />
    </>
  );
};

export default SignIn;

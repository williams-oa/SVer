import { useEffect, useRef, useState } from "react";
import "./signin.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Dashboard from "../dashboard/Dashboard";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
import { useNavigate } from "react-router-dom";
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
import { useNavigate } from "react-router-dom";
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b

axios.create({
  baseURL: "http://localhost:5001",
});
const LOGIN_URL = "/api/v1.0.0/auth/login";

const SignIn = () => {
  const userRef = useRef(); //to set focus for accessability
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // const [email, setEmail] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [userData, setUserData] = useState(null);
  //to transfer userdata to dashboard
=======
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b

  // Setting focus
  useEffect(() => {
    userRef.current.focus();
  }, []); //dependency array is empty so it will only happen when the component loads
  //focus is on the input that we will reference with the userRef

  //Clearing error message when username/password is edited
  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    e.preventDefault(); //prevents reload
=======
    e.preventDefault();
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
    e.preventDefault();
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
    e.preventDefault();
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const userData = response?.data?.data?.user;
      //using axios because it throws errors if anything is wrong unlike with fetch, also don't have to convert response to json
      //we want to do these if the try is successful

      //const accessToken = response?.data?.accessToken
      //const roles =response?.data?.roles
      setUsername("");
      setPassword(""); //empties the username and password when submitted
      setSuccess(true);
      setUserData(userData);
      console.log(userData)
=======
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
      const token = response?.data?.data?.accessToken;
      localStorage.setItem("jwtToken", token);

      setUsername("");
      setPassword(""); //empties the username and password when submitted

      navigate("/dashboard", { state: { jwtToken: token } });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response"); //where there's no error response data
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorised");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {success ? (
        <Dashboard userData={userData} />
        
      ) : (
        <section>
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
      )}
=======
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
      <Footer />
    </>
  );
};

export default SignIn;

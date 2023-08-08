import { Link } from "react-router-dom";
import "./register.css";
import Footer from "../../components/Footer";
import { useRef, useState, useEffect } from "react";
import RegDeets from "./RegDeets";
import { FaInfoCircle, FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import bodyParser from "body-parser";


axios.create({
  baseURL: "http://localhost:5001",
});

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//must start with lower or uppercase letter, must be followed by 3-23 lower or upper case letters, digits, hyphens or underscores
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//one lowercase, oneuppercase, one digit, one special xter, can be 8-24 xters

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(()=> {
  //   userRef.current.focus()
  // }, [])
  //sets focus on the username input when the component loads. Dependency array is empty cause nothing needs to happen for it to focus on userref

  useEffect(() => {
    const result = USER_REGEX.test(user);
    //boolean - tests whether the user data entered satisfies the condition set by USER_REGEX
    setValidName(result);
    //if it passes the test, we assign the username as the valid name state
    // console.log(result, user)
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd); //checks that password satisfies rules
    setValidPwd(result); //accepts if yes
    const match = pwd === matchPwd; //checks that 2nd iteration of pwd matches the first
    setValidMatch(match); //accepts if yes
  }, [pwd, matchPwd]); //runs the above function if any of pwd or 2nd iteration changes

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]); //clears error message to empty string when user changes either name pwd or match
  
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    let userData = {
      username: user,
      email: email,
      password: pwd,
    };
    try {
      fetch("http://localhost:5001/api/v1.0.0/auth/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then((response) => response.json).then(console.log(userData));
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>

      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/signup">Sign in</Link> here
          </p>
        </section>
      ) : (
        <section className="content">
          <RegDeets />
          <div className="rightside">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            {/* if error message exists, set state of errMsg with class errmsg, otherwise set the class as offscreen */}
            {/* aria-live means when we set focus on errRef, it will be announced with a screen reader */}
            <form className="regform" onSubmit={handleSubmit}>
              <div className="newform">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FaInfoCircle />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>

              <div className="newform">
                <label htmlFor="username">Email:</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="newform">
                <label htmlFor="password">
                  Password:
                  <FaCheck className={validPwd ? "valid" : "hide"} />
                  <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <FaInfoCircle />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
              </div>

              <div className="newform">
                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <FaCheck
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  <FaTimes
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FaInfoCircle />
                  Must match the first password input field.
                </p>
              </div>
              <button
                className="btnn"
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign Up
              </button>
            </form>
            <p className="link">
              Already registered?
              <br />
              <Link to="/signup">Sign in</Link> here
            </p>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Register;

<div className="form">
  <input type="email" name="email" placeholder="Enter Email Here" />
  <input type="password" name="" placeholder="Enter Password Here" />
  <Link to="/register" className="btnn">
    LOGIN
  </Link>
  <p className="link">
    Don't have an account?
    <br />
    <Link to="/signup">Sign up</Link> here
  </p>
</div>;

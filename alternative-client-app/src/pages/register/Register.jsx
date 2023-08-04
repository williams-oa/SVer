import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="content">
      <div className="leftside">
        <h1>
          Send &amp; Receive funds
          <br />
          <span>Securely!</span>
        </h1>
        <br />
        <h3 className="text1">
          Join us on this journey to revolutionize the way we manage and utilize
          grants and allowances.
        </h3>
        <p className="with-line" />
        <p className="text2">
          Take charge of your financial accountability today with SVer.
          Together, we can make a difference.
        </p>
        <br />
        <Link to="/register" className="btn lg">
          GET STARTED
        </Link>
      </div>
      <div className="form">
        <input type="email" name="email" placeholder="Enter Email Here" />
        <input type="password" name="" placeholder="Enter Password Here" />
        <Link to="/register" className="btnn">
          LOGIN
        </Link>
        <p className="link">
          Don't have an account?
          <br />
          <Link to="/register">Sign up</Link> here
        </p>
      </div>
    </div>
  );
};

export default Register;

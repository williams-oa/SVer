import { Link } from "react-router-dom";
import "./register.css";


function RegDeets() {
  return (
    <div className="leftside">
      <h1>
        Send &amp; Receive funds
        <br />
        <p className="securely">Securely!</p>
      </h1>
      <br />
      <h3 className="text1">
        Join us on this journey to revolutionize the way we manage and utilize
        grants and allowances.
      </h3>
      <p className="with-line" />
      <p className="text2">
        Take charge of your financial accountability today with SVer. Together,
        we can make a difference.
      </p>
      <br />
      <Link to="/users" className="btn lg">
        View All Users
      </Link>
    </div>
  );
}

export default RegDeets;

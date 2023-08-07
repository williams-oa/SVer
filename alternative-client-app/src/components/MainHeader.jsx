import "../pages/home/home.css";
import { Link } from "react-router-dom";
import Image from "../images/padlock.jpg";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#SVer is here!</h4>
          <h1>Take charge of your financial accountability</h1>
          <p>
            Join us on this journey to revolutionize the way we manage and
            utilize grants and allowances.
          </p>
          <Link to="/register" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src={Image} alt="Safe" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

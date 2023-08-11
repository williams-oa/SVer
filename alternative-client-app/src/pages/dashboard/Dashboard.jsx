import Sidebar from "./Sidebar";
import Rightsidebar from "./Rightsidebar";
import "./dashboard.css";
import Card from "../../UI/Card";
import { BiSolidUserCircle } from "react-icons/bi";
import { vendors } from "../../data";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import SignIn from "../signin/SignIn";

const Dashboard = () => {

  const location = useLocation();
  const jwtToken = location.state?.jwtToken;
  const decodedToken = jwtDecode(jwtToken);
  console.log(decodedToken)
  const username = decodedToken.username;
  const email = decodedToken.email;
  const id = decodedToken.id
  // If userData is not null, render the dashboard with user details
  return (
    <>
      <Sidebar />
      <Rightsidebar />
      <div className="middledash">
        <div className="welcome">
          <h2>Welcome to the Dashboard, {username}!</h2>
        </div>

        <div className="wholedash">
          <div className="dash__left">
            <div className="dash__wrapper">
              <Card className="dash__value" key={id}>
                <span>{<BiSolidUserCircle />}</span>
                <h3>Username: {username}</h3>
                <h5>Email: {email}</h5>
                <small>User ID: {id}</small>
                {/* <small>wallet address: {userData.walletaddress}</small> */}
              </Card>
            </div>
          </div>

          <div className="dash__right">
            <div className="vendors_dash_wrapper">
              {vendors.map(({ id, icon, title, desc }) => {
                return (
                  <div className="dash_value" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                  </div>
                );
              })}
              <br />
              <div className="balance">
                Your account balance:
              </div>
              <br />
            </div>
            <Link to="/sendmoney" className="btn lg">
              SEND MONEY
            </Link>

            <Link to="/sendmoney" className="btn lg">
              ADD MONEY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

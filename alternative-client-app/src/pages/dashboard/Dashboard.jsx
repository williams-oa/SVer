import Sidebar from "./Sidebar";
import Rightsidebar from "./Rightsidebar";
import "./dashboard.css";
import Card from "../../UI/Card";
import { BiSolidUserCircle } from "react-icons/bi";
import { vendors } from "../../data";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const Dashboard = ({ userData }) => {
  if (!userData) {
    // If userData is null, display a loading message or handle it accordingly
    return <p>Loading...</p>;
  }

=======
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const jwtToken = location.state?.jwtToken;
  const decodedToken = jwtDecode(jwtToken);

  const username = decodedToken.username;
  const email = decodedToken.email;
  const id = decodedToken.id;

  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/signin");
  };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
  // If userData is not null, render the dashboard with user details
  return (
    <>
      <Sidebar />
      <Rightsidebar />
      <div className="middledash">
        <div className="welcome">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <h2>Welcome to the Dashboard, {userData.username}!</h2>
=======
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
          <h2>Welcome to the Dashboard, {username}!</h2>
          <button className="btn-danger" onClick={handleLogout}>
            Sign out
          </button>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
        </div>

        <div className="wholedash">
          <div className="dash__left">
            <div className="dash__wrapper">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <Card className="dash__value" key={userData._id}>
                <span>{<BiSolidUserCircle />}</span>
                <h3>Username: {userData.username}</h3>
                <h4>Email: {userData.email}</h4>
                <small>User ID: {userData._id}</small>
=======
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
              <Card className="dash__value" key={id}>
                <span>{<BiSolidUserCircle />}</span>
                <h3>Username: {username}</h3>
                <h5>Email: {email}</h5>
                <small>User ID: {id}</small>
                {/* <small>wallet address: {userData.walletaddress}</small> */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            </div>
            <button className="btn">Send Money</button>
=======
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
              <div className="balance">Your account balance:</div>
              <br />
            </div>
            <Link to="/sendmoney" className="btn lg">
              SEND MONEY
            </Link>

            <Link to="/addmoney" className="btn lg">
              ADD MONEY
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

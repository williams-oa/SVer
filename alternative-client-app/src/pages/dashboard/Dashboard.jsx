import Sidebar from "./Sidebar";
import Rightsidebar from "./Rightsidebar";
import "./dashboard.css";
import Card from "../../UI/Card";
import { BiSolidUserCircle } from "react-icons/bi";
import { vendors } from "../../data";

const Dashboard = ({ userData }) => {
  if (!userData) {
    // If userData is null, display a loading message or handle it accordingly
    return <p>Loading...</p>;
  }

  // If userData is not null, render the dashboard with user details
  return (
    <>
      <Sidebar />
      <Rightsidebar />
      <div className="middledash">
        <div className="welcome">
          <h2>Welcome to the Dashboard, {userData.username}!</h2>
        </div>

        <div className="wholedash">
          <div className="dash__left">
            <div className="dash__wrapper">
              <Card className="dash__value" key={userData._id}>
                <span>{<BiSolidUserCircle />}</span>
                <h3>Username: {userData.username}</h3>
                <h4>Email: {userData.email}</h4>
                <small>User ID: {userData._id}</small>
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
            </div>
            <button className="btn">Send Money</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

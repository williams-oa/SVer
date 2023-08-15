import "./rightsidebar.css";
import Wallet from "./Wallet";
import Activity from "./Activity";
import Payment from "./Payment";

function Rightsidebar() {
  return (
    <div className="rightsidebar">
      <div className="grid">
        <Wallet />
        <Activity />
        <Payment />
      </div>
    </div>
  );
}

export default Rightsidebar;

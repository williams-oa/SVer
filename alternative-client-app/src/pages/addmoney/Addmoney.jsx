import './addmoney.css'
import Sidebar from '../dashboard/Sidebar';
import Rightsidebar from '../dashboard/Rightsidebar';

function Addmoney() {
  return (
    <div>
      <Sidebar />
      <Rightsidebar/>
      <form className="addmoneynow">
        <div className="form-item">
          <label htmlFor="amount">Amount</label>
          <input type="number" />
        </div>
        <button className="btn">Add</button>
      </form>
      
    </div>
  );
}

export default Addmoney;

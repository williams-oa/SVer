function Addmoney() {
  return (
    <div>
      <form className="sendmoneynow">
        <div className="form-item">
          <label htmlFor="address">Address</label>
          <input type="text" />
        </div>

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

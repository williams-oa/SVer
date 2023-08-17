import "./users.css";
import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import { BiSolidUserCircle } from "react-icons/bi";
import SectionHead from "../../components/SectionHead";
import { bsv } from "scrypt-ts";

interface UserType {
  _id: string;
  username: string;
  email: string;
  // ... other properties of a user
}

function Users() {
  const [backendData, setBackendData] = useState<{
    data: { users: UserType[] };
  }>({ data: { users: [] } }); // Initialize with an empty structure
  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/v1.0.0/user/")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);

      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="users__container">
      <div className="users">
        <SectionHead icon={<BiSolidUserCircle />} title="Users" />
        <h2>These are the registered users on our platform:</h2>
        <article className="searchbar">
          
          <input placeholder="search" type="text" />
          <button className="btn sm">Search</button>
        </article>
        <div className="users__wrapper">
          {backendData.data.users.map((user) => {
            return (
              <Card className="users__value" key={user._id}>
                <span>{<BiSolidUserCircle />}</span>
                <h3>Username: {user.username}</h3>
                <h4>Email: {user.email}</h4>
                <small>ID: {user._id}</small>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;

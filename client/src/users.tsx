import React, { useState, useEffect } from "react";
import "./users_style.css";

export default function UsersData() {
  const [resourceType, setResourceType] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/${resourceType}`)
      .then((response) => response.json())
      .then((data) => setItems(data.users));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("Students")}>Students</button>
        <button onClick={() => setResourceType("Universities")}>
          Universities
        </button>
        <button onClick={() => setResourceType("Vendors")}>Vendors</button>
      </div>
      <h1>{resourceType}</h1>
      <ul>
        {items.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

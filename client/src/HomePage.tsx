import React from "react";

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       {/* Add your content for the home page */}
//     </div>
//   );
// };

export default function HomePageContent() {
  return (
    <div className="content">
      <div>
      <h1>
        Send &amp; Receive <br />
        <span>Safe</span> <br />
      </h1>
      <p className="par">
        Join us on this journey to revolutionize the way we manage and utilize
        grants and allowances.
        <br />
        Take charge of your financial accountability today with "Saver".
        Together, we can make a difference.{" "}
      </p>
      <button className="cn">
        <a href="#">JOIN US</a>
      </button>
      </div>
      <div className="form">
        <input type="email" name="email" placeholder="Enter Email Here" />
        <input type="password" name="" placeholder="Enter Password Here" />
        <button className="btnn">
          <a href="#">Login</a>
        </button>
        <p className="link">
          Don't have an account
          <br />
          <a href="#">Sign up</a> here
        </p>
      </div>
    </div>
  );
}

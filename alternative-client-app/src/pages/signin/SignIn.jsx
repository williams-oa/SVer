import React from "react";
import "./signin.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [usertype, setUsertype] = useState("");
  //const [error, setError] = useState('');

  const history = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("127.0.0.1:3000/api/v1/tours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, usertype }),
      });
      if (response.ok) {
        // Registration successful, navigate to login page
        history.push('/userDashboard');
        // You can use react-router-dom for navigation
      } else {
        // Handle registration error
        //setError('Sorry, registration data is incorrect. Please check the required fields again.')
      }
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <>
      <form className="KYC" action="">
        {" "}
        <h2>Sign in:</h2>
        <br />
        <div className="form-item">
          <label htmlFor="theinput"> User Name:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>


        <div className="form-item">
          <label htmlFor="theinput">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-usertype">
          <label htmlFor="theinput"> User Type:</label>
          <select
            value={usertype}
            onChange={(e) => setUsertype(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="individual">Individual</option>
            <option value="student">Student</option>
            <option value="institution">Institution</option>
          </select>
        </div>
        <button className="btn" onClick={handleRegister}>
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
};

export default SignIn;


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const SignUp = () => {
//   const [name, setname] = useState("");
//   const [duration, setduration] = useState("");
//   const [difficulty, setdifficulty] = useState("");
//   const [price, setprice] = useState("");
//   const [error, setError] = useState('');

//   const history = useNavigate();

//   const handleRegister = async () => {
//     try {
//       const response = await fetch("127.0.0.1:3000/api/v1/tours", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, duration, difficulty, price }),
//       });
//       if (response.ok) {
//         // Registration successful, navigate to login page
//         history.push('/userDashboard');
        
//         // You can use react-router-dom for navigation
//       } else {
//         // Handle registration error
//         setError('Sorry, registration data is incorrect. Please check the required fields again.')
//       }
//     } catch (error) {
//       console.error("Error registering user", error);
//     }
//   };

//   return (
//     <>
//       <form className="KYC" action="">
//         {" "}
//         <h2>Please fill out your details below:</h2>
//         <br />
//         <div className="form-item">
//           <label htmlFor="theinput"> User Name:</label>
//           <input
//             type="text"
//             placeholder="Username"
//             value={name}
//             onChange={(e) => setname(e.target.value)}
//           />
//         </div>
//         <div className="form-item">
//           <label htmlFor="theinput"> duration:</label>
//           <input
//             type="number"
//             placeholder="10"
//             value={duration}
//             onChange={(e) => setduration(e.target.value)}
//           />
//         </div>
//         <div className="form-item">
//           <label htmlFor="theinput">difficulty</label>
//           <input
//             type="text"
//             placeholder="text"
//             value={difficulty}
//             onChange={(e) => setdifficulty(e.target.value)}
//           />
//         </div>
//         <div className="form-item">
//           <label htmlFor="theinput"> price:</label>
//           <input
//             type="number"
//             placeholder="10"
//             value={price}
//             onChange={(e) => setprice(e.target.value)}
//           />
//         </div>
//         <button className="btn" onClick={handleRegister}>
//           Submit
//         </button>
//       </form>
//       <Footer />
//     </>
//   );
// };

// export default SignUp;
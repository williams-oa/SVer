import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Vendors from "./pages/vendors/Vendors";
import SignIn from "./pages/signin/SignIn";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Users from "./pages/users/Users";
import Dashboard from "./pages/dashboard/Dashboard";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Sendmoney from "./pages/sendmoney/Sendmoney";
import Addmoney from "./pages/addmoney/Addmoney";
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
import Sendmoney from "./pages/sendmoney/Sendmoney";
import Addmoney from "./pages/addmoney/Addmoney";
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
import Sendmoney from "./pages/sendmoney/Sendmoney";
import Addmoney from "./pages/addmoney/Addmoney";
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
        <Route path="users" element={<Users />} />
        <Route path="dashboard" element={<Dashboard />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <Route path="sendmoney" element={<Sendmoney />} />
        <Route path="addmoney" element={<Addmoney />} />
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
        <Route path="sendmoney" element={<Sendmoney />} />
        <Route path="addmoney" element={<Addmoney />} />
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
=======
        <Route path="sendmoney" element={<Sendmoney />} />
        <Route path="addmoney" element={<Addmoney />} />
>>>>>>> a0b2d47474a3d350bdfadb940ce6ca1b3cdc063b
      </Routes>
    </BrowserRouter>
  );
};

export default App;

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;

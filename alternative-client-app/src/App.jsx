import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Vendors from "./pages/vendors/Vendors";
import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";

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
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

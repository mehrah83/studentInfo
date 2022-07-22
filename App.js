import React from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/Pages/NotFound";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import ViewUser from "./Components/Users/ViewUser";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/editUser/:id" element={<EditUser/>}/>
        <Route exact path="/viewUser/:id" element={<ViewUser/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

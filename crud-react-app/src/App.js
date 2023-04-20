import "./App.css";
import LayoutNavbar from "./components/layout/LayoutNavbar";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/page/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <>
      <LayoutNavbar />

      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/user/add' element={<AddUser />}></Route>
        <Route path='/user/edit/:id' element={<EditUser />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

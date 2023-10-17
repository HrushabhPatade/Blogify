import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from './components/AboutUs';
import AddBlogs from './components/AddBlogs';
import Blogs from './components/Blogs';
import Create from './components/Create';
import ForgotPassword from './components/ForgotPwd';
import Login from './components/Login';
import ReadPage from './components/ReadPage';
import Reg from './components/Reg';
import UReadPage from './components/UReadPage';

function App() {
  return (
    <div className="App">
      {/* <Blogs/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cr" element={<Create />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/ab" element={<AddBlogs />} />
        <Route path="/read/:title" element={<ReadPage />} />
        <Route path="/uread" element={<UReadPage/>}/>
        <Route path='/fp' element={<ForgotPassword/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './screen/Service';
import Main from './screen/Main';
import Signin from './screen/Signin';
import Login from './screen/Login';
import Select from './screen/Select';
import Signin2 from './screen/Signin2';
import Footer from "./screen/Footer";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  
  function getLogin(id) {
    setLogin(id);      
  }

  return (
    <div className="App">
      <Footer></Footer>
      
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signin2" element={<Signin2 />}></Route>
          <Route path="/login" element={<Login getLogin={getLogin}/>}></Route>
          <Route path="/select" element={<Select login={login}/>}></Route>
          
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </Router>
    </div>
    );
}

export default App;

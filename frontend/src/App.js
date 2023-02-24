import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './screen/Service';
import Main from './screen/Main';
import Signup from './screen/SignUp/Signup';
import Login from './screen/Login';
import Select from './screen/Select';
import Signup2 from './screen/SignUp/Signup2';
import Information from './screen/Information';
import Information2 from './screen/Information2';
import Result from './screen/Result';
import Footer from "./screen/Footer";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [link, setLink] = useState("");
  const [mbti, setMbti] = useState("");
  const [addr, setAddr] = useState("");
  const [keyword, setKeyword] = useState([]);
  const [idealage, setIdealage] = useState([]);
  const [idealmbti, setidealMbti] = useState([]);
  const [idealaddr, setidealAddr] = useState("");
  const [idealkeyword, setIdealkeyword] = useState([]);

  function getLogin(id) {
    setLogin(id);      
  }
  function getUserData(id, age, height, gender, link, mbti, addr, keyword) {
     setId(id);
     setAge(age);
     setHeight(height)
     setGender(gender);
     setLink(link);
     setMbti(mbti);
     setAddr(addr);
     setKeyword(keyword);
   }

   function getIdealData(ideal_age, ideal_mbti, ideal_addr, ideal_keyword) {
     setIdealage(ideal_age);
     setidealMbti(ideal_mbti);
     setidealAddr(ideal_addr);
     setIdealkeyword(ideal_keyword);
   }

  let user = {
    id : id,
    age : age,
    height : height,
    gender : gender,
    link : link,
    mbti : mbti,
    addr : addr,
    keyword : keyword,
    ideal_age : idealage,
    ideal_mbti : idealmbti,
    ideal_addr : idealaddr,
    ideal_keyword : idealkeyword
  }

  return (
    <div className="App">
      <Footer></Footer>
      
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/signup" element={<Signup getUserData={getUserData}/>}></Route>
          <Route path="/signup2" element={<Signup2 getIdealData={getIdealData}/>}></Route>
          <Route path="/login" element={<Login getLogin={getLogin}/>}></Route>
          <Route path="/select" element={<Select login={login}/>}></Route>
          <Route path="/information" element={<Information user={user}/>}></Route>
          <Route path="/information2" element={<Information2 user={user}/>}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </Router>
    </div>
    );
}

export default App;
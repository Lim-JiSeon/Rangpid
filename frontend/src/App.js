import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Service from './screen/Service';
import Main from './screen/Main';
import Register from './screen/Register/Register';
import Signin from './screen/Signin';
import Select from './screen/Select';
import Information from './screen/Information/Information';
import Result from './screen/Result';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/select" element={<Select />}></Route>
          <Route path="/information" element={<Information />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </Router>
    </div>
    );
}

export default App;
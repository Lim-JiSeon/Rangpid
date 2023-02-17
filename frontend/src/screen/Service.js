import mainImg from '../img/main-img.png';
import '../App.css';
import { useNavigate } from "react-router-dom"; 

function Service() {
  let navigate = useNavigate();
  
  return (
    <div className="wrap">
      <div className='container'>
        <div id='container-contents'>
          <img src={mainImg} className="main-img" alt="main-img" />
          <div className='btn-container'>
            <div className='join-container'>
              <button className='join-btn'
                type='button'
                onClick={() => {
                  navigate("/signin");
                }}
              >
                회원가입
              </button>
            </div>
            <div className='login-container'>
              <button className='login-btn'
                type='button'
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
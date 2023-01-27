import '../App.css';
import mainImg from '../img/main-img.png';
import { useNavigate } from "react-router-dom"; 

function Main() {
    let navigate = useNavigate();

    return (
        <div className="wrap">
            <div className='container'>
                <img src={mainImg} className="main-img" alt="main-img" />
                <p className='title'>랑피드</p>
                <button className='start-btn'
                    onClick={() => {
                        navigate("/service");
                    }}
                >
                    시작하기
                </button>
            </div>
        </div>
    );
}

export default Main;
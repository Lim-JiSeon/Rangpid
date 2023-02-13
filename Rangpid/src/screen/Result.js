import '../App.css';
import mainImg from '../img/main-img.png';
import { useNavigate } from "react-router-dom"; 

function Result() {
    let navigate = useNavigate();
  
    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>매칭결과
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default Result;
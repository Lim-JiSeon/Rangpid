import '../App.css';
import { useNavigate } from "react-router-dom"; 

function Select(props) {
    let navigate = useNavigate();
  
    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>아이디 : {props.login}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Select;
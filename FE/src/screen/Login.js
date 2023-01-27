import '../App.css';
import { useNavigate } from "react-router-dom"; 

function Login(props) {
    let navigate = useNavigate();
    
    function setLogin() {
        let idText = document.getElementById("login-input-txt").value;
        props.getLogin(idText);
    }

    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>로그인</div>
                <div className='login-input-container'>
                    <input className='login-input'
                        type='text'
                        id='login-input-txt'
                        placeholder='아이디를 입력해주세요.'
                    ></input>
                </div>
                <div className='log-in-container'>
                    <button className='log-in-btn'
                        type='submit'
                        onClick={() => {
                        navigate("/select");
                        setLogin();
                        }}
                    >
                        로그인하기
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
import '../App.css';
import { useEffect, useInsertionEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { signin } from "../actions/userActions";


function Signin() {
    let navigate = useNavigate();
    
    /*const [id, setId] = useState("");
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push("/");
        }
        return () => {

        };
    }, [userInfo]);


    function setLogin() {
        let idText = document.getElementById("login-input-txt").value;
        props.getLogin(idText);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatchEvent(signin(id));
    }
*/
    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>로그인</div>
                <div>
                    
                </div>
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
                        //setLogin();
                        }}
                    >
                        로그인하기
                    </button>
                </div>
            </div>
        </div>
        <footer>
            랑피드
        </footer>
        </div>
    );
}
//import { formToJSON } from 'axios';

export default Signin;
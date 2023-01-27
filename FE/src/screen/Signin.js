import '../App.css';
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../data/Hangjungdong";
import { useState } from "react";

function Signin(props) {
    let navigate = useNavigate();
    const { sido, sigugun, dong } = hangjungdong;
    
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [loc1, setLoc1] = useState("");
    const [loc2, setLoc2] = useState("");

    function selectText() {
        let sidoSelect = document.getElementById("sido");
        let sigugunSelect = document.getElementById("sigugun");
  
        let sidoText = sidoSelect.options[sidoSelect.selectedIndex].text;
        let sigugunText = sigugunSelect.options[sigugunSelect.selectedIndex].text;
        
        setLoc1(sidoText);
        setLoc2(sigugunText);
      }

    function sendData(){
        props.setLocation(loc1+" "+loc2);
    }

    return (
        <div className="wrap">
        <div className='container'>
            <div id='container-contents'>
                <div className='sub-title'>회원 가입</div>
                <div className='info-input-container'>
                    <div className='detail-title'>정보 입력</div>
                    <div className='id-input-container'>
                        <div className='mini-title'>아이디</div>
                        <input className='id-input'></input>
                        <button className='id-check-btn'>중복확인</button>
                    </div>
                    <div className='age-input-container'>
                        <div className='mini-title'>나이</div>
                        <input className='age-input'></input>
                    </div>
                    <div className='sex-input-container'>
                        <div className='mini-title'>성별</div>
                        <button className='m-sex'>남성</button>
                        <button className='f-sex'>여성</button>
                    </div>
                    <div className='link-input-container'>
                        <div className='mini-title'>오픈채팅 링크</div>
                        <input className='link-input'></input>
                        <div className='detail-content'>
                            *매칭 후 상대방에게 전달될 오픈채팅방 링크입니다. 카카오톡 오픈채팅 방을 만든 뒤 링크를 작성해주세요. 
                        </div>
                    </div>
                </div>
                <div className='mbti-input-container'>
                    <div className='detail-title'>성격(MBTI)</div>
                    <div className='mbti-btn-container'>
                        <button className='enfj'>ENFJ</button>
                        <button className='infj'>INFJ</button>
                        <button className='intj'>INTJ</button>
                        <button className='entj'>ENTJ</button>
                        <button className='enfp'>ENFP</button>
                        <button className='infp'>INFP</button>
                        <button className='intp'>INTP</button>
                        <button className='entp'>ENTP</button>
                        <button className='esfp'>ESFP</button>
                        <button className='isfp'>ISFP</button>
                        <button className='istp'>ISTP</button>
                        <button className='estp'>ESTP</button>
                        <button className='esfj'>ESFJ</button>
                        <button className='isfj'>ISFJ</button>
                        <button className='istj'>ISTJ</button>
                        <button className='estj'>ESTJ</button>
                    </div>
                </div>
                <div className='addr-input-container'>
                    <div className='detail-title'>거주지</div>
                    <div className="select-container">
                        <div className="select-address">
                            <select id="sido" onChange={(e) => {
                            setVal1(e.target.value)
                            selectText()
                            }}>
                            <option value="">선택</option>
                            {sido.map((el) => (
                                <option key={el.sido} value={el.sido}>
                                {el.codeNm}
                                </option>
                            ))}
                            </select>
                        </div>

                        <div className="select-address">     
                            <select id="sigugun" onChange={(e) => {
                            setVal2(e.target.value)
                            selectText()
                            }}>
                            <option value="">선택</option>
                            {sigugun
                                .filter((el) => el.sido === val1)
                                .map((el) => (
                                <option key={el.sigugun} value={el.sigugun}>
                                    {el.codeNm}
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='keyword-input-container'>
                    <div className='detail-title'>키워드</div>
                    <div className='keyword-content-container'>
                        <div className='mini-title'>키</div>
                            <input className='height-input'></input>
                        <div className='keword-btn-container'>
                            <button className='dog'>강아지상</button>
                            <button className='cat'>고양이상</button>
                            <button className='rabbit'>토끼상</button>
                            <button className='bear'>곰상</button>
                            <button className='kind'>다정한</button>
                            <button className='calm'>차분한</button>
                            <button className='active'>활발한</button>
                            <button className='cute'>귀여운</button>
                            <button className='thin'>마른</button>
                            <button className='muscle'>근육질</button>
                            <button className='normal'>보통</button>
                            <button className='full'>통통한</button>
                            <button className='game'>게임</button>
                            <button className='movie'>영화보기</button>
                            <button className='trip'>여행</button>
                            <button className='exercise'>운동</button>
                        </div>
                    </div>
                </div>
                <div className='next-container'>
                    <button className='next-btn'
                        type='submit'
                        onClick={() => {
                        navigate("/signin2");
                        //setSign();
                        }}
                    >
                        다음
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Signin;
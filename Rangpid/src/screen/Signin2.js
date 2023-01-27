import '../App.css';
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../data/Hangjungdong";
import { useState } from "react";

function Signin2(props) {
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
                <div className='ideal-age-input-container'>
                    <div className='mini-title'>이상형 나이</div>
                    <input className='ideal-age-input'
                        type='range'
                    ></input>
                </div>
                <div className='mbti-input-container'>
                    <div className='detail-title'>이상형 성격(MBTI)</div>
                    <div className='mbti-btn-container'>
                        <button className='ideal-enfj'>ENFJ</button>
                        <button className='ideal-infj'>INFJ</button>
                        <button className='ideal-intj'>INTJ</button>
                        <button className='ideal-entj'>ENTJ</button>
                        <button className='ideal-enfp'>ENFP</button>
                        <button className='ideal-infp'>INFP</button>
                        <button className='ideal-intp'>INTP</button>
                        <button className='ideal-entp'>ENTP</button>
                        <button className='ideal-esfp'>ESFP</button>
                        <button className='ideal-isfp'>ISFP</button>
                        <button className='ideal-istp'>ISTP</button>
                        <button className='ideal-estp'>ESTP</button>
                        <button className='ideal-esfj'>ESFJ</button>
                        <button className='ideal-isfj'>ISFJ</button>
                        <button className='ideal-istj'>ISTJ</button>
                        <button className='ideal-estj'>ESTJ</button>
                    </div>
                </div>
                <div className='addr-input-container'>
                    <div className='detail-title'>이상형 거주지</div>
                    <div className="select-container">
                        <div className="select-address">
                            <select id="ideal-sido" onChange={(e) => {
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
                            <select id="ideal-sigugun" onChange={(e) => {
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
                            <input className='ideal-height-input'
                                type='range'
                            ></input>
                        <div className='keword-btn-container'>
                            <button className='ideal-dog'>강아지상</button>
                            <button className='ideal-cat'>고양이상</button>
                            <button className='ideal-rabbit'>토끼상</button>
                            <button className='ideal-bear'>곰상</button>
                            <button className='ideal-kind'>다정한</button>
                            <button className='ideal-calm'>차분한</button>
                            <button className='ideal-active'>활발한</button>
                            <button className='ideal-cute'>귀여운</button>
                            <button className='ideal-thin'>마른</button>
                            <button className='ideal-muscle'>근육질</button>
                            <button className='ideal-normal'>보통</button>
                            <button className='ideal-full'>통통한</button>
                            <button className='ideal-game'>게임</button>
                            <button className='ideal-movie'>영화보기</button>
                            <button className='ideal-trip'>여행</button>
                            <button className='ideal-exercise'>운동</button>
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

export default Signin2;
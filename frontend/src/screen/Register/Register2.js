import style from "./Register2.module.css";
import { useNavigate } from "react-router-dom"; 
import { hangjungdong } from "../../data/Hangjungdong";
import { useState } from "react";

function Signup2(props) {
    let navigate = useNavigate();
    const { sido, sigugun, dong } = hangjungdong;
    const gap = 10;
    const fixedMin = 140;
    const fixedMax = 200;

    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [loc1, setLoc1] = useState("");
    const [loc2, setLoc2] = useState("");
    
    const [rangeMinValue, setRangeMinValue] = useState(fixedMin);
    const [rangeMaxValue, setRangeMaxValue] = useState(fixedMax);
    const [rangeMinPercent, setRangeMinPercent] = useState(0);
    const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

    const rangeMinValueHandler = e => {
        setRangeMinValue(parseInt(e.target.value));
    };

    const rangeMaxValueHandler = e => {
        setRangeMaxValue(parseInt(e.target.value));
    };

    const twoRangeHandler = () => {
        if (rangeMaxValue - rangeMinValue < gap) {
            setRangeMaxValue(rangeMinValue => rangeMinValue + gap);
            setRangeMinValue(rangeMaxValue => rangeMaxValue - gap);
        } else {
            setRangeMinPercent(() => (rangeMinValue / fixedMax)*100);
            setRangeMaxPercent(() => 100-(rangeMaxValue / fixedMax)*100);
        }
    };

    function selectText() {
        let sidoSelect = document.getElementById("sido");
        let sigugunSelect = document.getElementById("sigugun");
  
        let sidoText = sidoSelect.options[sidoSelect.selectedIndex].text;
        let sigugunText = sigugunSelect.options[sigugunSelect.selectedIndex].text;
        
        setLoc1(sidoText);
        setLoc2(sigugunText);
      }

    function sendUserData(){
        props.getIdealData(loc1+" "+loc2);
    }

    return (
        <div className={style.wrap}>
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.subTitle}>회원 가입</div>
            </div>
            <div id={style.containerContents}>
                <div className={style.idealAgeInputContainer}>
                    <div className={style.detailTitle}>이상형 나이</div>
                    <div className={style.idealAgeInput}>
                        <div className={style.idealAgeInputInner}
                            rangeMinPercent = {rangeMinPercent}
                            rangeMaxPercent = {rangeMaxPercent}
                        >

                        </div>
                    </div>
                    <div className="rangeWrap">
                        <input
                            className="rangeMin"
                            type="range"
                            min={fixedMin}
                            max={fixedMax - gap}
                            step="1000"
                            value={rangeMinValue}
                            onChange={e => {
                                rangeMinValueHandler(e);
                                twoRangeHandler();
                            }}>
                        </input>
                        <input
                            className="rangeMax"
                            type="range"
                            min={fixedMin + gap}
                            max={fixedMax}
                            step="1000"
                            value={rangeMaxValue}
                            onChange={e => {
                                rangeMaxValueHandler(e);
                                twoRangeHandler();
                            }}>
                        </input>
                    </div>
                </div>
                <div className={style.mbtiInputContainer}>
                    <div className={style.detailTitle}>이상형 성격(MBTI)</div>
                    <div className={style.mbtiBtnContainer}>
                        <button className={style.idealEnfj}>ENFJ</button>
                        <button className={style.idealInfj}>INFJ</button>
                        <button className={style.idealIntj}>INTJ</button>
                        <button className={style.idealEntj}>ENTJ</button>
                        <button className={style.idealEnfp}>ENFP</button>
                        <button className={style.idealInfp}>INFP</button>
                        <button className={style.idealIntp}>INTP</button>
                        <button className={style.idealEntp}>ENTP</button>
                        <button className={style.idealEsfp}>ESFP</button>
                        <button className={style.idealIsfp}>ISFP</button>
                        <button className={style.idealIstp}>ISTP</button>
                        <button className={style.idealEstp}>ESTP</button>
                        <button className={style.idealEsfj}>ESFJ</button>
                        <button className={style.idealIsfj}>ISFJ</button>
                        <button className={style.idealIstj}>ISTJ</button>
                        <button className={style.idealEstj}>ESTJ</button>
                    </div>
                </div>
                <div className={style.addrInputContainer}>
                    <div className={style.detailTitle}>이상형 거주지</div>
                    <div className={style.selectContainer}>
                        <div className={style.selectAddress}>
                            <select id={style.idealSido} onChange={(e) => {
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

                        <div className={style.selectAddress}>     
                            <select id={style.idealSigugun} onChange={(e) => {
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
                <div className={style.keywordInputContainer}>
                    <div className={style.detailTitle}>키워드</div>
                    <div className={style.heightInputContainer}>
                        <div className={style.detailTitle}>키</div>
                            <input className={style.idealHeightInput}
                                type='range'
                            ></input>   
                    </div>
                    <div className={style.keywordContentContainer}>
                        <div className={style.keywordBtnContainer}>
                            <button className={style.idealDog}>강아지상</button>
                            <button className={style.idealCat}>고양이상</button>
                            <button className={style.idealRabbit}>토끼상</button>
                            <button className={style.idealBear}>곰상</button>
                            <button className={style.idealKind}>다정한</button>
                            <button className={style.idealCalm}>차분한</button>
                            <button className={style.idealActive}>활발한</button>
                            <button className={style.idealCute}>귀여운</button>
                            <button className={style.idealThin}>마른</button>
                            <button className={style.idealMuscle}>근육질</button>
                            <button className={style.idealNormal}>보통</button>
                            <button className={style.idealFull}>통통한</button>
                            <button className={style.idealGame}>게임</button>
                            <button className={style.idealMovie}>영화보기</button>
                            <button className={style.idealTrip}>여행</button>
                            <button className={style.idealExercise}>운동</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.nextContainer}>
                <button className={style.nextBtn}
                    type='submit'
                    onClick={() => {
                    navigate("/select");
                    }}
                >
                    회원 가입하기
                </button>
            </div>
        </div>
        <footer>
            랑피드
        </footer>
        </div>
    );
}

export default Signup2;
import "./App.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const [입력, 입력수정] = useState("");
  const [이름, 이름수정] = useState([0]);
  let n = 0;
  let rate = 0.015;
  let ans = 0;

  let [isInputClicked, setIsInputClicked] = useState(false);

  const MovePage = useNavigate();

const [su, setSu] = useState();

const onChangeHanlder=(e)=>{
	setSu(e.currentTarget.value)
}

const company =[
	/*{key:1, value:"키움증권"},
  {key:2, value:"KB증권"},
  {key:3, value:"삼성증권"},
  {key:4, value:"미래에셋증권"},
  {key:5, value:"NH투자증권"},
  {key:6, value:"한국투자증권"},
  {key:7, value:"신한투자증권"},*/
  {key:8, value:"0.000%"},
  {key:9, value:"0.005%"},
  {key:10, value:"0.010%"},
  {key:11, value:"기본값) 0.015%"},
  {key:12, value:"0.020%"},
]

  const enterkey = () => {
    if (window.event.keyCode === 13) {
      handleClick();
    }
  }

  const handleClick = (e) => {
    const selectedValue = su;
    이름수정((prevState) => {
      n = parseFloat(입력);

      if (n<=0) n*=-1;

      switch (selectedValue)
      {
        case "8" :
          rate = 0;
          break;
    
        case "2" :
        case "3" :
        case "6" :
        case "7" :
        case "9" :
          rate = 0.005;
          break;
    
        case "5" :
        case "10" :
          rate = 0.01;
          break;

        case "12" :
          rate = 0.02;
          break;
    
        default :
          rate = 0.015;
      }

      let actualRate = 0.2 + rate;

      ans = 100*(10000/((100-n)*(100-actualRate)) - 1);

      if (n>=100) {alert('현재 수익률을 정확히 입력하세요!'); return;}
      if (isNaN(ans)) {alert('숫자를 입력하세요!'); return;}

      MovePage('/result', { state: {'answer': ans.toFixed(2)} });
    });
  }

  const handleInputChange = (e) => {
    입력수정(e.target.value);
  }

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  console.log(입력);
  
  return (
    <div className="App">

      <div className='imageHeader'>
        <div className="inHeader">
          <font color="white" className="headerText">주식 복구수익률 계산기</font>
          <button
            onClick={() => handleOpenNewTab("https://www.naver.com/")}
            className="button_minor">?</button>
        </div>
      </div>

      <div className="two">
        <div className="lowContainer">
          <font color="black" className="containerText">현재 마이너스 몇 퍼센트인가요?</font>
          <input className="button_input"
            onFocus={() => {setIsInputClicked(true);}}
            onBlur={() => {setIsInputClicked(false);}}
            placeholder={isInputClicked === true ? "" : "숫자를 입력하세요."}
            onKeyUp={enterkey} type="text" value={입력}
            onChange={handleInputChange}/>
        </div>

        <div className="lowContainer">
          <font color="black" className="containerText">증권사 수수료를 선택하세요.</font>
          <select className="button_input"
            onChange={onChangeHanlder} value={su} defaultValue='11'>
		        {company.map((item, index)=>(
			        <option key={item.key} value={item.key}>{item.value}</option>
		        ))}
          </select>
        </div>

        <div className="lowButton">
          <button onClick={handleClick} className="button_major">
            확인하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
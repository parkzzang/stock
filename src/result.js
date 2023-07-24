import "./App.css";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Second() {
  const MovePage = useNavigate();
  const location = useLocation();
  const userInfo = { ...location.state };
  

  function gohome(){
     MovePage('/home');
   }

  const handleCopyClipBoard = (text: string) => {
    try {
      const final = userInfo.answer;
      navigator.clipboard.writeText(text+final+'% 올라야 본전입니다. 직접 확인해보세요! http://www.naver.com');
      alert('결과가 복사되었습니다. 원하는 곳에 붙여넣어 활용하세요.');
    } catch (error) {
      alert('복사에 실패했습니다.');
    }
  };

  return (
    <div className="App">

      <div className='resultHeader'/>

      <div className="resultContainer">
        {userInfo.answer}%
      </div>

      <div className="resultMiddle">
        만큼 올라야 본전!
      </div>
      <div className="resultLow">
        <font color='5A5A5A'>
          거래세, 증권사 수수료, 유관기관 수수료를 모두 계산했습니다. 하지만 계좌의 종류, 수수료 우대 정책 등에 의해 실제 값이 다를 수 있으므로 투자 참고자료로만 활용하세요.
        </font>
      </div>

      <button className="button_home" onClick={gohome}>홈으로</button>
      <br/>
      <button className="button_share" onClick={() => handleCopyClipBoard('내 주식이 얼마나 올라야 본전일까요? ')}>공유하기</button>

    </div>
  );
}

export default Second;
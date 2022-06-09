import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App(){
  const [pageName,setPageName] = useState('');
  //useEffect:
  //이벤트 핸들러를 등록하거나 api를 호출하는 등의 부수 효과를 발생시킬 때
  //사용하는 리액트 함수이다.
  //설명은 나중에 자세히 할 예정
  //여기서는 onpopstate를 사용하기 위해서 사용했다 정도로
  useEffect(()=>{
    window.onpopstate = function (event) {
      //console.log(`location: ${document.location}, state: ${event.state}`);
      setPageName(event.state);
    };
  },[]);
  function onClick1(){
    const pageName = 'page1';
    {/* 
      pushstate의 첫번째 매개변수는 데이터를 의미 
      onpopstate에서 event 객체에 state라는 값이 있는데
      그 값이 첫번째 매개변수로 넘겨주는 값이다.
      두번째 매개변수는 타이틀이라는 건데 별로 중요x
      3번째는 url 주소
      */}
    window.history.pushState(pageName,'','/page1');
    setPageName(pageName);
  }
  function onClick2(){
    const pageName = 'page2';
    window.history.pushState(pageName,'','/page2');
    setPageName(pageName);
  }
  return (
    <div>
      <button onClick={onClick1}>page1</button>
      <button onClick={onClick2}>page2</button>
      {!pageName && <Home/>}
      {pageName === 'page1' && <Page1/>}
      {pageName === 'page2' && <Page2/>}
    </div>
  );
}

function Home(){
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}
function Page1(){
  return <h2>여기는 Page1입니다.</h2>;
}function Page2(){
  return <h2>여기는 Page2입니다.</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)

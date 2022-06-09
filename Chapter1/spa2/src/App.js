import React from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Rooms from './Rooms';

export default function App(){
  return (
    //BrowserRouter 컴포넌트에서 현재 페이지의 상태값을 관리해 준다.
    <BrowserRouter>
      <div sylte={{padding:20, border: '5px solid gray'}}>
        {/* Link 컴포넌트에서 클릭했을 때 to 에 해당하는 경로로 이동시켜준다. */}
        <Link to="/">홈</Link>
        <br/>
        <Link to="/photo">사진</Link>
        <br/>
        <Link to="/rooms">방 소개</Link>
        <br/>
        {/* Router 컴포넌트는 path 정보에 따라서 어떤 컴포넌트를 렌더링할지 결정해준다.
        아래서 exact 가 빠지게 되면, /photo가 path로 들어오게 되면
        Home 컴포넌트도 렌더링이 된다. 그것을 막기 위해서 exact path를 썼다. */}
        <Routes>
        {/* <Route exact path="/" component={Home}/>
        <Route path="/photo" component={Photo}/>
        <Route path="/rooms" component={Rooms}/> */}
        {/* <Route exact path="/" element={<Home/>}/> */}
        {/* <Route exact path="/" element={<h2>hi</h2>}/> */}
        <Route exact path="/" element={<Home/>}/>
        <Route path="/photo/*" element={<Photo/>}/>
        <Route path="/rooms/*" element={<Rooms/>}/>
        </Routes>
      </div>
     </BrowserRouter>
  );
}

function Home(){
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}
function Photo(){
  return <h2>사진 구경</h2>;
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

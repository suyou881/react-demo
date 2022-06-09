import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';

//Route 컴포넌트로 렌더링을 하면 해당 컴포넌트의 속성값으로 match라는 속성값을 넣어준다.
//match 안에는 url이라는 속성이 있는데 이 속성값은 Rooms 컴포넌트가 렌더링 될 때
//그 url의 일부분을 의미한다.
//즉, 이곳으로 넘어오는 url prefix는 /rooms 이다. 따라서 match.url == /rooms라고 볼 수 있다.

//useParams --> using react-router-dom at version 6.
//버전이 바뀌어서 찾아봈다.
//https://stackoverflow.com/questions/70585815/react-this-props-match-is-undefined
export default function Rooms(match){
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h2>여기는 방을 소개하는 페이지입니다.</h2>
            <Link to={`/rooms/blueRoom`}>파란 방</Link>
            <br/>
            <Link to={`/rooms/greenRoom`}>초록 방</Link>
            <br/>
            {/* : 은 파라미터를 이용하겠다는 뜻이다.
            아래 function Room을 보면 ${match.params.roomId */}
            <Routes>
            <Route path={`/:roomId`} element={<Room/>}/>
            <Route exact path={"/"} element={<h3>방을 선택해 주세요.</h3>}/>
            </Routes>
        </div>
    );
}

function Room(){
    const params = useParams();
    return <h3>{`${params.roomId} 를 선택하셨습니다.`}</h3>;
}


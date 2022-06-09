import React from 'react';
import ReactDOM from'react-dom';
import Counter from './Counter';

//리액트 요소를 반환할 수 있다.
//물론 컴포넌트 요소도 반환할 수 있다.
//단순 문자열,숫자 그리고 배열도 반환 가능
//배열에서의 key는 렌더링을 효율적으로 하기 위해 필요하다.
//리액트가 key를 이용해서 virtual dom에서의 연산을 효육적으로 할 수 잇다.
//Fragment 를 반환할 수 있다. <></> --> 축약형이다.
//Fragment 안에서의 순서가 key 역활을 한다.
//null, bollean 값도 반환할 수 있다.
//이 때 이러한 값들은 무시가 되고 출력되지 않는다.
//이 boolean 값은 조건부 렌더링을 할 때 유용하게 사용될 수 있다.
//reactPortal을 사용할 수 잇다.
///1번째 요소에는 반환하고 싶은 값
//2번째 요소에는 어디에 반환할건지
//reactPortal은 Modal을 위해서 많이 사용되기도 한다.
export default function App(){
  // return (
  //   <>
  //   <div>
  //     hi
  //   </div>
  //   <Counter></Counter>
  //   단순 문자열
  //   </>
  
  //return (
    //'단순문자열'
    //[<p>hi</p>,<p>yo</p>] key가 없다고 에러메시지 뜸
    //[<p key={1}>hi</p>,<p key={2}>yo</p>]
  //)

  return(
    <React.Fragment>
      <p>hi</p>
      <p>yo</p>
      <Counter></Counter>
      {
        //1번째 요소에는 반환하고 싶은 값
        //2번째 요소에는 어디에 반환할건지
        ReactDOM.createPortal(
          <div>
            <p>reactPortal</p>
          </div>,
          document.getElementById('something')
        )
      }
    </React.Fragment>
  )
}
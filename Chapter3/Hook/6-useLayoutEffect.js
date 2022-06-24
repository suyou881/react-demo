//useEffect 훅에 입력된 부수효과 함수는
//랜더링 결과가 돔에 반영된 후 비동기로 호출이 된다.
//useLayoutEffect 훅은 거의 비슷하지만 
//부수효과 함수를 동기로 호출한다.
//랜더링 결과가 돔에 반영된 직후에 바로 호출된다.
//그래서 useLayoutEffect 훅의 부수 효과 함수에서 연산을 많이 하면
//브라우저가 먹통이 될 수도 있다.
//특별한 이유가 없다면 useEffect 훅을 사용하는 것이 성능상 이점이 있다.
//대부분의 경우 useEffect를 사용하면 된다.
//그렇다면 언제 useLayouteffect 훅을 사용할까?
//랜더링 직후 돔 요소의 값을 읽어 들이거나 
//조건에 따라서 컴포넌트를 다시 렌더링 하고 싶은 경우

import React, { useState, useLayoutEffect ,useEffect, useRef } from 'react';

export default function App() {
  const [width, setWidth] = useState(200);

  const boxRef=useRef();

  /*useLayoutEffect 가 실행되는 시점!
  리액트가 랜더링을 하고 실제 돔에 반영은 했지만 
  브라우저가 화면을 그리기 전에 동기로 실행이 된다
  그 때 리액트는 500으로 다시 랜더링을 하고 그때서야 브라우저가 화면을 그린다.
  */
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }
    //연산량이 많은 코드를 실행하게 되면 버벅이는 느낌을 받을 수 있다.
    //아래코드는 예시
    //이런 코드는 useEffect 함수를 사용하는 것이 좋다.
    let v=0;
    for (let i=0; i<1000000000; i++){
      v+= i*2+1;
    }
    console.log(v);
  }, [width]);

  //이 코드로 실행하면 500 이상 버튼을 눌렀을 때 깜빡깜빡 거린다.
  //왜냐하면? useEffect 때문에 그렇다. 500보다 큰 값이 들어갈 경우
  //먼저 렌더링이 된 후에 useEffect가 실행이 되면서 500으로 다시 한번
  //랜더링을 하기 때문에 다시 500으로 랜더링을 하는 과정에서 깜빡이는 것
  // useEffect(() => {
  //   if (width > 500) {
  //     setWidth(500);
  //   }
  // }, [width]);
  return (
    <div>
      <div ref={boxRef} style={{ width, height: 100, backgroundColor: 'green' }}>test</div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}

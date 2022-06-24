// import './App.css';
// import User from './User';

// function App() {
//   return (
//     <>
//       <p>실전 리액트</p>
//       {/* <User/> 컴포넌트만 사용할 경우 required 속성값에서 에러 발생한다.*/}
//       {/* 아래 age 100을 입력하면 조건에서 맞지 않기때문에 에러 발생된다. */}
//       <User onChangeTitle={()=>{}} male={true} age={100}/>
//     </>
//   );
// }

// export default App;

//friend
// import React from 'react';
// import FriendPage from './structure/container/FriendPage';

// export default function App(){
//   return (
//     <>
//       <FriendPage/>
//     </>
//   )
// }

//6-1/2 performance 속성값 비교 함수
// import { useState } from "react";
// import MyComponent from "./MyComponent";

// export default function App() {
//   const [value1, setValue1] = useState(0);
//   const [value2, setValue2] = useState(0);
//   return (
//     <div>
//       <p>실전 리액트</p>
//       <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
//       <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
//       <MyComponent value1={value1} value2={value2} />
//     </div>
//   );
// }


//6-2-performance  10.js
import React, { useState } from "react";

export default function App() {
  return <SelectFruit />;
}

function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");
  function addNewFruit() {
    //추가하기를 누르면 추가가 안된다.
    //레퍼런스가 변경되지 않고 있기 때문이다.
    //fruits.push(newFruit);

    //불변객체로 관리를 하면 추가가 된다.
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }
  // ...
  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
      {/* ... */}
    </div>
  );
}

const Select = React.memo(({ options }) => (
  <div>
    {options.map((item, i) => (
      <p key={i}>{item}</p>
    ))}
  </div>
));

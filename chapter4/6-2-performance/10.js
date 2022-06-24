import { useState } from "react";

function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");
  function addNewFruit() {
    //상태값은 아래와 같이 수정하면 안된다.
    //왜냐하면 이 값의 레퍼런스가 변경되지 않았기 때문이다.
    // fruits.push(newFruit);

    //이렇게 set 함수를 통해서 새로운 함수를 만들어줘야 레퍼런스가 바뀐다.
    setFruits([...fruits, newFruit]);

    setNewFruit("");
  }
  // ...
  return (
    <div>
        {/* 만약 Select 컴포넌트에서 리액트 memo를 사용했다면? 
        fruits.push(newFruit); 를 통해서 값이 변경이 됐지만,
        실제 레퍼런스는 변경이 되지 않았기 때문에 이 컴포넌트의 렌더링 결과는
        이전 렌더링 결과를 사용하게 될거다. 
        따라서 새로 추가된 과일이 반영 되지 않을것이다.*/}
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
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

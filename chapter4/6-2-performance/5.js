import { useState, useCallback } from "react";

function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);

  //여기서는 안에서 속성값이나 상태값이 사용되지 않았기 때문에 빈 배열을 입력했다.
  //따라서 이 함수는  한번 생성된 값으로 고정이 된다.
  const onChangeFruit = useCallback((fruit) => {
    setSelectedFruit(fruit);
    sendLog({ type: "fruit change", value: fruit });
  }, []);

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit selected={selectedFruit} onChange={onChangeFruit} />
    </div>
  );
}

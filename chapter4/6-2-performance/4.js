import { useState } from "react";

function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit
        selected={selectedFruit}
        //만약 이벤트 핸들러를 통해 간단하게 처리하는 것으로 끝나지 않고
        //다른 처리도 더 있다고 한다면 setSelectedFruit을 넣어주는것만으로는 해결하기 힘들다.
        //그럴때는 useCallback 훅을 이용해자
        //go to 5
        onChange={(v) => {
          //...
          setSelectedFruit(v);
        }}
      />
      ;
    </div>
  );
}

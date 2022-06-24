import React, { useRef } from "react";

export default function App() {
//아래 Box_List가 동적이라고 가정한다면 useRef()를 사용하는게 힘들다.
//많을지 적을지 모르고, 이전에 말했듯이 훅의 개수나 순서는 일정해야 한다.

//지금까지는 이 ref 객체에 실제 돔의 요소나 컴포넌트의 인스턴스를
//참조하는 용도로 사용했지만 사실 ref 객체에는 원하는 값이면
//어떤 값이든 저장을 할 수 있다.
//const uRef = useRef(123); 초기값을 123이라고 설정해 놓을 수 있고
//u.current=2352; 숫자를 따로 설정할 수도 있다.

  const boxListRef = useRef({}); // ref객체의 초기값을 object로 설정
  function onClick() {
    let maxRight = 0;
    let maxId = "";
    for (const box of BOX_LIST) {
      const ref = boxListRef.current[box.id];
      if (ref) {
        //요소의 사각형 정보를 알 수 있다.
        const rect = ref.getBoundingClientRect();
        if (maxRight < rect.right) {
          maxRight = rect.right;
          maxId = box.id;
        }
      }
    }
    alert(`오른쪽 끝 요소는 ${maxId} 입니다.`);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          height: "100%"
        }}
      >
        {BOX_LIST.map((item) => (
          <div
            key={item.id}
            //박스의 id에 요소를 저장.
            ref={(ref) => (boxListRef.current[item.id] = ref)}
            style={{
              flex: "0 0 auto",
              width: item.width,
              height: 100,
              backgroundColor: "yellow",
              border: "solid 1px red"
            }}
          >{`box_${item.id}`}</div>
        ))}
      </div>
      <button onClick={onClick}>오른쪽 끝 요소는?</button>
    </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 100 },
  { id: 3, width: 80 },
  { id: 4, width: 100 },
  { id: 5, width: 90 },
  { id: 6, width: 60 },
  { id: 7, width: 120 }
];

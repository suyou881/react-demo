import { useMemo, useState } from "react";

function SelectFruit({ selectedFruit, onChange }) {
  const [maxPrice, setMaxPrice] = useState(1000);
  
  //여기서는 maxPrice 라는 상태값을 사용했기 때문에, maxPrice가 변경될 때만 fruits라는 값이 변경된다. 
  const fruits = useMemo(()=>FRUITS.filter((item) => item.price <= maxPrice),[maxPrice])
  // ...
  return (
    <div>
      <Select
      //아래처럼 filter 연산을 하게 되면 또 다시 새로운 배열이 만들어지기 때문에
      //이 값은 렌더링을 할 때마다 매번 새로운 값이 된다.
      //이 때는 useMemo 훅을 이용하면 된다.
      //필요할 때만 fruits 값이 변경되도록 할 수 있다.
      //결론적으로 options도 필요할 때만 변경이 된다. 
    //   options={FRUITS.filter((item) => item.price <= maxPrice)}
        options={fruits}
        selected={selectedFruit}
        onChange={onChange}
      />
      {/* ... */}
    </div>
  );
}

const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 }
];

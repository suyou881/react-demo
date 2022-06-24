import { useState, useEffect } from "react";
import useOnMounted from "./useOnMounted";

//부수효과 함수 안에서 사용된 상태값이나 속성값 또는 그 두 가지 값으로
//계산된 어떤 값이 있을 때 그것을 부수효과 함수 안에서 사용했다면
//항상 그 값은 의존성 배열에 나열해 줘야한다.

//만약 여기서 userId가 불변한다는 확신이 있따면 useEffect를 사용하는 것보다 
//별도의 훅으로 관리하는게 좋다.
//useOnMounted.js
//아래처럼 빈 배열로 입력하는 거 보다 명시적으로 시점을 조절해주는 훅을 만들어 사용하는게 낫다.
export default function Profile({ userId }) {
  const [user, setUser] = useState();
  useOnMounted(()=>fetchUser(userId).then((data) => setUser(data)));
//   useEffect(() => {
//     fetchUser(userId).then((data) => setUser(data));
//   }, [userId]);
  // ...
}

//의존성 배열을 조심해서 사용하자

import { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    //의존성 배열이 없다면 Profile 컴포넌트가 렌더링 될때마다 useEffect가 실행된다.
    //그래서 빈 배열을 입력해서 mount 된 후에 한 번만 호출되도록 할 수도 있다.
    //그러나 이는 userId가 변경되도 새로운 사용자 정보를 가져오지 못하기 때문에
    //옳바른 해결책이 아니다. 그래서 방법은 ? 2번으로 gogo
    //빈배열 안에 userId를 입력해주는게 옳바른 해결책이다...
    fetchUser(userId).then((data) => setUser(data));
  }, []);
  // ...
}

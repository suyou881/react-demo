//서버 사이드 랜더링을 할 때
//마운트가 됐는지 안됐는지 알면 좋다.

import {useState, useEffect} from 'react';

export default function useMounted(){
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    return mounted;
}

/*현업에서 사용할 만한 훅??*/
//로그인된 사용자만 접근할 수 있는 페이지에서
//로그인 되지 않은 사용자는 얼럿을 띄워준다던가 자동으로 로그인 페이지로 보내줄 수 있다.
useBlockIfNotLogin()
//저장되지 않은 정보가 있는데 나가려고 하는경우
useBlockUnsavedChange(desc)
//로그인 유저인 경우에만 useEffect를 사용하려고 할 때
useeffectIfLoginUser(callback,deps)
useLocalStorage(key,initialValue) => [value, setValue];
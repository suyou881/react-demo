import React, {useState, useEffect} from 'react';

export default function Profile({userId}) {
    const [user, setUser] = useState(null);
    const [value, setValue] = useState(0);
    //const value = userId + 10;
    /*사실상 이 함수는 Profile 컴포넌트가 랜더링 될 때마다 새로 생성이 되고 있다.
    그래서 사실상 의존성 변수의 값이 항상 변경 된다고 볼 수 있다.
    이럴때는 useCallback 이라는 훅을 이용해서 메모이제이션 기능을 이용하는 방법이 잇다.
    사실 이 함수는 유저 아이디가 변경될 때만 새로 생성되도록 하는게 좋다.
    function func1(){
        console.log(value);
    }*/
    
    useEffect(()=>{
        console.log(value);
        getUserApi(userId).then(data => setUser(data));
        //[userId]와 같은 것을 의존성 배열이라고 한다.
        //이 배열에 있는 값이 변경될 때만 부수 효과 함수가 실행된다.
        //만약 의존성 배열에 빈 배열을 입력하면
        //부수 효과 함수는 마운트된 이후에 한 번만 호출이 된다.
        //의존성 배열에는 부수 효과에서 사용한 변수를 잘 봐야한다.
        //컴포넌트의 상태값이나 속성값, 또는 이 컴포넌트 내부에서 정의된
        // 지역변수나 지역 함수 같은 것들은
        //모두 의존성 배열에 작성을 해줘야 한다.
        //getUserApi 같은 함수는 외부에 있기 때문에 입력을 하지 않아도 된다.
        //userId는 속성값이기 때문에 입력을 해줘야 한다.
        //setUser 함수는 특별하다.
        //이 함수는 값이 변경되지 않는다는 것이 보장된다.
        //그래서 상태값 변경 함수는 예외적으로 의존성 배열에 입력하지 않아도 된다.
        //위에 value와 같은 지역 변수도 의존성 배열에 입력을 해줘야 한다.
        //지역 함수를 부수 효과 함수 내부에서 사용했다면
        //지역 함수 또한 의존성 배열에 입력을 해줘야 한다.
        //의존성 배열을 꼭 필요한 경우에만 추가해주는 것이 좋다.
        //??? 왜 위에 value 콘솔에 찍는거는 안 나옴???
    }, [userId, value]);
    return (
        <div>
            {!user && <p>사용자 정보를 가져오는 중...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </div>
    );
}

const USER1 = {name: 'mike', age:23};
const USER2 = {name: 'jane', age:31};
function getUserApi(userId){
    return new Promise (res=>{
        setTimeout(()=>{
            res(userId % 2 ? USER1 : USER2);
        },500);
    });
}
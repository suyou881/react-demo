import React, {useState, useEffect} from 'react';

export default function Profile({userId}) {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        getUserApi(userId).then(data => setUser(data));
        //[userId]와 같은 것을 의존성 배열이라고 한다.
        //이 배열에 있는 값이 변경될 때만 부수 효과 함수가 실행된다.
    }, [userId]);
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
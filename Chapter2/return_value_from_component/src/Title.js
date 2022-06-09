import React from 'react';

//객체 비 구조화 문법 이용 ({})
// function Title({title}){
//     console.log('Title render');
//     return <p>{title}</p>;
// }

function Title(props){
    console.log('Title render');
    console.log(props);
    return <p>{props.title}</p>;
}

//React.memo를 사용하면 특정 속성값이 변경될 때만 컴포넌트가 렌더링되게 할 수 있다.
export default React.memo(Title);
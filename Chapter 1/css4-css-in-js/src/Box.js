import React from 'react';
import styled from 'styled-components';

/*
styled-components 에서 styled 라는 객체를 받아 온 다음에
.div 로 스타일 코드를 입력 하고 있다.

const BoxCommon = styled.div`
    height:50px;
    background-color: #aaaaaa;
`;

여기서 사용된 문법은 es6에 추가된 tagged template literals 문법이다.
이것은 그냥   ` height:50px; background-color: #aaaaaa;` 을 
매개변수로 받아서 실행하는 함수가 있다고 생각하면 된다.
위에 코드에서는 div로 이루어진 컴포넌트를 생성한 것이다.

이렇게 만들어진 컴포넌트를 확장해서 다른 컴포넌트를 만들 수 있다.
*/

const BoxCommon = styled.div`
    height:50px;
    background-color: #aaaaaa;
`;
const BoxBig = styled(BoxCommon)`
    width: 200px;
`;
const BoxSmall = styled(BoxCommon)`
    width: 100px;
`;

export default function Box({size}){
    if(size === 'big'){
        return <BoxBig>큰 박스</BoxBig>
    }else{
        return <BoxSmall>작은 박스</BoxSmall>
    }
}
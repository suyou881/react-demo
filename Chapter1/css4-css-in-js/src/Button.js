import React from 'react';
import styled from 'styled-components';

//Box 함수 안쪽에서 return 할 때 속성값을 입력하고 styled를 이용해서 컴포넌트를 만들 때
//그 속성 값을 받아서 동적으로 처리를 할 수 있다.

const ButtonCommon = styled.button`
    width: ${props => (props.isBig ? 100 : 50)}px;
    height: 30px;
    background-color: yellow;
`;

export default function Box({size}) {
    const isBig = size === 'big';
    const label = isBig ? '큰 버튼' : '작은 버튼';
    return <ButtonCommon isBig={isBig}>{label}</ButtonCommon>
}
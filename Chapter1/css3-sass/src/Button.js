import React from 'react';
//import 할 때 객체 형식으로 내보내기 때문에 객체형식으로 받아준다.
import Style from './Button.module.scss';
import cn from 'classnames';

console.log({Style});

export default function Button({size}) {
    //클래스 명을 속성이름으로 입력해주면 된다.
    //className 을 입력할 때 조금 번거롭다.
    //npm i classnames 을 설치하면 조금 간편하게 이용할 수 있다.
    //cn에는 다른 기능도 있다. 아래코드를 변환해보자.
    const isBig = size==='big';
    return(
        <button
            className={cn(Style.button,
                {
                    [Style.big]: isBig,
                    [Style.small]: !isBig
                })}
        >
            {isBig ? '큰 버튼' : '작은 버튼'}
        </button>
    )
    // if(size === 'big'){
        
    //     return <button className={cn(Style.button, Style.big)}>큰 버튼</button>;
    // }else{
    //     return <button className={`${Style.button} ${Style.small}`}>작은 버튼</button>;
    // }
}
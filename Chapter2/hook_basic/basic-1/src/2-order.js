import React, {useState} from 'react';

export default function App(){
    const [count1, setCount1] = usetState(0);
    const [count2, setCount2] = usetState(0);
    
    //여기서는 배치로 적용되는 것이 아니기 때문에 count1이 적용되고 그 다음 count2가 적용된다.
    //배치로 적용이 될 때는 순서 정보가 딱히 필요없지만,
    //배치가 아닌 경우에는 한번 호출될 때마다 랜더링이 된다.
    function onClick(){
        setCount1(count1+1);
        setCount2(count2+1);
    }
    //count1이 먼저 적용이 되기 때문에 아래 수식은 언제나 참이다.
    const result = count1>=count2;
    //......
}
const element = (
    <a key='key1' style={{width:100}} href='http://google.com'>
        click here
    </a>
);

console.log(element);
//콘솔에 출력된 결과가 아래와 같다.
const constoleLogResult={
    //돔 요소이기 때문에 태그를 나타내는 type에 문자열 입력이 가능했다. 그러나 --> 3번으로
    type:'a',
    key: 'key2',
    ref: null,
    props:{
        href:'http://google.com',
        style:{
            width: 100
        },
        children:'click here'
    },
    // ......
}

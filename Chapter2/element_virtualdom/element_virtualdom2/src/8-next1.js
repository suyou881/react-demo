//리액트가 Todo 컴포넌트를 호출한 결과

const elementTree={
    type:'div',
    props:{
        children:[
            {
                //타이틀 컴포넌트가 존재하기 때문에 이 리액트 요소 트리를 실제 돔으로 만들 수는 없다.
                //리택으 요소 트리가 실제 돔으로 만들어지기 위해서는
                //모든 리액트 요소의 타입 속성값이 문자열이어야 한다.
                typd:Title,
                props:{title:'리액트 공부하기'},
                //.....
            },
            {
                type:'p',
                props:{children: '실전 리액트 프로그래밍을 공부한다.'},
                //......
            },
            {
                type: 'p',
                props:{children: '우선순위 높음'},
                //......
            },
            {
                type:'button',
                props:{
                    onClick: function(){
                        // Todo 컴포넌트의 onClick 함수
                    },
                    children: '우선순위 변경',
                },
                //........
            },
            //.........
        ]
    }
};
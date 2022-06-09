const elementTree={
    type:'div',
    props:{
        children:[
            {
                type:'p',
                props:{
                    style:{color: 'blue'},
                    children: '리액트 공부하기'
                },
                //.....
            },
            {
                type:'p',
                props:{children: '실전 리액트 프로그래밍을 공부한다.'},
                //......
            },
            {
                type: 'p',
                //이 부분만 변경된다.
                //따라서 실제 돔에서도 이 부분만 반영이 된다.
                props:{children: '우선순위 낮음'},
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
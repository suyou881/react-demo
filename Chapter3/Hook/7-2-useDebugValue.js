import React from 'react';
import useChangeAppState, {
  STATE_START,
  STATE_RUNNING,
} from './useChangeAppState';

export default function App() {
  const [state, next] = useChangeAppState(true);
  const msg =
    state === STATE_START
      ? '앱 시작'
      : state === STATE_RUNNING
      // ? '앱 실행 중'
      // 버그 심어 놓고 구글에서 리액트 components로 확인해보자 
      //state가 바뀌는 것은 확인이 되지만 직관적이지 않다.
      //여기서   
      // useDebugValue(
      //   state === STATE_START
      //     ? 'start'
      //     : state === STATE_RUNNING
      //     ? 'running'
      //     : 'stop',
      // );
      //7-1 에 있는 useDebugValue 훅을 사용하게 되면
      //디버깅 하는데 도움을 받을 수 있다.
      ? '앱 시작' 
      : '앱 종료';
  return (
    <div>
      <p>{msg}</p>
      <button onClick={next}>next</button>
    </div>
  );
}

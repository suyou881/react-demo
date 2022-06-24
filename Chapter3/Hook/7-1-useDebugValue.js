//커스텀 훅 안에서 useDebugValue를 사용하면 리액트 개발자 도구에
//좀 더 풍부한 정보를 제공해 줄 수 있다.
//디버깅 할 때 좀 더 편하다.

import { useState, useDebugValue } from 'react';

export default function useChangeAppState() {
  const [state, setState] = useState(STATE_START);
  const next = () => setState(state === STATE_STOP ? STATE_START : state + 1);
  // useDebugValue(
  //   state === STATE_START
  //     ? 'start'
  //     : state === STATE_RUNNING
  //     ? 'running'
  //     : 'stop',
  // );
  return [state, next];
}

export const STATE_START = 0;
export const STATE_RUNNING = 1;
export const STATE_STOP = 2;

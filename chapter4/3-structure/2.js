//컴포넌트가 비지니스 로직이나 상태값을 가지고 있으면 재사용하기 힘들다.
//현재의 컴포넌트를 재사용 하기는 힘들다.
//왜냐하면 여러가지 데이터들이 많이 있기 때문. 그래서 분리가 필요하다.
//분리하는 기준?
//비지니스 로직과 상태값의 유무로 컴포넌트를 분리하자.
//재사용이 가능한 컴포넌트와 그렇지 않는 컴포넌트로.

//재사용성이 좋은 컴포넌트란?
//비지니스 로직이 없다.
//상태값이 없다.
//단, 마우스 오버(mouse over)와 같은 UI  효과를 위한 생태값은 제외한다.

import React, { useState } from 'react';
import { getNextFriend } from './data';

export default function App() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }
  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);
    setAgeLimit(value);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <div>
        <select onChange={onChangeOption} value={ageLimit}>
          {AGE_LIMIT_OPTIONS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        세 이하만 보기
      </div>
      <ul>
        {friendsWithAgeLimit.map(friend => (
          <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
        ))}
      </ul>
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

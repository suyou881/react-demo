//cash나 memo가 null이나 undefined가 아니라고 표현을 명확하게 표현
<div>
  {cash != null && <p>{cash}원 보유 중</p>}
  {memo != null && <p>{200 - memo.length}자 입력 가능</p>}
</div>;

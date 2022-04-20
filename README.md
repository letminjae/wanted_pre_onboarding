# 원티드 프리온보딩 사전과제

## `구현 방법`

### Toggle.js
> `useState`, `CSS-in-JS` 사용
- 기본과 상세 두가지의 버튼 on/off 기능이 필요해 useState(true/false)를 이용
- styled-component 라이브러리 사용, CSS에서 삼항연산자를 이용해 transform과 color 이동 애니매이션 구현

<br>

### Tab.js
> `useState`, `CSS-in-JS`, `map()`사용
- `Toggle.js`의 업그레이드 버전. 두가지의 버튼이 아닌 3가지의 버튼이 필요해 useState(index)로 접근해서 이용
- Tab의 메뉴를 Data Array로 만들어 map을 사용. index의 element에 onClick 이벤트 부여.
- onClick 시 true/false 값 감지 => CSS에 삼항연산자 이용, 애니매이션 구현.

<br>

### Slider.js
> `useState`, `CSS-in-JS`, `map()` 사용
- input type = range를 이용해서 바가 움직일 때 마다 state값 변화
- Data Array를 만들어 25% 마다 range가 채워져야 하는 버튼 구현
- range CSS는 커스텀없이 브라우저 range default 값으로 유지한 점 참고부탁드립니다.

<br>

### Input.js
> `useState`, `CSS-in-JS`, `useEffect`, `정규표현식` 사용
- 정규표현식을 사용해서 email 조건에 맞으면 체크 표시 활성화
- useEffect 사용, email value가 업데이트 될 때마다 정규표현식 조건에 맞는지 확인


<br>

### Dropdown.js
> `useState`, `CSS-in-JS`, `map()`, `filter()` 사용
- Dropdown on/off 기능이 필요해 useState(true/false)로 상태관리
- filter() 사용, value 값에 data가 포함되어 있다면 그 value 값만 나오게 검색기능 구현
- 이후 map() 사용, value가 여러개라면 data에 포함하는 모든 검색값 나오게 구현

<br>
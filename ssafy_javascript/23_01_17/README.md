1. 변수 선언시 선언자를 반드시 붙여라
2. 선언자는 총 세 종류가 있다.

var -> (잘)안쓴다.
let -> 안쓴다.
const -> 이걸 써라. 만약 작동 안되면 let 써라.

0 -> number
null -> 개발자가 의도하여 비워놓은것
undefined -> 개발자가 의도치 않게 비워놓은것

const sampleFunc = function () {
  return 1;
} -> 람다

1. 객체 object
2. 함수 function
3. 배열 array

객체 object: key와 value로 이루어진 property의 모음

배열이나 객체를 const로 선언했다 하더라도 값을 바꿀 수 있기 때문에 let을 잘 쓰지 않는다.

== != -> type 달라도 true

=== !== -> type도 같아야 true
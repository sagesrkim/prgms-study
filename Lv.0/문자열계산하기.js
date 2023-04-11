// 문제 설명
// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 연산자는 +, -만 존재합니다.
// 문자열의 시작과 끝에는 공백이 없습니다.
// 0으로 시작하는 숫자는 주어지지 않습니다.
// 잘못된 수식은 주어지지 않습니다.
// 5 ≤ my_string의 길이 ≤ 100
// my_string을 계산한 결과값은 1 이상 100,000 이하입니다.
// my_string의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
// 계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다.
// my_string에는 연산자가 적어도 하나 포함되어 있습니다.
// return type 은 정수형입니다.
// my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.

// 문자로 표현된 자바스크립트 구문을 실행하는 함수인데, MDN에 따르면 이 함수는 보안에 굉장히 취약하기 때문에 사용하는 것을 지양
function solution(my_string) {
  return eval(my_string);
}

// 다른 풀이 - eval 대신 새로운 function을 리턴해주는 것으로도 eval을 구현할 수 있다. 대신 리턴은 문자로, my_string은 변수로 만들어 주어야 제대로 동작한다.
function solution(my_string) {
  return Function(`return ${my_string}`)();
}

// 다른 풀이 -
// 1. arr.unshift => 배열의 맨 앞에 넣어준다.
// 2. +arr.shift() => 배열의 맨 앞에서 뺀 것을 integer
// 3. (arr.shift() === "+" ? 1 : -1) * arr.shift()) => 배열의 맨 앞에서 다시 뺀 것이 +면 1을, -면 -1을 다시 배열의 맨 앞에서 뺀 것에 곱해준다.
// 이항연산자라서 피연산자 2, 연산자 1 총 3개씩 계산
function solution(my_string) {
  const arr = my_string.split(" ").filter((e) => e);
  while (arr.length > 1)
    arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift());
  return arr[0];
}

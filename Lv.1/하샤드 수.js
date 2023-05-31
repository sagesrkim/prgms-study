// 하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

// 하샤드 수란? 하샤드 수(harshad number)는 주어진 진법에서 그 수의 각 자릿수 숫자의 합으로 나누어떨어지는 자연수를 말한다. 인도의 수학자 카프리카가 정의했으며, '기쁨을 준다'는 뜻의 산스크리트어 단어인 harshad에서 유래했다.

function solution(x) {
  // x = 18
  var sum = 0;
  var arr = String(x).split(""); // [1,8]

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]); // 1+8
  }
  return x % sum == 0 ? true : false;
}

// 다른 풀이
function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}

// 숫자 찾기
// 문제 설명
// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < num < 1,000,000
// 0 ≤ k < 10
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

function solution(num, k) {
  var answer = num.toString();
  if (answer.includes(k)) {
    return answer.indexOf(k) + 1;
  } else {
    return -1;
  }
}

// 배열을 문자열로 반환, 조건문을 사용하여 k가 포함되어 있다면 indexOf를 사용하여 인덱스 번호를 찾고 +1을 더한 자리 수를 반환한다. 아니라면 -1을 반환한다.

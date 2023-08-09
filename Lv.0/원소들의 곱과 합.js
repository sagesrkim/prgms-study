// 원소들의 곱과 합
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var sum1 = 1,
    sum2 = 0;
  for (var i of num_list) {
    sum1 *= i;
    sum2 += i;
  }
  return sum1 > sum2 ** 2 ? 0 : 1;
}

// 다른 풀이
function solution(num_list) {
  return Math.pow(
    num_list.reduce((a, b) => a + b),
    2
  ) > num_list.reduce((a, b) => a * b)
    ? 1
    : 0;
}

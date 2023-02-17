// 자릿수 더하기
// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

// 스트링으로 변환하고 문자열 나누기, reduce로 누적값 더하고 숫자로 변환하기
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 다른 사람의 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 길이에 따른 연산
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 20
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
  if (num_list.length >= 11) {
    let res = 0;
    for (let i = 0; i < num_list.length; i++) {
      res += num_list[i];
    }
    return res;
  } else {
    let res = 1;
    for (let i = 0; i < num_list.length; i++) {
      res *= num_list[i];
    }
    return res;
  }
}

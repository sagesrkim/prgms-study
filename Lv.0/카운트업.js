// 카운트 업
// 문제 설명
// 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ start_num ≤ end_num ≤ 50

function solution(start, end) {
  var answer = [];

  for (let i = start; i <= end; i++) {
    answer.push(i);
  }

  return answer;
}

// 다른 풀이
function solution(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((x, idx) => x + idx);
}

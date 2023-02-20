// 세균 증식
// 문제 설명
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10
// 1 ≤ t ≤ 15

function solution(n, t) {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}

// 다른 사람의 풀이 - 비트 연산자(<<)를 사용해 n비트 만큼 왼쪽으로 이동(>>: n비트만큼 오른쪽으로 )
function solution(n, t) {
  return n << t;
}

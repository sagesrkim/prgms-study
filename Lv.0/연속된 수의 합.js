// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  const start = Math.ceil(((2 * total) / num - (num - 1)) / 2);
  let answer = [];

  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }

  return answer;
}

// 시작점과 배열 반복. 우선 연속된 숫자의 개수(num)과 그 숫자들의 총합(total)을 이용하여 첫 번째 숫자를 계산한다. 소수점일 수도 있기 때문에 반올림한다.
// 배열 반복은 for문을 이용하여 첫 숫자부터 시작하여 연속된 숫자를 계산하고 answer 배열에 추가한다. for문은 num 개수만큼 반복하고 이를 반환하면 된다.

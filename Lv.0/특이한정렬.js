// 특이한 정렬
// 문제 설명
// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10,000
// 1 ≤ numlist의 원소 ≤ 10,000
// 1 ≤ numlist의 길이 ≤ 100
// numlist는 중복된 원소를 갖지 않습니다.

// sort함수를 보면 음수를 반환하면 a가 먼저, 양수면 b가 순서가 먼저 되도록 짜여져 있고, b랑 a의 거리가 같은 상황 즉 Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면 ||연산자 뒤가 실행되면서 같은 거리일 경우 큰 수를 먼저 나오도록 한다.
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// 다른 풀이 2
function solution(numlist, n) {
  let result = [];
  result = numlist.sort((a, b) => {
    const [numA, numB] = [Math.abs(a - n), Math.abs(b - n)];
    if (numA === numB) {
      return b - a;
    }
    return numA - numB;
  });
  return result;
}
// 우선 문제를 읽어보면 원소 n을 기준으로 가까운 순서대로 정렬한 배열이면서, 내림차순 정렬입니다. 따라서 const[numA, numB] = [Math.abs(a - n), Math.abs(b - n)]을 통해 각 거리값을 구한 후 만약 numA === numB가 같다면 b - a를 통해 내림차순 정렬로 return합니다. 아니라면 numA - numB를 통해 값을 구합니다.

// sort((a, b) => b - a); 내림차순
// sort((a, b) => a - b); 오름차순

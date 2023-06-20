// 크기가 작은 부분문자열
// 문제 설명
// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// 제한사항
// 1 ≤ p의 길이 ≤ 18
// p의 길이 ≤ t의 길이 ≤ 10,000
// t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.

function solution(t, p) {
  const numberP = Number(p);
  let count = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    const slicedT = t.slice(i, i + p.length);
    const numberT = Number(slicedT);

    if (numberT <= numberP) {
      count += 1;
    }
  }

  return count;
}
// 문자열 t에서는 비교를 위해서 문자열 p의 길이만큼씩 덩어리를 생성해나간다.
// 필요한 부분의 인덱스를 복사해서 새로운 상수에 저장하고,
// 각 원소를 합쳐서 number 타입으로 전환한다.

// 이를 number 타입으로 변환한 p와 비교하여 연산을 진행한다.

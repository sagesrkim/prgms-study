// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

function solution(l, r) {
  var answer = [];
  for (let i = l; i <= r; i++) {
    let arr = String(i);
    //이 배열에 만약 5나 0이 아닌 배열을 들어가 있으며 continue로 넘어가고
    // 아니면 answer에 넣어준다.
    //every() 모든 원소가 조건에 맞는지 검사하는 메서드
    //모든 원소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환합니다.
    if (![...arr].every((x) => x === "5" || x === "0")) continue;
    answer.push(i);
  }
  //만약 그러한 정수가 없다면, -1이 담긴 배열([-1])을 return 합니다.
  return answer.length ? answer : [-1];
}

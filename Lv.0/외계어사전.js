// 외계어 사전
// 문제 설명
// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.
// 제한사항
// spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
// 2 ≤ spell의 크기 ≤ 10
// spell의 원소의 길이는 1입니다.
// 1 ≤ dic의 크기 ≤ 10
// 1 ≤ dic의 원소의 길이 ≤ 10
// spell의 원소를 모두 사용해 단어를 만들어야 합니다.
// spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
// dic과 spell 모두 중복된 원소를 갖지 않습니다.

// every()는 배열이 주어진 조건을 모두 통과하는지를 판단하여 boolean 값을 반환한다.
// 따라서, spell에 있는 모든 원소가 dic의 배열 원소 하나에 포함돼야 true를 반환한다.
// 이어서 filter()는 참인 것만 판별하여 남겨놓기 때문에,
// every() 연산에서 true가 반환된 dic만 남기고 나머지는 제거한다.
// 이렇게 생성된 배열의 길이가 0이라면, 문제 조건과 일치하는 문자가 없으므로 2를 return하고
// 배열의 길이가 1 이상이라면, 문제 조건과 일치하는 것이 있으므로 1을 return한다.
function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

// 다른 풀이 - some, sort 사용하기
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

//다른 풀이
function solution(spell, dic) {
  const sort = (str) =>
    [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join("");
  return dic.find((dic) => sort(dic) === sort(spell.join(""))) ? 1 : 2;
}

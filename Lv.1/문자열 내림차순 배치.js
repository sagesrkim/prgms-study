// 문자열 내림차순으로 배치하기

// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  return s.split("").sort().reverse().join("");
}

// 다른 풀이
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");
}

// 대/소문자들을 ''로 replace하고 배열로 바꾸고 sort로 오름차순 후 다시 reverse하고 join으로 배열의 모든 문자를 합쳤다. 알파벳은 내림차순 할 때 sort((a,b) => b-a) 가 적용되지 않았다. 여기를 참고하면 실제로 obj.sort().reverse()가 효율성 측면에서 같은 기능을 구현하는 하위 두가지 메소드 보다 좋다.

// obj.sort((a, b) => (a > b ? -1 : 1)

// obj.sort((a, b) => b.localeCompare(a) )

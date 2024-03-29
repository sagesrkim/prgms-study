// 한 번만 등장한 문자
// 문제 설명
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 제한사항
// 0 < s의 길이 < 1,000
// s는 소문자로만 이루어져 있습니다.

function solution(s) {
  let ans = [];

  let sArr = s.split("");

  sArr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      ans.push(item);
    }
  });

  return ans.sort().join("");
}

// 다른 풀이
// lastIndexOf: 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다. 일치하는 부분을 찾을 수 없으면 -1을 반환합니다.
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

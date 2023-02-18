// 모음 제거
// 문제 설명
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string) {
  const str = "aeiou";
  let answer = my_string
    .split("")
    .filter((e) => !str.includes(e))
    .join("");

  return answer;
}

// 다른 사람의 풀이 -정규식으로 모음만 제거

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

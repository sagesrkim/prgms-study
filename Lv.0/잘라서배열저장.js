// 잘라서 배열로 저장하기
// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

// splice()가 원본 배열에 영향을 준다는 점을 활용하여 while로 반복문,
// 배열화한 my_str에서 n개 만큼 잘라낸 문자를 join()하여,
// ans 배열에 push()했다.
function solution(my_str, n) {
  let strArr = my_str.split("");

  let answer = [];

  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(""));
  }

  return answer;
}

// 다른 풀이
// 원본 배열이 바뀌지 않는 slice 활용
function solution(my_str, n) {
  let res = [];
  for (let i = 0; i < my_str.length; i += n) res.push(my_str.slice(i, i + n));
  return res;
}

// 정규표현식을 활용한 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

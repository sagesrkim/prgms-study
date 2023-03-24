// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ my_string 안의 자연수 ≤ 1000
// 연속된 수는 하나의 숫자로 간주합니다.
// 000123과 같이 0이 선행하는 경우는 없습니다.
// 문자열에 자연수가 없는 경우 0을 return 해주세요.

function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);

  return nums ? nums.map((num) => +num).reduce((a, c) => a + c, 0) : 0;
}

// 다른 풀이
function solution(my_string) {
  let result = 0;
  for (let i = 0; i < my_string.length; i++) {
    // 이번 반복의 연속되는 숫자를 문자열로 취득
    let thisNum = "";
    while (!Number.isNaN(Number(my_string[i]))) {
      thisNum += my_string[i];
      i++;
    }
    // 문자가 온 경우 취득되었던 숫자를 Number형으로 변환 후 result에 더함
    result += +thisNum;
  }
  return result;
}

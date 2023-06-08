// 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

function solution(phone_number) {
  var answer = "";
  answer =
    phone_number.slice(0, -4).replace(/[0-9]/g, "*") + phone_number.slice(-4);
  return answer;
}

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 다른 풀이
function solution(phone_number) {
  var answer = "";

  // 번호 뒷 4자리 가져오기
  let back = phone_number.substr(-4, 4);
  console.log(back);

  // 번호 뒷 4자리를 제외한 앞부분을 가져오기
  let front = phone_number.substring(0, phone_number.length - 4);
  console.log(front);

  // 뒷 4자리를 제외한 앞부분을 * 문자로 변환해주기
  let result = front.replace(/[0-9]/g, "*");
  console.log(result);

  // * 문자로 변환해 준 부분과 뒷자리를 더해서 값을 구하기
  answer = result + back;

  return answer;
}

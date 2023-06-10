// 수박수박수박수박수박수?
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
  return "수박".repeat(n).substring(0, n);
}

// 다른 풀이
function solution(n) {
  const waterMelon = (n) => "수박".repeat(n).slice(0, n);
}

function waterMelon(n) {
  // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
  return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
}

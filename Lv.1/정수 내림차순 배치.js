// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

// js에서 자동형변환을 사용하면 number+string => string, string*number => number입니다. 예를 들면, 1+"" => "1", "1"*1 => 1 입니다. split은 string에 사용하는 메서드니 기호에 맞게 형변환을 한 것
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}

// 다른 풀이
function solution(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}

function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

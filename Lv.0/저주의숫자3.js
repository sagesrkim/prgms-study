// 저주의 숫자 3
// 문제 설명
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
// 1	1	6	8
// 2	2	7	10
// 3	4	8	11
// 4	5	9	14
// 5	7	10	16
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}

// 다른 풀이
function solution(n) {
  let x3 = 0;
  // n까지 반복
  for (let i = 1; i <= n; i++) {
    // i에 증가에 따른 x3의 증가
    x3++;
    // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
    while (x3.toString().includes("3") || x3 % 3 === 0) {
      x3++;
    }
  }
  return x3;
}

// 다른 풀이 2
function solution(n) {
  // 제한사항에 n이 100까지 라고 비교적 작은 숫자가 적혀있으므로
  // 넉넉하게 3의 배수와 3이 들어간 숫자를 제외하기 위해 200~300 정도 배열을 만들어줍니다.
  // Array.from() 메서드를 사용하면 1부터 200까지 숫자 배열을 쉽게 만들수 있습니다.
  const nums = Array.from({ length: 200 }, (_, i) => i + 1);

  // 만들어진 숫자 배열을 filter() 메서드를 이용하여
  // 3의 배수와 3이 들어간 숫자를 거른 수들의 집합을 만들어줍니다.
  const noThreeNums = nums.filter(
    (m) => m % 3 !== 0 && !m.toString().includes("3")
  );

  // 이제 3의 배수와 3이 들어간 숫자를 제외한 수의 배열이 순서대로 들어있는 배열을
  // n - 1 (배열의 시작은 0이므로) 번째 수가 우리가 원하는 수 입니다.
  return noThreeNums[n - 1];
}

console.log(solution(15)); // 25
console.log(solution(40)); // 76

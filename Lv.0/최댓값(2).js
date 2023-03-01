// 최댓값 만들기 (2)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let max = numbers[0] * numbers[1];

  for (let i = 0; i < numbers.length - 1; i++) {
    const num1 = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const num2 = numbers[j];

      if (max < num1 * num2) {
        max = num1 * num2;
      }
    }
  }

  return max;
}

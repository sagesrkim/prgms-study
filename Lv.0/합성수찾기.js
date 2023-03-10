// 합성수 찾기
// 문제 설명
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
  let arr = new Set();
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) arr.add(i);
    }
  }
  return arr.size;
}

// 다른 풀이

function solution(n) {
  let result = 0;

  // 소수 찾기
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return true;
    }
    return false;
  }

  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) result++;
  }

  return result;
}

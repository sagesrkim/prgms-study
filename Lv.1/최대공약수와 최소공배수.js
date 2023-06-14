// 최대공약수와 최소공배수
// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); //최대공약수
  const lcm = (a, b) => (a * b) / gcd(a, b); // 최소 공배수
  return [gcd(n, m), lcm(n, m)];
}

// 최대 공약수 : 두 수 A와 B의 공통된 약수 중에 가장 큰 정수
// 최소 공배수 : 두 수 A와 B의 공통된 약수 중에 가장 작은 정수

// 3의 약수  ➡️ 1, 2, 3
// 12의 약수 ➡️ 1, 2, 3, 4, 6, 12
// 3, 12의 최대 공약수  ➡️ 3
// 6의 배수  ➡️ 3 , 6, 9 ,12, 15  ...
// 12의 배수 ➡️ 12, 24, 36, 48 ...
// 6, 12의 최소 공배수  ➡️ 12

// 2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b)
// a와 b의 최대공약수는 b와 r의 최대공약수와 같습니다.
// 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고,
// 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수입니다.
// "A > B 일때 A와 B의 최대공약수는 B와 나머지 R의 최대공약수와 같다."

// 1. 큰 수(A)를 작은 수(B)로 나눈다. ( A > B )
// 2. 나누는 수(B)를 나머지(R)로 계속 나눈다.
// 3. 나머지가 0이 나오면 나누는 수가 최대 공약수

// 최소공배수는 두 수를 곱한 후에 최대공약수로 나누면 나옵니다.

// 다른 풀이 - 유클리드 호제법
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

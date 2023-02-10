// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100

// 배열을 큰 수대로 정렬한 다음, 가장 큰 인덱스[0,1]를 곱하면 되지 않을까?
function solution(numbers) {
    return numbers.sort((a,b) => b-a)[0] * numbers.sort((a,b) => b-a)[1]
}


// 다른 사람의 풀이 - 조금 더 깔끔하게
function solution(numbers) {
    numbers.sort((a,b) => b-a);
    return numbers[0] * numbers[1];
}
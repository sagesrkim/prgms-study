// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

function solution(n) {
    let answer = 0;
    for(let i = 0; i <= n; i++){
        if(i % 2 === 0) answer += i;
    } 
    return answer;
}

console.log(10);

// 다른 사람의 풀이
// 

function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}
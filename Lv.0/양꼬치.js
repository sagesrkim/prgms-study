// 문제 설명
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < n < 1,000
// n / 10 ≤ k < 1,000
// 서비스로 받은 음료수는 모두 마십니다.


// 10개당 1개로 받은 서비스를 제외하고 계산하기
function solution(n, k) {
    var answer = 0;
    if ( n >= 10) {
        k -= Math.floor(n/10)
    }
    answer = n * 12000 + k * 2000
    return answer;
}

// 다른 사람의 풀이- 틸드 문법을 활용
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}
// 다른 사람의 풀이 2
function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}
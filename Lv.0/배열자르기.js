// 배열 자르기
// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이


// slice() 함수 : 원래 배열의 상태가 변하지 않는다.
// splice() 함수 : 원래 배열에서 삭제된 요소를 제거한 배열을 반환한다.

// slice(인덱스 시작점(해당 인덱스 포함), 인덱스 종료지점(해당 인덱스 불포함))
// var alphabet = ['a', 'b', 'c', 'd', 'e'];
// var arr = alphabet.slice(2, 4); // ['c', 'd'] 
// //배열의 인덱스 2인 c부터 인덱스 4를 포함하지 않으므로 인덱스 3까지 잘라냄


// splice(인덱스 시작점(해당 인덱스 포함), 제거할 요소의 갯수)
// var alphabet = ['a', 'b', 'c', 'd', 'e'];
// alphabet.splice(2, 1, 'z'); //["a", "b", "z", "d", "e"] //인덱스 2에서부터 1개 값 제거 후, 'z' 값 추가


function solution(numbers, num1, num2) {  
    return numbers.splice(num1,num2 +1);
}

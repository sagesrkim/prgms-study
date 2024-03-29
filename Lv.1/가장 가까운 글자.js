// 가장 가까운 같은 글자
// 문제 설명
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.

// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// 제한사항
// 1 ≤ s의 길이 ≤ 10,000
// s은 영어 소문자로만 이루어져 있습니다.

function solution(s) {
  let stack = [];
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      ans.push(-1);
      stack.push(s[i]);
      continue;
    }

    if (stack.includes(s[i])) {
      ans.push(stack.length - stack.lastIndexOf(s[i]));
      stack.push(s[i]);
      continue;
    }
  }

  return ans;
}

// 스택 안에 문자열을 하나씩 넣는 for문 활용
// 스택 안에 현재 넣으려는 문자열이 존재하지 않는다면 -1을 ans에 넣는다.
// 그리고 스택에 그 문자열을 넣어준다.
// 그 뒤에 있는 코드가 실행되지 않도록 continue 처리도 해준다.

// 현재 넣으려는 문자열이 존재한다면
// 스택의 길이 - 스택 가장 위쪽에 있는 해당 문자열의 인덱스를 ans에 넣는다.
// 그리고 스택에 문자열을 넣어준다.

// 스택 가장 위쪽에 있는 해당 문자열의 인덱스는 가장 가까운 문자열을 찾기 위함이고,
// 그 것이 현재 넣으려는 문자열과 얼마나 떨어져 있는지를 보기 위해서 스택의 길이에서 인덱스를 뺀다.

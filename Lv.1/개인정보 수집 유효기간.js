// 문제 설명
// 고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보 n개가 있습니다. 약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.

// 예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.
// 당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.

// 모든 달은 28일까지 있다고 가정합니다.

// 다음은 오늘 날짜가 2022.05.19일 때의 예시입니다.

// 약관 종류	유효기간
// A	6 달
// B	12 달
// C	3 달
// 번호	개인정보 수집 일자	약관 종류
// 1	2021.05.02	A
// 2	2021.07.01	B
// 3	2022.02.19	C
// 4	2022.02.20	C
// 첫 번째 개인정보는 A약관에 의해 2021년 11월 1일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.
// 두 번째 개인정보는 B약관에 의해 2022년 6월 28일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.
// 세 번째 개인정보는 C약관에 의해 2022년 5월 18일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.
// 네 번째 개인정보는 C약관에 의해 2022년 5월 19일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.
// 따라서 파기해야 할 개인정보 번호는 [1, 3]입니다.

// 오늘 날짜를 의미하는 문자열 today, 약관의 유효기간을 담은 1차원 문자열 배열 terms와 수집된 개인정보의 정보를 담은 1차원 문자열 배열 privacies가 매개변수로 주어집니다. 이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

function solution(today, terms, privacies) {
  const [cYear, cMonth, cDay] = today.split(".").map((v) => +v);
  const termsMap = {};
  terms.forEach((v) => {
    const [term, limit] = v.split(" ");
    termsMap[term] = +limit;
  });

  const answer = [];

  privacies.forEach((v, i) => {
    const [date, term] = v.split(" ");
    const [year, month, day] = date.split(".").map((v) => +v);

    let limitYear = year + Math.floor(termsMap[term] / 12),
      limitMonth = month + (termsMap[term] % 12),
      limitDay = day - 1;

    if (limitMonth > 12) {
      limitYear += 1;
      limitMonth %= 12;
    }

    if (limitDay === 0) {
      limitDay = 28;
      limitMonth -= 1;
    }

    if (cYear > limitYear) {
      answer.push(i + 1);
    } else if (cYear === limitYear && cMonth > limitMonth) {
      answer.push(i + 1);
    } else if (
      cYear === limitYear &&
      cMonth === limitMonth &&
      cDay > limitDay
    ) {
      answer.push(i + 1);
    }
  });
  return answer;
}
// 만약 termsMap[term]이 100이고 month가 8일 때, limitYear에 year + Math.floor((month + termsMap[term]) / 12)로, limitMonth는 (month + termsMap[term]) % 12로 계산했다. 그러면 전자에는 9를 더하고, 후자는 0이 된다.

// limitYear와 limitMonth는 termsMap[term]으로만 계산하면 된다. termsMap[term] / 12는 유효 연수, termsMap[term] % 12는 유효 개월 수다.

//  limitMonth가 12를 넘는 경우는 한 해가 넘어가기 때문에 limitYear에 1을 더하고, limitMonth는 다시 12로 나눈 나머지를 재할당했다

//limitDay는 현재보다 하루 전까지이므로 day - 1을 했는데, 값이 0인 경우 전달 마지막일이어서 limitMonth에서 1을 제하고 계산한다.

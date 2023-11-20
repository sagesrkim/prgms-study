// 문제 설명
// 지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.

// ["방향 거리", "방향 거리" … ]
// 예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.

// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
// 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
// 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
// 공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.
// 공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때, 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(park, routes) {
  // 이전 위치
  let prevPos = [0, 0];

  // 2차원 배열 지도
  const map = [];
  park.forEach((row, idx) => {
    const sPos = row.indexOf("S");
    if (sPos >= 0) {
      prevPos = [idx, sPos];
    }
    map.push([...row]);
  });

  // 사용자 방향 딕셔너리
  const dict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  routes.forEach((route, routeIdx) => {
    // 방향과 거리 입력받기
    const [pos, range] = route.split(" ");
    let curPos = [...prevPos];
    let applyFlag = true;

    // 거리만큼 반복
    for (let i = 0; i < range; i++) {
      curPos[0] += dict[pos][0];
      curPos[1] += dict[pos][1];

      // 장애물 판별 || 공원을 벗어났는지 판별
      if (
        curPos[0] > map.length - 1 ||
        curPos[0] < 0 ||
        curPos[1] > map[0].length - 1 ||
        curPos[1] < 0
      ) {
        applyFlag = false;
        break;
      }

      if (map[curPos[0]][curPos[1]] === "X") {
        applyFlag = false;
        break;
      }
    }

    if (applyFlag) prevPos = curPos;
  });

  // 문제가 없다면 이 변수에 반영되도록
  return prevPos;
}

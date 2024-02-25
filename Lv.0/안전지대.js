// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

function solution(board) {
  const dx = [1, 0, -1, 0, 1, 1, -1, -1];
  const dy = [0, 1, 0, -1, 1, -1, 1, -1];

  const n = board.length;

  // 초기 안대지대를 모든 칸으로 답을 설정해둡니다.
  let answer = n * n;

  // 지뢰가 있는 곳을 확인해주기 위한 셋팅입니다.
  const ch = [];

  // 이중 for문을 이용해 모든 칸을 확인해줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 지뢰를 발견했다면 ch에 그 칸의 위치를넣어줍니다.
        ch.push([i, j]);
        // 그리고 안전지대에서 -1을 해줍니다.
        answer--;
      }
    }
  }

  // 예시 3번 처럼 모든 지대가 지뢰지역이면 0을 반환합니다.
  if (answer === 0) return 0;

  // 위험지역 확인을 위해 지뢰의 위치를 forEach()메서드를 통해 확인해줍니다.
  ch.forEach((w) => {
    // 위, 아래, 좌, 우, 대각선 총 8곳의 위치를 확인합니다.
    for (let k = 0; k < 8; k++) {
      // 위에 설정해둔 dx와 dy를 활용합니다.
      // ex) 만안 w가 [0, 0]일 경우
      // w[0] + dx[0] = nx = 1
      // w[1] + dy[0] = ny = 0
      // 즉, 현재 위치의 board[nx][ny]는 현재 위치의 우측을 확인하는 것 입니다.
      const nx = w[0] + dx[k];
      const ny = w[1] + dy[k];

      // 만약 nx ny의 위치가 지대의 안쪽이고
      // 이미 확인한 위험지역이나 지뢰의 위치가 아니라면
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
        // 현재 위치를 위험지대로 설정하고
        board[nx][ny] = 1;
        // 안전지대 갯수에서 -1을 해줍니다.
        answer--;
      }
    }
  });

  // 최종 확인 결과를 반환해줍니다.
  return answer;
}

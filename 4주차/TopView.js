const width = 10;
const height = 10;

// 캐릭터 초기 위치 (스테이지 중앙)
let playerX = Math.floor(width / 2);
let playerY = Math.floor(height / 2);

// 스테이지 그리기 함수
function drawStage() {
  console.clear();
  for (let y = 0; y < height; y++) {
    let line = '';
    for (let x = 0; x < width; x++) {
      if (x === playerX && y === playerY) {
        line += 'P';  // 캐릭터 위치
      } else {
        if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
          line += '#';  // 테두리
        } else {
          line += ' ';  // 빈 공간
        }
      }
    }
    process.stdout.write(line + '\n');
  }
}

// 캐릭터 움직임 함수
function movePlayer(direction) {
  switch (direction) {
    case 'w':
      if (playerY > 1) playerY--;  // 위로 이동
      break;
    case 's':
      if (playerY < height - 2) playerY++;  // 아래로 이동
      break;
    case 'a':
      if (playerX > 1) playerX--;  // 왼쪽으로 이동
      break;
    case 'd':
      if (playerX < width - 2) playerX++;  // 오른쪽으로 이동
      break;
  }
}

// 입력 처리
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === '\u0003') {  // Ctrl + C 입력 시 종료
    process.exit();
  }
  movePlayer(key);
  drawStage();
});

// 초기 스테이지 출력
drawStage();
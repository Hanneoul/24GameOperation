//모듈 호출
const keypress = require('keypress');

// 입력을 비동기적으로 감지하도록 설정
keypress(process.stdin);

// 메인 화면 //
function displayMenu(){
    console.log("######################");
    console.log("#    1. 게임시작     #");
    console.log("#    2. 제작자정보   #");
    console.log("#    3. 종료         #");
    console.log("######################");
}
// 선택지 입력 
function mainSelect() {
    process.stdout.write('입력해주시와요 > ');
    process.stdin.on('keypress', (ch, key) => {
        if (key) {
            if (key.name === '1') {
                console.log('미완성 게임입니다. 메인화면으로 돌아갑니다.');
                playGame()
            }
            else if (key.name === '2'){
                console.log('뿌하하하하 비밀');
                rl.question('아무키나 입력하세요.', () => {
                    playGame();
                });
            }
            else if (key.name === 'q' || key.name === '3') {
                console.log('종료');
                process.exit();
            }
            else {
                console.log('다시 입력하세요.');
                mainSelect();
            }
        }
    });
}

// 재귀함수 활용을 위한 함수 //
function playGame(){
    displayMenu();
    mainSelect();
}

playGame();


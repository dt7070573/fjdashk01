



const nameInput = document.getElementById('name-input');
const addBtn = document.getElementById('add-btn');
const nameList = document.getElementById('name-list');
const partyCount = document.getElementById('party-count');
const startBtn = document.getElementById('start-btn');
const setupArea = document.getElementById('setup-area');
const gameArea = document.getElementById('game-area');
const exploreBtn = document.getElementById('explore-btn');
const logWindow = document.getElementById('log-window');
const floorText = document.getElementById('current-floor');
const strInput = document.getElementById('str-input');
const intInput = document.getElementById('int-input');
const dexInput = document.getElementById('dex-input');

let characters = []; //캐릭터들을 담을 바구니
let currentFloor = 1; //시작 층수

//1. 캐릭터 추가 버튼 클릭
addBtn.addEventListener('click', function() {
    if (characters.length < 5 && nameInput.value.trim() !== "") {

        const s = Number(strInput.value);
        const i = Number(intInput.value);
        const d = Number(dexInput.value);
        characters.push({
            name: nameInput.value,
            str: s,
            int: i,
            dex: d
        }); //배열에 이름 추가

        nameInput.value = "";
        strInput.value = "";
        intInput.value = "";
        dexInput.value = "";

        const li = document.createElement('li');
        li.textContent = nameInput.value;
        nameList.appendChild(li);

        nameInput.value = ""; //입력창 비우기
        partyCount.textContent = `참가 인원: ${characters.length}/5명`;

        if (characters.length > 0) startBtn.disabled = false;
    }
});

//2. 게임 시작 버튼 클릭
startBtn.addEventListener('click', function(){
    setupArea.style.display = "none";
    gameArea.style.display = "block";
    addLog("일행이 1층 로비에서 눈을 떴습니다. 저택은 고요합니다.");
});

//3. 진행 버튼 클릭 (층수 이동 및 랜덤 사건)
exploreBtn.addEventListener('click', function(){
    if (currentFloor >= 6) return; //6층이면 종료

    const luckyChar = characters[Math.floor(Math.random() * characters.length)];
    const dice = Math.random();

    if (dice > 0.4) {
        currentFloor++;
        floorText.textContent = `현재 위치: ${currentFloor}층`;
        addLog(`${luckyChar.name}(이)가 길을 찾아내어 ${currentFloor}층으로 올라갔습니다!`);

        if (currentFloor === 6) {
            addLog("축하합니다! 일행이 옥상에 도달하여 저택을 탈출했습니다!")
            exploreBtn.disabled = true;
        }
    } else {
        addLog(`${luckyChar.name}(이)가 삐걱거리는 바닥을 밟아 깜짝 놀랐습니다. 잠시 마음을 추스르며 이 층에 지체합니다.`);
    }
});

function addLog(message) {
    const p = document.createElement('p');
    p.textContent = message;
    logWindow.appendChild(p);
    logWindow.scrollTop = logWindow.scrollHeight;
}

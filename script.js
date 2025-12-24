



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

const manshionMap = {
    1: {
        name: "저택 로비",
        object: "대리석 조각상",
        require: "int",
        successMsg: "조각상의 팔목에 꽂혀있던 열쇠를 찾아 돌려 빼냈습니다.",
        failMsg: "조각된 이목구비에 홀려 이곳이 어디인지도 잠시 잊었습니다."
    },

    2: {
        name: "식당",
        object: "만찬 테이블",
        require: "str",
        successMsg: "돌처럼 단단한 칠면조 배를 가르자 힌트가 적힌 쪽지가 나왔습니다.",
        failMsg: "가죽보다 질긴 껍질을 가르기에 힘이 역부족입니다."
    },

    3: {
        name: "무도회장",
        object: "샹들리에",
        require: "dex",
        successMsg: "벽의 화려한 장식을 타고 올라가 샹들리에 사이 꽂힌 열쇠를 찾았습니다.",
        failMsg: "다리가 후들거려 벽을 탈 엄두조차 나지 않습니다."
    },

    4: {
        name: "침실",
        object: "침대",
        require: "dex",
        successMsg: "침대 아래에 .",
        failMsg: "."
    },

    5: {
        name: "서재",
        object: "책장 사이 튀어나온 책",
        require: "int",
        successMsg: "낡은 책에 적힌 암호를 풀어 비밀 통로를 찾았습니다.",
        failMsg: "아무리 머리를 싸매도 암호를 풀 수가 없습니다."
    },

    6:{
        name: "다락방",
        object: "낡고 삐걱이는 다락문",
        require: "str",
        successMsg: "벽에 붙어버린듯한 문을 힘으로 뜯어냈습니다.",
        failMsg: "아무리 근육을 써도 문은 꿈쩍도 하지 않습니다."
    }
}



let characters = []; //캐릭터들을 담을 바구니
let currentFloor = 1; //시작 층수

//1. 캐릭터 추가 버튼 클릭
addBtn.addEventListener('click', function() {
    if (characters.length < 5 && nameInput.value.trim() !== "") {


    const charObj = {
        name: nameInput.value,
        str: Number(strInput.value),
        int: Number(intInput.value),
        dex: Number(dexInput.value),
    };

    characters.push(charObj);

    const charInfoLi = document.createElement('li');
    charInfoLi.textContent = `${charObj.name} (💪${charObj.str} 🧠${charObj.int} ⚡${charObj.dex})`;
    nameList.appendChild(charInfoLi);

    partyCount.textContent = `참가 인원: ${characters.length}/5명`;

    nameInput.value = "";
    strInput.value = "";
    intInput.value = "";
    dexInput.value = "";

    if (characters.length > 0) startBtn.disabled = false;
    }
});

//2. 게임 시작 버튼 클릭
startBtn.addEventListener('click', function(){
    setupArea.style.display = "none";
    gameArea.style.display = "block";

    const room = mansionMap[currentFloor];
    floorText.textContent = `현재 위치: ${currentFloor}층 ${room.name}`;
    addLog(`당신들은 저택에서 눈을 뜹니다. 주변을 둘러보면 이곳이 저택의 1층, ${room.name}이라는 것을 깨닫습니다.`)

});


//3. 진행 버튼 클릭 (층수 이동 및 랜덤 사건)
exploreBtn.addEventListener('click', function(){
    const room = mansionMap[currentFloor];
    const luckyChar = characters[Math.floor(Math.random() * characters.length)];

    addLog(`[${room.name}]에 진입했습니다. [${room.object}]를 발견했습니다!`);
    addLog(`${luckyChar.name}(이)가 나섭니다... (필요 능력: ${room.require})`);

    const charStat = luckyChar[room.require];

    if (charStat >= 5) {
        addLog(`성공: ${room.successMsg}`);
        currentFloor++;
        if (currentFloor <= 6) {
            floorText.textContent = `현재 위치: ${currentFloor}층 ${room.name}`;
        }
    } else {
        addLog(`실패: ${room.failMsg} 이 방에서 더 수색해야 합니다.`);
    }
});

function addLog(message) {
    const p = document.createElement('p');
    p.textContent = message;
    logWindow.appendChild(p);
    logWindow.scrollTop = logWindow.scrollHeight;
}

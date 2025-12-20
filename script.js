const btn = document.getElementById('action-btn');
const logWindow = document.getElementById('log-window');

const character = {
    name: "모험가",
    strength: 5,
    intel: 8
};

btn.addEventListener('click', function(){
    const newLog = document.createElement('p');

    const dice = Math.random() * 10;

    // 반드시 ` (백틱)으로 시작하고 끝내야 합니다.
    if (character.intel > dice) {
        newLog.textContent = `[지능 성공] 캐릭터가 암호를 풀었습니다! (주사위: ${dice.toFixed(1)})`;
        newLog.style.color = "blue";
    } else {
        newLog.textContent = `[지능 실패] 암호가 너무 복잡합니다. (주사위: ${dice.toFixed(1)})`;
        newLog.style.color = "red";
    }

    logWindow.appendChild(newLog);
    logWindow.scrollTop = logWindow.scrollHeight;
});

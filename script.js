const btn = document.getElementById('action-btn');
const resetBtn = document.getElementById('reset-btn');
const logWindow = document.getElementById('log-window');

const inputName = document.getElementById('input-name');
const inputStr = document.getElementById('input-str');
const inputIntl = document.getElementById('input-intl');

let isLocked = false;

btn.addEventListener('click', function(){
    if (isLocked === false) {
        inputName.disabled = true;
        inputStr.disabled = true;
        inputIntl.disabled = true;

        resetBtn.style.display = "inline";

        isLocked = true;

        const startLog = document.createElement('p');
        startLog.textContent = `[${inputName.value}] 캐릭터가 생성되었습니다! (힘:${inputStr.value}, 지능:${inputIntl.value})`;
        startLog.style.fontWeight = "bold";
        logWindow.appendChild(startLog);
    }

    const newLog = document.createElement('p');
    const dice = Math.random() * 10;
    const myStr = Number(inputStr.value);
    const myIntl = Number(inputIntl.value);

    if (Math.random() > 0.5) {
        if (myIntl > dice) {
            newLog.textContent = `[지능 성공] ${inputName.value}(이)가 암호를 풀었습니다! (주사위: ${dice.toFixed(1)})`;
            newLog.style.color = "blue";
        } else {
            newLog.textContent = `[지능 실패] ${inputName.value}(은)는 머리가 아픕니다... (주사위: ${dice.toFixed(1)})`;
            newLog.style.color = "red";
        } 
    } else {
        if (myStr > dice) {
            newLog.textContent = `[힘 성공] ${inputName.value}(이)가 문을 부쉈습니다! (주사위: ${dice.toFixed(1)})`;
            newLog.style.color = "darkgreen";
        } else {
            newLog.textContent = `[힘 실패] ${inputName.value}(은)는 손이 미끄러집니다... (주사위: ${dice.toFixed(1)})`;
            newLog.style.color = "orange";
        } 
    }

    logWindow.appendChild(newLog);
    logWindow.scrollTop = logWindow.scrollHeight;

});

resetBtn.addEventListener('click', function() {
    isLocked = false;
    inputName.disabled = false;
    inputStr.disabled = false;
    inputIntl.disabled = false;

    resetBtn.style.display = "none";

    const resetLog = document.createElement('p');
    resetLog.textContent = "--------------------- 새 캐릭터를 설정하세요 ---------------------";
    logWindow.appendChild(resetLog);
    logWindow.scrollTop = logWindow.scrollHeight;
});

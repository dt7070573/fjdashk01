const btn = document.getElementById('action-btn');
const logWindow = document.getElementById('log-window');

btn.addEventListener('click', function(){
    const newLog = document.createElement('p');

    const dice = Math.random();

    if (dice > 0.5){
        newLog.textContent = "성공! 캐릭터가 문틈을 발견하고 살짝 열었습니다.";
        newLog.style.color = "blue";
    } else {
        newLog.textContent = "실패... 문이 꽉 잠겨있어 꿈쩍도 하지 않습니다.";
        newLog.style.color = "red";
    }

    logWindow.appendChild(newLog);

    logWindow.scrollTop = logWindow.scrollHeight;
});

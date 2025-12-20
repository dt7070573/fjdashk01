const btn = document.getElementById('action-btn');
const logWindow = document.getElementById('log-window');

btn.addEventListener('click', function(){
    const newLog = document.createElement('p');
    newLog.textContent = "캐릭터가 문을 흔들었지만 열리지 않았습니다."

    logWindow.appendChild(newLog);
});

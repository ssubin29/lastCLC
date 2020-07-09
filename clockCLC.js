const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");

function getTime(){//시간을 불러오는 함수
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth();
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${years}-${months+1 < 10 ? `0${months+1}` :months+1}-${days < 10 ? `0${days}` : days} ${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }${' 방문해주셔서 감사합니다'}`;
}   //만약 seconds가 10보다 작으면 ? 0${seconds} 아니라면 :seconds

function init() { 
    getTime();
    setInterval(getTime,1000);
}//setInterval(함수,밀리세컨) 초마다 함수실행

init();

const dateContainer=document.querySelector(".js-date");
const dateTitle=dateContainer.querySelector("h1");

function getDate(){
    const date2 = new Date();
    const years = date2.getFullYear();
    const months = date2.getMonth();
    const days = date2.getDate();
    dateTitle.innerText = `${years}-${months < 10 ? `0${months}` :months}-${days < 10 ? `0${days}` : days}`;
}   //만약 seconds가 10보다 작으면 ? 0${seconds} 아니라면 :seconds
                                                                       
function init() { 
    getDate();
    setInterval(getDate,1000);
}//setInterval(함수,밀리세컨) 초마다 함수실행

init();
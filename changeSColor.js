var c1=document.querySelectorAll('.color1');
var c2=document.querySelectorAll('.color2');
var c3=document.querySelectorAll('.color3');
var c4=document.querySelectorAll('.color4');
var c5=document.querySelectorAll('.color5');

const springC=['#EDEeEf','#ECDFDF','#DBC7C9','#E4D5B9','#B89A8A','#73726C'];
const summerC=['#E3EAF3','#BADCF6','#A4CAED','dodgerblue','royalblue','#D5544B'];
const autumnC=['#D2D6D7','#777A88','#464653','#582B3E','#BA455B','#CDBCB1'];
const winterC=['#F2E3EA','#EACAD5','#708098','#9AB4D4','#B9CDE3','#DCE3EF'];

const date = new Date();
const months = date.getMonth();
switch (months) {
    case 3||4||5:
        theC=springC;
        break;
    case 6||7||8:
        theC=summerC;
        break;
    case 9||10||11:
        theC=autumnC;
        break;
    case 12||1||2:
        theC=winterC;
        break;
}



function colorSelectedC(theC) {
    document.querySelector('body').style.backgroundColor=theC[0];
    document.querySelector('.navi').style.backgroundColor=theC[1];
    document.querySelector('.movieTitle').style.color=theC[4];
    document.querySelector('.movieInfo').style.color=theC[2];
    document.querySelector('.star').style.color=theC[3];
    document.querySelector('header').style.color=theC[6];
    document.querySelector('.js-clock').style.color=theC[4];

}

colorSelectedC(theC);

function spSelect() {
    theC=springC;
    colorSelectedC(theC);
    return theC;
}
function suSelect() {
    theC=summerC;
    colorSelectedC(theC);
    return theC;
}
function auSelect() {
    theC=autumnC;
    colorSelectedC(theC);
    return theC;
}
function wiSelect() {
    theC=winterC;
    colorSelectedC(theC);
    return theC;
}

/*querySelectorAll()은 주어진 CSS 선택자와 일치하는 모든 요소를 반환한다. 이때, 반환 타입은 리스트 타입이다. 따라서 인덱스를 통해 조작*/


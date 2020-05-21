var main = document.getElementById(`main`);
var main1 = document.getElementById(`main1`);

/****************** creat button ****************/
var button = document.createElement(`button`);
button.onclick = btn1click;
button.className = "btn";
button.innerHTML = "1";
button.type = "button";
button.value = "1";
button.id = "btn1";
main.appendChild(button);

var button1 = document.createElement(`button`);
button1.onclick = btn2click;
button1.className = "btn";
button1.innerHTML = "2";
button1.type = "button";
button1.value = "2";
button1.id = "btn2";
main.appendChild(button1);

var button2 = document.createElement(`button`);
button2.onclick = btn3click;
button2.className = "btn";
button2.innerHTML = "3";
button2.type = "button";
button2.value = "3";
button2.id = "btn3";
main.appendChild(button2);

var button3 = document.createElement(`button`);
button3.onclick = btn4click;
button3.className = "btn";
button3.innerHTML = "4";
button3.type = "button";
button3.value = "4";
button3.id = "btn4";
main.appendChild(button3);

var button4 = document.createElement(`button`);
button4.onclick = btn5click;
button4.className = "btn btn-light";
button4.innerHTML = "5";
button4.type = "button";
button4.value = "5";
button4.id = "btn5";
main.appendChild(button4);

var button5 = document.createElement(`button`);
button5.onclick = btn6click;
button5.className = "btn";
button5.innerHTML = "6";
button5.type = "button";
button5.value = "6";
button5.id = "btn6";
main.appendChild(button5);

var button6 = document.createElement(`button`);
button6.onclick = btn7click;
button6.className = "btn";
button6.innerHTML = "7";
button6.type = "button";
button6.value = "7";
button6.id = "btn7";
main.appendChild(button6);

var button7 = document.createElement(`button`);
button7.onclick = btn8click;
button7.className = "btn";
button7.innerHTML = "8";
button7.type = "button";
button7.value = "8";
button7.id = "btn8";
main.appendChild(button7);

var button8 = document.createElement(`button`);
button8.onclick = btn9click;
button8.className = "btn";
button8.innerHTML = "";
button8.type = "button";
button8.value = "";
button8.id = "btn9";
main.appendChild(button8);

var btnrnd = document.createElement(`button`);
btnrnd.onclick = rndnum;
btnrnd.className = "btn";
btnrnd.innerHTML = "Start";
btnrnd.type = "button";
btnrnd.id = "btn10";
main.appendChild(btnrnd);

var txttime = document.createElement(`input`);
txttime.value="00:00";
txttime.id = "time"
main.appendChild(txttime);

var again = document.createElement(`button`);
again.onclick = reset;
again.className = "btn";
again.innerHTML = "Refresh";
again.type = "button";
again.id = "btn11";
main.appendChild(again);
/**************** check position button *****************/
function checkbtn(b1, b2) {
    if (b2.innerHTML === "") {
        b2.innerHTML = b1.innerHTML;
        b1.innerHTML = "";
    }
}
function btn1click() {
    checkbtn(btn1, btn2);
    checkbtn(btn1, btn4);
    winner();
}
function btn2click() {
    checkbtn(btn2, btn1);
    checkbtn(btn2, btn3);
    checkbtn(btn2, btn5);
    winner();
}
function btn3click() {
    checkbtn(btn3, btn2);
    checkbtn(btn3, btn6);
    winner();
}
function btn4click() {
    checkbtn(btn4, btn1);
    checkbtn(btn4, btn5);
    checkbtn(btn4, btn7);
    winner();
}
function btn5click() {
    checkbtn(btn5, btn2);
    checkbtn(btn5, btn4);
    checkbtn(btn5, btn6);
    checkbtn(btn5, btn8);
    winner();
}
function btn6click() {
    checkbtn(btn6, btn3);
    checkbtn(btn6, btn5);
    checkbtn(btn6, btn9);
    winner();
}
function btn7click() {
    checkbtn(btn7, btn4);
    checkbtn(btn7, btn8);
    winner();
}
function btn8click() {
    checkbtn(btn8, btn7);
    checkbtn(btn8, btn5);
    checkbtn(btn8, btn9);
    winner();
}
function btn9click() {
    checkbtn(btn9, btn8);
    checkbtn(btn9, btn6);
    winner();
}

function winner() {
    if (btn1.innerHTML == 1 && btn2.innerHTML == 2 && btn3.innerHTML == 3 && btn4.innerHTML == 4 && btn5.innerHTML == 5 && btn6.innerHTML == 6 && btn7.innerHTML == 7 && btn8.innerHTML == 8 && btn9.innerHTML == '') {
        alert("ยินดีด้วยคุณชนะแล้วใช้เวลาไป " + txttime.value + " นาที");
    }
}
/**************Random Number***************/
function rndnum() {
    var btnnum = new Array();
    var btntotal = 9;
    var bi = new Array();
    var tmp;
    var rnd;
    var eq = new Array();

    timerVar = setTimeout("setTimer()", 1000);

    for (i = 1; i <= btntotal; i++) {
        btnnum[i] = document.getElementById(`btn` + i).innerHTML;
        bi[i] = i;
    }

    for (j in bi) {
        rnd = Math.floor((Math.random() * btntotal) + 1);
        tmp = bi[j];
        bi[j] = bi[rnd];
        bi[rnd] = tmp;
    }

    for (i = 1; i <= btntotal; i++) {
        eq[i] = btnnum[bi[i]];
    }

    for (i = 1; i <= btntotal; i++) {
        document.getElementById(`btn` + i).innerHTML = eq[i];
    }

}
/******************Time***********************/
var count = 0;
var s = 0;
var m = 0;
function setTimer() {
    clearTimeout(timerVar);
    count += 1;
    var item = document.getElementById("time");
    item.value = "0" + m + ":" + s + count;
    if (count >= 9) {
        count = 0;
        s += 1;
    }
    if (s >= 6) {
        s = 0;
        m += 1;
    }
    if (count >= 10) {
        item.value = "0" + m + ":" + count;
    }
    if (m > 9) {
        item.value = m + ":" + s + count;
    }
    timerVar = setTimeout("setTimer()", 1000);
}
/******************refresh page***********************/
function reset(){
    location.reload();
}

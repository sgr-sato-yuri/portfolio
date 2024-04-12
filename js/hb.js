//Hit & Blow
const ten = [0,1,2,3,4,5,6,7,8,9];

var your_xxx = document.getElementById("xxx");
var your_xx = document.getElementById("xx");
var your_x = document.getElementById("x");

var xxx;
var xx;
var x;

var hit = 0;
var blow = 0;
var ent = 0;

var answerG = "aaa";

var hist = document.getElementById("history");

const entbtn = document.getElementById("ent");
const clrbtn = document.getElementById("clear");

entbtn.disabled = true;
clrbtn.disabled = true;


function rand(array) {
    return array.slice().sort(() => Math.random() - 0.5);
}

function resetans() {
    entbtn.disabled = false;
    clrbtn.disabled = false;
    var shuffle = rand(ten);
    xxx = shuffle[0];
    xx = shuffle[1];
    x = shuffle[2];
    let answer = String(xxx) + String(xx) + String(x);
    answerG = answer;
}



function getnum(num) {
    if(your_xxx === ""){
        your_xxx = num;
        your_xxx.value = num;
        document.getElementById(num).style.opacity = 0.5;
    }
    return
    if(your_xxx === ""){
        console.log(`case1:${num}`);
        your_xxx = num;
        document.getElementById("xxx").value = num;
        document.getElementById(num).style.opacity = 0.5;
    }else if(your_xx === ""){
        if(your_xxx === num){//同じ数字を選択した時
            console.log(`case2:${num}`);
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xxx").value = "";
            your_xxx = "";
        }else if(your_xx === num){
            console.log(`case3:${num}`);
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xx").value = "";
            your_xx = "";
        }else{
            console.log(`case4:${num}`);
            your_xx = num;
            document.getElementById("xx").value = num; 
            document.getElementById(num).style.opacity = 0.5;
        }
    }else if(your_x === ""){
        if(your_xxx === num){//同じ数字を選択した時
            console.log(`case5:${num}`);
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xxx").value = "";
            your_xxx = "";
        }else if(your_xx === num){
            console.log(`case6:${num}`);
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xx").value = "";
            your_xx = "";
        }else{
            console.log(`case7:${num}`);
            your_x = num;
            document.getElementById("x").value = num; 
            document.getElementById(num).style.opacity = 0.5;
        }
    }else{
        if(your_xxx === num){//同じ数字を選択した時
            console.log(`case8:${num}`);
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xxx").value = "";
            your_xxx = "";
        }else if(your_xx === num){
            console.log(`case9:${num}`);
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xx").value = "";
            your_xx = "";
        }else{
            console.log(`case10:${num}`);
            document.getElementById(num).style.opacity = 1;
            document.getElementById("x").value = "";
            your_x = "";
        }
    }
}

function judge() {
    if(your_x !== ""){
        xxx = answerG.slice(0,1);
        xx = answerG.slice(1,2);
        x = answerG.slice(2,3);

        your_xxx == xxx ? hit = hit + 1 : "";
        your_xx == xx ? hit = hit + 1 : "";
        your_x == x ? hit = hit + 1 : "";

        your_xxx == xx || your_xxx == x?blow = blow + 1:"";
        your_xx == xxx || your_xx == x?blow = blow + 1:"";
        your_x == xxx || your_x == xx?blow = blow + 1:"";
        ent = ent + 1;
        console.log(ent)

        history();
        if (ent === 5) {
            document.getElementById("result").textContent = "GAME OVER...";

            your_xxx.readonly = false;
            your_xx.readonly = false;
            your_x.readonly = false;
            your_xxx.textContent = xxx;
            your_xx.textContent = xx;
            your_x.textContent = x;
            your_xxx.readonly = true;
            your_xx.readonly = true;
            your_x.readonly = true;        
        }
    }else{
        alert("error");
    }    
}

function history() { 
    hist.rows[ent].cells[0].textContent = "" + your_xxx + your_xx + your_x;
    hist.rows[ent].cells[1].textContent = hit;
    hist.rows[ent].cells[2].textContent = blow;
    hit == 3 ? document.getElementById("result").textContent = "CONGRATULATION!": "";

    hit = 0;
    blow = 0;
}

function clearanswer() {
    document.getElementById("xxx").value = "";
    document.getElementById("xx").value = "";
    document.getElementById("x").value = "";
    your_xxx = "";
    your_xx = "";
    your_x = "";
    var i = 0
    while (i < 10) {
        document.getElementById(i).style.opacity = 1;
        i = i + 1;
    }
}
function resetall() {
    clearanswer();
    document.getElementById("result").textContent = "GAME START!";
    while(0<ent){
        hist.rows[ent].cells[0].textContent = "";
        hist.rows[ent].cells[1].textContent = "";
        hist.rows[ent].cells[2].textContent = "";
        ent = ent-1;
    }
    let answer = resetans();
}

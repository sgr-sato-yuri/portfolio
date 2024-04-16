//Hit & Blow
const ten = [0,1,2,3,4,5,6,7,8,9];

const your_xxx = document.getElementById("xxx");
const your_xx = document.getElementById("xx");
const your_x = document.getElementById("x");

var xxx;
var xx;
var x;

var hit = 0;
var blow = 0;
var ent = 0;

var answerG = "aaa";

const hist = document.getElementById("history");

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

function setnum(form,num){
    console.log("setnum");
    form.value = num;
    document.getElementById(num).style.opacity = 0.5;
};
function samenum(form,num){
    console.log("samenum");
    form.value = "";
    document.getElementById(num).style.opacity = 1;
};

function getnum(num) {
    if(your_xxx.value == ""){
        if(your_xx.value == num){
            samenum(your_xx, num);
        }else if(your_x.value == num){
            samenum(your_x, num);
        }else{
            setnum(your_xxx, num);
        }
    }else if(your_xx.value == ""){
        if(your_xxx.value == num){
            samenum(your_xxx, num);
        }else if(your_xx.value == num){
            samenum(your_xx, num);
        }else{
            setnum(your_xx, num);
        }
    }else if(your_x.value == ""){
        if(your_xxx.value == num){
            samenum(your_xxx, num);
        }else if(your_xx.value == num){
            samenum(your_xx, num);
        }else{
            setnum(your_x, num);
        }
    }else if(your_xxx.value == num){
        samenum(your_xxx, num);
    }else if(your_xx == num){
        samenum(your_xx, num);
    }else if(your_x == num){
        samenum(your_x, num);
    };
}

function history() { 
    hist.rows[ent].cells[0].textContent = "" + your_xxx.value + your_xx.value + your_x.value;
    hist.rows[ent].cells[1].textContent = hit;
    hist.rows[ent].cells[2].textContent = blow;
    hit == 3 ? document.getElementById("result").textContent = "CONGRATULATION!":"";
    your_xxx.style.fontWeight = "bold";
    your_xx.style.fontWeight = "bold";
    your_x.style.fontWeight = "bold";

    hit = 0;
    blow = 0;
}

function judge() {
    if(your_xxx !== "" || your_xx !== "" || your_x.value !== ""){
        xxx = answerG.slice(0,1);
        xx = answerG.slice(1,2);
        x = answerG.slice(2,3);

        your_xxx.value == xxx ? hit = hit + 1 : "";
        your_xx.value == xx ? hit = hit + 1 : "";
        your_x.value == x ? hit = hit + 1 : "";

        your_xxx.value == xx || your_xxx.value == x?blow = blow + 1:"";
        your_xx.value == xxx || your_xx.value == x?blow = blow + 1:"";
        your_x.value == xxx || your_x.value == xx?blow = blow + 1:"";
        ent = ent + 1;

        history();
        clearanswer();
        if (ent === 5) {
            document.getElementById("result").textContent = "GAME OVER...";

            your_xxx.style.fontWeight = "bold";
            your_xx.style.fontWeight = "bold";
            your_x.style.fontWeight = "bold";
            your_xxx.value = xxx;
            your_xx.value = xx;
            your_x.value = x;
        }
    }else{
        alert("error");
    }    
}

function clearanswer() {
    your_xxx.value = "";
    your_xx.value = "";
    your_x.value = "";
    var i = 0
    while (i < 10) {
        document.getElementById(i).style.opacity = 1;
        i = i + 1;
    }
}
function resetall() {
    clearanswer();
    your_xxx.style.fontWeight = "normal";
    your_xx.style.fontWeight = "normal";
    your_x.style.fontWeight = "normal";
    document.getElementById("result").textContent = "GAME START!";
    while(0<ent){
        hist.rows[ent].cells[0].textContent = "";
        hist.rows[ent].cells[1].textContent = "";
        hist.rows[ent].cells[2].textContent = "";
        ent = ent-1;
    }
    let answer = resetans();
}

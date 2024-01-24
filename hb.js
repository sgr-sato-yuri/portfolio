//Hit & Blow
const ten = [0,1,2,3,4,5,6,7,8,9]

function rand(array) {
    array.sort(()=> Math.random() - 0.5);
}

function resetans() {
    const shuffle = rand(ten)
    let xxx = shuffle[0]
    let xx = shuffle[1]
    let x = shuffle[2]
    let answer = String(xxx) + String(xx) + String(x)
    return answer
}


var your_xxx = document.getElementById("xxx").value;
var your_xx = document.getElementById("xx").value;
var your_x = document.getElementById("x").value;

var hit = 0
var blow = 0
var ent = 0

var hist = document.getElementById("history")

function getnum(num) {
    if(your_xxx == ""){
        document.getElementById("xxx").value = num;
        your_xxx = num;
        document.getElementById(num).style.opacity = 0.5;
    }else if(your_xx == ""){
        if(num == your_xxx){
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xxx").value = "";
            your_xxx = ""
        }else{
        document.getElementById("xx").value = num; 
        your_xx = num;
        document.getElementById(num).style.opacity = 0.5;
        }
    }else if(your_x == ""){
        if(num == your_xx){
            document.getElementById(num).style.opacity = 1;
            document.getElementById("xx").value = "";
            your_xx = ""
        }else{
        document.getElementById("x").value = num; 
        your_x = num;
        document.getElementById(num).style.opacity = 0.5;
        }
    }
}

function judge() {
    if(your_x !== ""){
        your_xxx == xxx ? hit = hit + 1 : "";
        your_xx == xx ? hit = hit + 1 : "";
        your_x == x ? hit = hit + 1 : "";

        your_xxx == xx || your_xxx == x?blow = blow + 1:"";
        your_xx == xxx || your_xx == x?blow = blow + 1:"";
        your_x == xxx || your_x == xx?blow = blow + 1:"";
        ent = ent + 1;

        history();
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
        i = i + 1
    }
}
function resetall() {
    clearanswer();
    document.getElementById("result").textContent = "";
    console.log(ent)
    while(0<ent){
        hist.rows[ent].cells[0].textContent = "";
        hist.rows[ent].cells[1].textContent = "";
        hist.rows[ent].cells[2].textContent = "";
        ent = ent-1
    }
}

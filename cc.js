//カラーコード変換
function cc(){
    //入力された数値の代入
    const incode = document.getElementById("code").value;
    //substr(開始,字数)でコード分割し10進数に変換
    var exred = parseInt(incode.substr(0,2),16);
    var exgreen = parseInt(incode.substr(2,2),16);
    var exblue = parseInt(incode.substr(4,2),16);
    console.log(exred);
    //変換した数値の代入
    document.getElementById("red").value = exred;
    //空のとき0を設定
    if (isNaN(exred)) {
        exred = 0;
    }
    document.getElementById("green").value = exgreen;
    if (isNaN(exgreen)) {
        exgreen = 0;
    }
    document.getElementById("blue").value = exblue;    
    if (isNaN(exblue)) {
        exblue = 0;
    }
    //背景色の変更
    var changecode = ["rgb(",exred,",",exgreen,",",exblue,")"];
    var result = changecode.join("");
    document.forms["colorcode"].style.backgroundColor = result;
}

const meu = document.getElementById("testbtn");
meu.addEventListener("click",formreset,);

function formreset(){
    document.getElementById("code").value = "";
    document.getElementById("red").value = "";
    document.getElementById("green").value = "";
    document.getElementById("blue").value = "";
    document.forms["colorcode"].style.backgroundColor = "#4d484a";
}

function convrgb(){
    //数値の代入
    const inred = document.getElementById("red").value;
    const ingreen = document.getElementById("green").value;
    const inblue =document.getElementById("blue").value;
    //=value().d2h(16進数に)
    const exred = (inred === "") ? "00" : parseInt(inred).toString(16).padStart(2, '0');
    const exgreen = (ingreen === "") ? "00" : parseInt(ingreen).toString(16).padStart(2, '0');
    const exblue = (inblue === "") ? "00" : parseInt(inblue).toString(16).padStart(2, '0');
    const excode = exred.concat(exgreen,exblue);
    document.getElementById("code").value = excode;
    var result = "#"+excode;
    document.forms["colorcode"].style.backgroundColor = result;
}


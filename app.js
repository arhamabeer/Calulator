function getNum(num){
    var res = document.getElementById("input");
    res.value += num;
}

function clearRes(){
    var res = document.getElementById("input");
    res.value = "";
}

function resultCal(){
    var res = document.getElementById("input");
    res.value = eval(res.value);
}
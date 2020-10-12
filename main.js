var pi  = 'п';
var i =0;
function getvalue(num) {
    let a = document.forms[0]["textview"];
    a.value += num;
}
function get_symbyl(){
    let a = document.forms[0]["textview"];
    a.value='п';
}
function getopcode(opt) {
    let a = document.forms[0]["textview"];
    if (a.value != "") {
        if (opt == "s") {
            a.value += "**2";
        }else if(opt=='1/x'){
            a.value = '1/'+a.value;
        }else if(opt=='fac'){
            a.value+= 'fac(';
            i+=1;
        }
        else {
            a.value += opt;
        }

    }
    else if (opt == "(" || opt == ")") {
        a.value += opt;
    }
    else if (opt == '.') {
        a.value += "0.";
    }else if(opt=='ss'){
        a.value+= 'Math.sqrt(';
        i=1;
    }
    else if(opt=='fac'){
        a.value+= 'fac(';
        i+=1;
    }

}
function zero() {
    let a = document.forms[0]["textview"];
    if (a.value != "") {
        a.value += "0";
    }
}
function equal() {
    let a = document.forms[0]["result"];
    let b =document.forms[0]["textview"];
    let c = b.value.replace(pi,'3.14');
    a.value = c;
    if(i=>1){
        b.value+=')';
    }
    var temp = eval(document.forms[0]["textview"].value);
    if (temp == "Infinity") {
        a.value = "Hа ноль нельзя делить";
    }
    else if (document.forms[0]["textview"].value == '') {
        a.value = "Введите выражение";
    }
    else {
        a.value = temp;
        let table = document.getElementsByTagName("table")[0];
        if (table.rows.length >= 3) {
            table.deleteRow(0);
        }
        let trow = table.insertRow(table.rows.length);
        let cel0 = trow.insertCell(0);
        let cel1 = trow.insertCell(1);
        let cel2 = trow.insertCell(2);
        cel0.innerHTML = document.forms[0]["textview"].value;
        cel1.innerHTML = "=";
        cel2.innerHTML = temp;
        clean();
    }
}
function clean() {
    let a = document.forms[0]["textview"];
    a.value = '';
    let b = document.forms[0]["result"];
    b.value = '';
}
function back() {
    let a = document.forms[0]["textview"];
    a.value = document.forms[0]["textview"].value.substring(0, document.forms[0]["textview"].value.length - 1);
    let b = document.forms[0]["result"];
    b.value = '';
}
function sinus(x) {
    let a = document.forms[0]["textview"];
    a.value = Math.sin(x);
}
function fac(x){
    let res = 1;
    while(x>1){
        res*=x;
        x-=1;
    }
    return res;
}

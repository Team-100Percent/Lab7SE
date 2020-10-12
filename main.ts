
function getvalue(num:number){
    let a:any = document.forms[0]["textview"];
    a.value+=num;
}
function getopcode(opt:string){
    let a:any = document.forms[0]["textview"];

    if(a.value!=""){
        if(opt=="s"){
            a.value+="**2";
        }
        else {
            a.value+=opt;
        }

    }else if(opt=="(" || opt==")"){
        a.value+=opt;
    }
    else if(opt=='.'){
        a.value+="0.";

    }

}
function zero(){
    let a:any = document.forms[0]["textview"];
    if(a.value!=""){
        a.value+="0";
    }
}
function equal():any{
    let a:any = document.forms[0]["result"];
    let temp:any = eval(document.forms[0]["textview"].value);

    if(temp=="Infinity"){
        a.value = "Hа ноль нельзя делить";
    }else if(document.forms[0]["textview"].value==''){
        a.value ="Введите выражение";

    }
    else{

        a.value = temp;
        let table:any =document.getElementsByTagName("table")[0];
        if(table.rows.length>=3){
            table.deleteRow(0);
        }
        let trow:any = table.insertRow(table.rows.length);
        let cel0:any = trow.insertCell(0);
        let cel1:any = trow.insertCell(1);
        let cel2 :any= trow.insertCell(2);
        cel0.innerHTML = document.forms[0]["textview"].value;
        cel1.innerHTML = "=";
        cel2.innerHTML= temp;
        clean();
    }

}
function clean(){
    let a:any = document.forms[0]["textview"];
    a.value='';
    let b:any = document.forms[0]["result"];
    b.value='';
}
function back(){
    let a:any = document.forms[0]["textview"];
    a.value= document.forms[0]["textview"].value.substring(0,document.forms[0]["textview"].value.length-1);
    let b:any = document.forms[0]["result"];
    b.value='';
}
function sinus(x:number){
    let a:any = document.forms[0]["textview"];
    a.value = Math.sin(x);


}

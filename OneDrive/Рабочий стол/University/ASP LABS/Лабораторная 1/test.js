let el = 0;
let del = 0;
let a = "WELCOME!";
alert(a);
alert("ПРАВИЛА ИГРЫ! \n ИГРА МОНЕТКА! ПОБЕЖДАЕТ ТОТ КТО НАБЕРЁТ БОЛЬШЕ ОЧКОВ! \n УЧАСТНИК 1 ПОЛУЧАЕТ БАЛЛЫ ЗА НЕЧЕТНЫЕ ЧИСЛА! \n УЧАТСНИК 2 ПОЛУЧАЕТ БАЛЛЫ ЗА ЧЕТНЫЕ ЧИСЛА!");
alert("More information tell to Autor");
alert("ПРАВА ЗАЩИЩЕНЫ! 2020 ГОД");
function Start(){
	document.getElementById("coin").textContent = 0;
	document.getElementById("Score1").textContent = 0;
	document.getElementById("Score2").textContent = 0;
	window.location.reload();
}
function Push(){
	document.getElementById("coin").textContent = parseInt(10*Math.random());
}
function Stop(){
	if(document.getElementById("coin").textContent == 1 || document.getElementById("coin").textContent == 3 || document.getElementById("coin").textContent == 5 || document.getElementById("coin").textContent == 7 || document.getElementById("coin").textContent == 9){
		Score1.textContent = parseInt(el++);
		alert("Очко получает игрок №1");
		
	}
	
	else{
		Score2.textContent = parseInt(del++);
		alert("Очко получает игрок №2");
	}
	if(el == 10){
		alert("Игра окончена! Победил ИГРОК 1!");
		document.getElementById("Score1").textContent = 0;
		window.location.reload();	
	
		
	}		
	else if(del == 10){
		alert("Игра окончена! Победил ИГРОК 2");
		document.getElementById("Score2").textContent = 0;
		window.location.reload();
	}
	
}
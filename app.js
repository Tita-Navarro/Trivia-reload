function clickLoginButton(){
	if (userName.value) {
		localStorage.setItem("username", document.getElementById('userName').value);
		name =localStorage.getItem("username");
    }
    else {
		alert('No se ha ingresado un nombre');
		return false;
	}
	 location.replace('trivia1.html'); 
}

document.getElementById('nameLabel').innerHTML = name;

function cat01screen(){
	document.getElementById('greeting').style.display ='none';
	document.getElementById('categories').style.display = 'none' ;
	document.getElementById('cat01screen').style.display = 'block' ;
}

let scoreCat01 = 0;

function addScoreCat01(){ //imprime respuestas0101 y suma al score

	scoreCat01++;
	let scoreStr = scoreCat01.toString()
	document.getElementById('scoreLabel0103').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0102').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0101').innerHTML = scoreStr +' ';
}

function answer0101() { //imprime respuestas0101 y NO SUMA al score
	document.getElementById('question0101').style.display = 'none'; //oculta pregunta0101
	document.getElementById('answer0101').style.display = 'block'; //trae respuesta0101
}

function question0102(){
	document.getElementById('question0101').style.display = 'none'; //oculta pregunta0101
	document.getElementById('answer0101').style.display = 'none'; //oculta respuesta0101
	document.getElementById('question0102').style.display = 'block'; //trae pregunta0102
}

function answer0102(){
	document.getElementById('question0102').style.display = 'none'; //oculta pregunta 0102
	document.getElementById('answer0102').style.display = 'block'; //trae respuesta0102
}

function question0103(){
	document.getElementById('question0102').style.display = 'none'; //oculta pregunta0102
	document.getElementById('answer0102').style.display = 'none'; //oculta respuesta0102
	document.getElementById('question0103').style.display = 'block'; //trae pregunta0103
}

function answer0103(){
	document.getElementById('question0103').style.display = 'none'; //oculta pregunta0103
	document.getElementById('answer0103').style.display = 'block'; //trae respuesta0103
}

function printScoreCat01(){
	
	if (scoreCat01 ===3){
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('wellDoneScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat01 ===2){
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('enoughScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat01 ===1){
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('keepGoing').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else {
		document.getElementById('cat01screen').style.display ='none';
		document.getElementById('notGood').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
		
}

function playAgain(){
	location.reload(true);
	document.getElementById('wellDoneScore').style.display ='none';
	document.getElementById('categories').style.display ='block';
  }

  function restart(){
  	location.replace('index.html').reload(true);
	document.getElementById('wellDoneScore').style.display ='none';
	document.getElementById('categories').style.display ='block';
  }
function exitGame(){
	document.getElementById('nameLabel2').innerHTML = name;
	document.getElementById('logo-container').style.display = 'block';
	document.getElementById('goodBye').style.display = 'block';
	document.getElementById('finalButtons').style.display = 'none';
	document.getElementById('wellDoneScore').style.display = 'none';
	document.getElementById('enoughScore').style.display = 'none';
	document.getElementById('keepGoing').style.display = 'none';
	document.getElementById('notGood').style.display = 'none';

}

function cat02screen(){
	document.getElementById('greeting').style.display ='none';
	document.getElementById('categories').style.display = 'none' ;
	document.getElementById('cat02screen').style.display = 'block' ;
}

let scoreCat02 = 0;

function addScoreCat02(){ //imprime respuestas0101 y suma al score

	scoreCat02++;
	let scoreStr = scoreCat02.toString()
	document.getElementById('scoreLabel0103').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0102').innerHTML = scoreStr +' ';
	document.getElementById('scoreLabel0101').innerHTML = scoreStr +' ';
}

function answer0201() { 
	document.getElementById('question0201').style.display = 'none'; 
	document.getElementById('answer0201').style.display = 'block'; 
}

function question0202(){
	document.getElementById('question0201').style.display = 'none';
	document.getElementById('answer0201').style.display = 'none'; 
	document.getElementById('question0202').style.display = 'block'; 
}

function answer0202(){
	document.getElementById('question0202').style.display = 'none'; 
	document.getElementById('answer0202').style.display = 'block'; 
}

function question0203(){		
	document.getElementById('question0202').style.display = 'none'; 
	document.getElementById('answer0202').style.display = 'none'; 
	document.getElementById('question0203').style.display = 'block'; 
}

function answer0203(){
	document.getElementById('question0203').style.display = 'none'; 
	document.getElementById('answer0203').style.display = 'block'; 
}

function printScoreCat02(){
	
	if (scoreCat02 ===3){
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('wellDoneScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat02 ===2){
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('enoughScore').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else if (scoreCat02 ===1){
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('keepGoing').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
	else {
		document.getElementById('cat02screen').style.display ='none';
		document.getElementById('notGood').style.display ='block';
		document.getElementById('logo-container').style.display ='none';
		document.getElementById('finalButtons').style.display = 'block';
	}
		
}


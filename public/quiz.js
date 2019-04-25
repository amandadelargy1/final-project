"use strict";

var currentQuestion = -1;
var score = 0;


window.onload = function () {
	document.getElementById("container").style.display = "none";
	let button = document.createElement("button");
	button.innerHTML = "Next Question";
	document.getElementById("next").appendChild(button);
	document.getElementById("next").style.display = "none";
	document.getElementById("takequiz").onclick = displayQuiz;


}

function displayQuiz() {
	document.getElementById("message").innerHTML = "";
	document.getElementById("input").innerHTML = "";
	document.getElementById("images").innerHTML = "";
	document.getElementById("container").style.display = "block";
	document.getElementById("next").style.display = "block";

	
	container.style.height = "330px";
	container.style.width = "1000px";
	container.style.margin = "auto";
	container.style.background = "rgba(255, 255, 255, 0.5)";
	container.style.padding = "20px";
	container.style.border = "1px solid #013571";


	document.getElementById("title").innerHTML = "Quiz";

	var json = JSON.parse(JSON.stringify(questions));
	currentQuestion += 1;

	document.getElementById("question").innerHTML = json[currentQuestion]["question"];
	document.getElementById("opt1").innerHTML = json[currentQuestion]["option1"];
	document.getElementById("opt2").innerHTML = json[currentQuestion]["option2"];
	document.getElementById("opt3").innerHTML = json[currentQuestion]["option3"];
	document.getElementById("opt4").innerHTML = json[currentQuestion]["option4"];

	document.getElementById("next").onclick = loadNextQuestion;
}


function loadNextQuestion() {
	var json = JSON.parse(JSON.stringify(questions));
	var selectedAnswer = document.querySelector("input[type=radio]:checked");
	if(!selectedAnswer){
		alert("Please select an answer");
	 	return;
	 }
	let answer = selectedAnswer.value;
	if(json[currentQuestion]["answer"] == answer) {
		score += 1;
	}
	
	selectedAnswer.checked = false;
	if (currentQuestion == json.length - 1) {
		document.getElementById("container").style.display = "none";
		document.getElementById("next").style.display = "none";
	 	document.getElementById("numCorrect").innerHTML += "You got " + score + " out of 18 questions correct!";
	 	let p = document.createElement("p");
	 	p.innerHTML = "Good Work!";
	 	document.getElementById("numCorrect").appendChild(p);
	 }
	displayQuiz();
}


			




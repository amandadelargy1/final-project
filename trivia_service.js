


const express = require("express");
const app = express();

const fs = require("fs");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", 
				"Origin, X-Requested-With, Content-Type, Accept");
 	next(); 
 });

app.use(express.static('public'));

app.post('/', jsonParser, function (req, res) { 
res.header("Access-Control-Allow-Origin", "*"); 
	let results = req.body.results;
 	console.log(results);

 	fs.writeFile("answers.txt", code, function(err) {
		if(err) {
			console.log(err);
			res.status(400);
		}
		console.log("The file was saved!");
		res.send("Success!");
	}) });

app.get('/', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	let params = req.query;
	let subject = params.category;
	let json = quiz_Category(subject);
	res.send(JSON.stringify(json));

})

app.listen(3000);


function quiz_Category(subject) {
	let json = {};
	let questions = [];

	let file = fs.readFileSync("categories.txt", "utf8");
	let lines = file.split("\n");
	for (let i = 0; i < lines.length; i++) {
		let contents = lines[i].split(",");
		if (contents[0] == subject) {
			let question = {};
			question["q"] = contents[1];
			question["option1"] = contents[2];
			question["option2"] = contents[3];
			question["option3"] = contents[4];
			question["option4"] = contents[5];
			question["answer"] = contents[6];
			questions.push(question);
		}
	}
	json["questions"] = questions;
	if(questions.length == 0) {
		res.status(410);
	}
	return json;
}

	



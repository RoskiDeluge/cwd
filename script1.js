
//Console.log prints to the console
4 + 3;

if (4+3 === 7) {
    console.log("You're smart!");
}

//Functions

function sayHello() {
    console.log("Hello");
}

sayHello(); 

//Anonymous function
var sayBye = function() {
	console.log("Bye");
}

sayBye();

//Arguments (WET version)

function sing() {
	console.log("AHHHHHHH");
	console.log("TEEEEEE");
}

sing();

function sing2() {
	console.log("Laa dee daa");
}

sing2();

//Arguments (DRY version), for extensible functions.

function sing(song) {
	console.log(song);
}

sing("Laaa dee daa");
sing("Helloooooo");
sing(" backstreet's back alright");

function multiply (a, b) {
	return a * b;
}

function multiply2 (a, b) {
	if (a > 10 || b > 10) {
		return "That's too hard";
	} else {
		return a*b;
	}
}

// alert(multiply(3,4));
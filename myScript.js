function changeParagraph() {
	document.getElementById("first_name").innerHTML = randomFirstName();
}


function randomFirstName(){
	//create multiple arrays of name parts
	//select several random name parts

	let wordBeginning = ["Ac", "Rn", "Bl"];
	let beginning = wordBeginning[Math.floor(Math.random() * wordBeginning.length)];

	let wordEnd = ["rd", "ft", "ue"];
	let end = wordEnd[Math.floor(Math.random() * wordEnd.length)];

	//combine all name parts into a single string
	name = beginning + end;
	return name;
} 
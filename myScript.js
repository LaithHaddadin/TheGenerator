function changeParagraph() {
	document.getElementById("first_name").innerHTML = randomFirstName();
}


function randomFirstName(){
	//create multiple arrays of name parts
	//select several random name parts


	
	let wordletterA = ["Alexander", "Asher", "Ann", "Andrew", "Abigale"];
	let letterA = wordletterA[Math.floor(Math.random() * wordletterA.length)];



	let wordletterB = ["Bella", "Ben", "Bethany", "Brody", "Bruce"];
	let letterB = wordletterB[Math.floor(Math.random() * wordletterB.length)];



	let wordletterC = ["Carter", "Carson", "Chase", "Charlotte", "Carol", "Caroline", "Clara"];
	let letterC = wordletterC[Math.floor(Math.random() * wordletterC.length)];



	let wordletterM = ["Mia", "Madelyn", "Maria", "Mackenzie", "Miles", "Matteo", "Max", "Maddox", "Mathew"];
	let letterM = wordletterM[Math.floor(Math.random() * wordletterM.length)];


	//combine all name parts into a single string

	let firstname =[["Alexander", "Asher", "Ann", "Andrew", "Abigale"], ["Bella", "Ben", "Bethany", "Brody", "Bruce"], ["Carter", "Carson", "Chase", "Charlotte", "Carol", "Caroline", "Clara"], ["Mia", "Madelyn", "Maria", "Mackenzie", "Miles", "Matteo", "Max", "Maddox", "Mathew"]];
	let name = firstname[Math.floor(Math.random() * firstname.length)]   [[Math.floor(Math.random() * firstname.length)]];
	
	//arr[i][j]
	return name;
} 
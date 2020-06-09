//Tylor Menegay 2/19/2020 WDD221 
//Two different kinds of arrays
let colorArray = new Array(); //new empty array with no elements

//add elements

colorArray[0] = "Red";
colorArray[1] = "Blue";
colorArray[2] = "Green";
colorArray[3] = "Orange";
colorArray[4] = "Scarlett";
colorArray[5] = "Grey";

//print the elements of the array
//Initialize a counter and then loop through the array to print each element to the document window.
let counter1 = 0;

document.write("<h1>Elements of My Colors Array</h1>");

for (counter1 = 0;
		counter1<colorArray.length;
		counter1++)
{
		document.write(colorArray[counter1] + "<br>");}

let gameArray = new Array(); //new array

//add elements

gameArray[0] = "Crusader Kings 2";
gameArray[1] = "Total War: Medeival 2";
gameArray[2] = "NCAA Football 14";
gameArray[3] = "Star Wars Battlefront 2";
gameArray[4] = "Call of Duty Modern Warfare 2";
gameArray[5] = "Elder Scrolls: Skyrim";
gameArray[6] = "Mount & Blade: Warbanad";
gameArray[7] = "Civilization 5";

//print the elements and initialize the counter
let counter2 = 0; 

document.write("<h1>Elements of My Video Game Array</h1>");

for (counter2 = 0;
		counter2<gameArray.length;
		counter2++)
{
		document.write(gameArray[counter2] + "<br>");
}
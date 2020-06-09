//Tylor Menegay 3/16/2020
// 1: Select / (get) the element with the ID 'about'. 
//    Store the element in the variable `about`.
//	  Use a method to modify the about id with a color border of your choice

const about = document.getElementById('about');

about.style.border = "2px solid #b22222";


// 2: Select all the <h2> elements in the document.
//    Using a loop, set the color of the <h2> elements to a different color.

const Changeh2 = document.getElementByTagName('h2');

for( let i = 0; i < Changeh2.length; i+=1){
	Changeh2[i].style.color = '#800080';
}


// 3: Select all elements with the class '.card'.
//    Using a loop, set their background color to the color of your choice.

const card = document.getElementById('.card');

for( let i = 0; i < card.length; i+=1){
	card[i].style.color = '#f3f3f3';
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
//    Modify the color to one of your choice.

const ul = getElementById('list-group')

ul.style.border = "2px solid #DC143C";  // just need to change the hex value

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.

const container = document.getElementById(".container");
container[1].innerHTML 


// 6: Select all <a> elements that have a 'title' attribute.
//    Set their color value to the color of your choice.

const all = document.getElementById('[a="title"]');
	all.style.color = "#800080";

//My own
const nav = document.getElementByTagName("navbar");
for( let i = 0; i < nav.length; i+=1){
	nav[i].style.color = '#d3d3d3';
}
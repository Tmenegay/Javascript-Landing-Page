//Tylor Menegay 5/4/20

/* I used this to make sure that the script was linked correctly 

alert("HELLO");

*/

//function loadDoc() will load my text file as HTML on the browser when the button is clicked.
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "final.txt", true);
  xhttp.send();
}
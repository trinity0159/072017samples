//Prints today's date when the user clicks on the button

//Declare Variables
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yy = today.getFullYear();
var dof = today.getDay();
var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Stores the date in a string
var todayDate = dayOfWeek[dof] + ", " + Month[mm] + " " + dd + ", " + yy;

//Set a class to the header
var header = document.getElementById('date');
header.setAttribute('class', 'dateheader');

//When user clicks button print date
document.getElementById("clickMe").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = todayDate;
});	

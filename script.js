//java script
var close = document.getElementsByClassName("closebtn");
var i;

// allows for multiple close buttons
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


var now = new Date();
var hrs = now.getHours();
// var meridiem = "AM";
// if (hrs > 12) {
//   hrs = hrs - 12;
//   meridiem = "PM";
// }
var mins = now.getMinutes();
if (mins < 10)
  mins = "0" + mins;
var secs = now.getSeconds();  
var time = hrs + ":" + mins; // + " " + meridiem; 
// console.log("Time now: " + time)





var list1 = []; 
var list2 = [];

var currentRow = 1; 
var i = 0; 

// adds rows to table
function AddRow(){
  if (document.getElementById("timebox").value == 0 || document.getElementById("reminderbox").value == 0) 
    alert("Make sure to fill in both boxes before adding!"); 

  else {
    var timestr = document.getElementById("timebox").value;
    if (!(timestr.includes("AM") || timestr.includes("PM"))) 
      alert("Make sure to include a meridiem value! AKA AM or PM!"); 

    if (timestr.includes("PM")) {
      timestr = ((parseInt(timestr.substr(0, timestr.indexOf(":"))) + 12) + timestr.substr(timestr.indexOf(":"), timestr.length));

      timestr = timestr.substr(0,6);
    }

    if (timestr.includes("AM")) {
      timestr = timestr.substr(0, timestr.indexOf(":"));
    }

    var add = document.getElementById('show'); 
    var newRow = add.insertRow(currentRow); 

    list1[i] = document.getElementById("reminderbox").value;list2[i] = document.getElementById("timebox").value; 

    var cell1 = newRow.insertCell(0); 
    var cell2 = newRow.insertCell(1); 

    cell1.innerHTML = list1[i]; 
    cell2.innerHTML = list2[i]; 

    currentRow++; 
    i++; 
    
    var newTime = getSecs(timestr, 0) - getSecs(time, secs);  
    var milliseconds = newTime * 1000; 
   
    // console.log("newTime: " + newTime)
    // console.log("milli " + milliseconds)
    setTimeout( function ( ) { alert( document.getElementById("reminderbox").value ); }, milliseconds); 
  }
}


// function to change time to seconds
function getSecs(time, secs) {
  console.log("getMins Time: " + time)
  var ind = time.indexOf(":");
  var hour = time.substr(0, ind);
  var min = time.substr(ind+1, ind + 2);
  var m = (hour * 3600) + (min * 60) + (secs);
  console.log("hours: " + hour)
  console.log("mins: " + min)
 // console.log(s)
  return m;
}


  









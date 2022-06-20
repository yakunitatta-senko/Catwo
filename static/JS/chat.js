
var input = getInput(input);
document.getElementById("user").innerHTML = input.value;

function getInput(input) {
  return input;
}


/// Shows the users text while typeing
function ShowUserText() {
  var input = document.getElementById("user-input");
  
  const ShowUserText = document.getElementById("User").innerHTML = input.value;
  
}

function test() {
  alert("Yep");

}


/// User Input

function handle(e) {
  var key = e.which;
  if (key == 13) {
    alert(input.value);
    getInput();
  }
}

function getInput() {
  var input = document.getElementById("user-input");

  document.html.style.backgroundColor = input.value;

  document.getElementById("User").innerHTML = input.value;
}

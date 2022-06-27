var input = getInput(input);
document.getElementById("user").innerHTML = input.value;
var input = document.getElementById("user-input");


function getInput(input) {
  return input;
}


/// Shows the users text while typeing
function ShowUserText() {
  var input = document.getElementById("user-input");
  const ShowUserText = document.getElementById("User").innerHTML = input.value;
  document.getElementById("User").innerHTML = input.value;

}

/// press enter function
function handle(e) {
  var input = document.getElementById("user-input");
  var key = e.which;
  if (key == 13) {
    alert(input.value);
    getInput()
  }

  //show what user is clicking
  function test() {
    alert(document.addEventListener);

  }
}

/// User Input
function getInput() {
  document.getElementById("User").innerHTML = input.value = "";
}

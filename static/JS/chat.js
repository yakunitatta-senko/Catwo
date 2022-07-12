
//Gets the text of the user

$("#user-input").keyup(function() {
  $("#User").html($(this).val());
});

function handle(e) {
  var input = document.getElementById("user-input");
  var key = e.which;
  if (key == 13) {
    alert('*Clearing*: ' +input.value);
    getInput()
  }

function getInput() {
  var input = document.getElementById("user-input");
  document.getElementById("User").innerHTML = input.value = "";
}}

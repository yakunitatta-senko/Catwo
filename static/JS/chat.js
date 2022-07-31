//Gets the text of the user

$("#user-input").keyup(function() {
  $("#User").html($(this).val());
});

function handle(e) {
  let input = document.getElementById("user-input").value;
  document.getElementById("User").innerHTML = input;
  var key = e.which;
  if (key == 13) {
    alert('*Clearing*: ' + input);
    getInput(input);
  }

  function getInput(input) {
    var input = document.getElementById("user-input");
    document.getElementById("User").innerHTML = input.value = "";
    let text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
  }
}



//THis is the Text to speech input
{
  const textInputField = document.querySelector("#user-input");
  const form = document.querySelector("#User");
  const utterThis = new SpeechSynthesisUtterance();
  const synth = window.speechSynthesis;
  let ourText = "";

  const checkBrowserCompatibility = () => {
    "speechSynthesis" in window
      ?
      console.log("Web Speech API supported!") :
      console.log("Web Speech API not supported :-(")
  }

  checkBrowserCompatibility();

  form.ondblclick = (event) => {
    event.preventDefault();
    ourText = textInputField.value;
    synth.speak(utterThis);
    textInputField.value = "";
  }
}

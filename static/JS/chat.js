//Gets the text of the user

$("#user-input").keyup(function() {
  $("#User").html($(this).val());
});

function handle(e) {
  var input = document.getElementById("user-input");
  var key = e.which;
  if (key == 13) {
    alert('*Clearing*: ' + input.value);
    getInput()
  }

  function getInput() {
    var input = document.getElementById("user-input");
    document.getElementById("User").innerHTML = input.value = "";
  }
}



//This is the Text to speech input 
{
  const textInputField = document.querySelector("#user-input");
  const form = document.querySelector("#user-input");
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
//activates on double Clicked
  form.ondblclick = (event) => {
    event.preventDefault();
    ourText = textInputField.value;
    utterThis.text = ourText;
    synth.speak(utterThis);
    textInputField.value = "";
  }
}

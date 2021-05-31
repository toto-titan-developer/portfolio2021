

// Copy Email to Clip Board
function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

document.querySelector('#copy').onclick = function() {
  Clipboard_CopyTo('henderson.wyatt95@gmail.com');
}


// Open Contact Window
document.querySelector(".contact_button").onclick = function() {
  document.querySelector(".contact_window").style.display = "block";
}
// Close Contact Window
document.querySelector(".close_contact").onclick = function() {
  document.querySelector(".contact_window").style.display = "none";
}

// Check Other input field function
function checkOther() {
  let input = document.querySelector("#reason");
  document.querySelector(".other_input").value = "";
  if (input.options[input.selectedIndex].value === "Other"){
    let element = document.querySelector(".other_input");
    element.style.display = "block";
    if (!element.hasAttribute("required")){
      element.toggleAttribute("required");
    }
    

  }
  else {
    let element = document.querySelector(".other_input");
    element.style.display = "none";
    if (element.hasAttribute("required")){
      element.toggleAttribute("required");
    }  
  }
}
  
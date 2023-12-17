let displayBar = document.getElementById("displayBar");

function getValue(obj) {
  let inputNum = obj.innerHTML;
  if (inputNum == "=") {
    displayBar.innerHTML = eval(displayBar.innerHTML);
  } else if (inputNum == "C") {
    displayBar.innerHTML = "0";
  } else if (inputNum == "AC") {
    displayBar.innerHTML = "0";
  } else {
    if (displayBar.innerHTML == "0") {
      displayBar.innerHTML = inputNum;
    } else {
      displayBar.innerHTML += inputNum;
    }
  }
}

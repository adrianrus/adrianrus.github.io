function execute() {
  if (!checkForm()) return;
  displayText();
}

function getFirstTask() {
  // Get input field value
  textArea = document.getElementById("input-field");
  var content = textArea.value;
  var lines = content.split("\n");
  // Remove the first line from the array
  var firstLine = lines.shift();
  textArea.value = lines.join("\n");
  return firstLine;
}

function displayText() {
  inputText = getFirstTask();
  // Set text to display in modal
  var modalText = document.getElementById("text-display");
  modalText.innerHTML = inputText;

  // Show modal
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  var task = getFirstTask();
  if (!task || task.length === 0) {
    // Hide modal
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  } else {
    var modalText = document.getElementById("text-display");
    modalText.innerHTML = task;
  }
}

function checkForm() {
  var input = document.getElementById("input-field");
  var inputError = document.getElementById("input-error");
  var valid = input.checkValidity();
  if (valid == false) {
    inputError.style.display = "block";
  } else {
    inputError.style.display = "none";
  }
  return valid;
}

const input = document.getElementById("input-field");
input.addEventListener("keypress", function (event) {
  if (event.shiftKey == true && event.keyCode === 13) {
    execute();
    event.preventDefault();
  }
});

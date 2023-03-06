// !@#$%^&*()_+-=[]{}|;:,.<>/?

function getRandomNumbers() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = 5;
  let results = [];
  for (let i = 0; i < 3; i++) {
    let result = "";
    for (let j = 0; j < length; j++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    results.push(result);
  }
  const superResults = results.join("-");
  return superResults;
}

const generateButton = document.getElementById("button");

const container = document.getElementById("passSquare");
let passwordDiv = "";

generateButton.addEventListener("click", () => {
  // create a new div element
  const newPasswordDiv = document.createElement("div");

  // create a password and put it inside const
  const safePassword = getRandomNumbers();
  newPasswordDiv.textContent = safePassword;

  // remove "try me" placeholder
  const placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = "";

  // replace the old password div with the new one
  if (passwordDiv) {
    container.replaceChild(newPasswordDiv, passwordDiv);
  } else {
    // append the new password div to the container if there is no old password div
    container.appendChild(newPasswordDiv);
  }

  // set the password div to the new div
  passwordDiv = newPasswordDiv;
});

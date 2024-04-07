alert("wellcome to my game");
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let userForm = document.getElementsByTagName("form")[0];
let numberText = document.getElementsByTagName("h2")[0];
let opportunity = document.getElementsByTagName("h2")[1];
let result = document.getElementsByTagName("h2")[2];
let userOpportunity = 10;
userForm.addEventListener("submit", (e) => {
  let userNumber = e.target.number.value;
  switch (true) {
    case userNumber == randomNumber:
      numberText.innerText = "You win";
      break;
    case userNumber < randomNumber:
      numberText.innerText = "The number is larger";
      userOpportunity--;
      opportunity.innerText = userOpportunity;
      break;
    case userNumber > randomNumber:
      numberText.innerText = "The number is smaller";
      userOpportunity--;
      opportunity.innerText = userOpportunity;
      break;
    default:
      numberText.innerText = "invalid number";
      break;
  }
  if (userOpportunity == 0) {
    numberText.innerText = "you lose";
    result.innerText = randomNumber;
    setTimeout(() => {
      document.location.reload();
    }, 3000);
  }
  e.preventDefault();
});

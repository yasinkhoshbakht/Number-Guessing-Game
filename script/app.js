let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
let userform = document.getElementsByTagName("form")[0];
const intrednumber = document.getElementsByName('number')[0]
console.log(intrednumber)
userform.addEventListener("submit", (e)=> {
 let userNumber = e.target.intrednumber.value
  switch (true) {
    case userNumber == randomNumber:
      alert('you win')
      break;
  
    default:
      break;
  }
  e.preventDefault();
});

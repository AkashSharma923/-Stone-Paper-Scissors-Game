let userScore = 0;
let compScore = 0;
const choice = document.querySelectorAll(".option")
let result = document.querySelector("#msg")

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");


const drawGame = ()=>{
      result.style.backgroundColor="#081b31"
      result.innerText=`Match Draw. Play Again`
}

const showWinner = (userWin ,userChoice, compChoice) =>{
      if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            result.style.backgroundColor="green"
            result.innerText=`You WIN!. yours ${userChoice} beats ${compChoice}`
      }else{
            compScore++;
            compScorePara.innerText=compScore;
            result.style.backgroundColor="red"
            result.innerText=`You Lose!. ${compChoice} beats yours ${userChoice}`
      }
}

const getcompChoice = () =>{
      const options = ["rock","paper","scissor"];
      const randomIdx = Math.floor(Math.random()*3);
      return options[randomIdx];
}

const playGame = (userChoice) =>{
      console.log(`User Choice is ${userChoice}`);
      const compChoice = getcompChoice();
      console.log(`Comp Choice is ${compChoice}`);

      if(userChoice === compChoice){
            drawGame();
      } else {
      let userWin = true;
      if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
      } else if(userChoice === "paper"){
                  userWin = compChoice === "scissor"?false:true;
      }else if(userChoice === "scissor"){
            userWin = compChoice === "rock"?false:true;
      }
      showWinner(userWin ,userChoice ,compChoice)
   }
   
};

choice.forEach((choice) =>{
      const userChoice = choice.getAttribute("id")
      choice.addEventListener("click",()=>{
            playGame(userChoice);
      })
})

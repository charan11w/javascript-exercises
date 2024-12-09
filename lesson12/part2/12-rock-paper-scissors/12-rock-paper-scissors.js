let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
}
updateScore();

document.querySelector('.js-rock-button')
.addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  playGame('scissors');
});

//adding keydown to eventListener

document.body.addEventListener('keydown',(event) => {
  if(event.key === 'r'){
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissors')
  }   
});



function playGame(playerMove) {
//if player chose rock
if(playerMove=='rock') {
  const computerMove= pickComputerMove();
  let result='';
  if(computerMove === 'rock'){
    result='Tie.';
    score.ties+=1;
  }else if(computerMove==='paper'){
    result='Computer win.';
    score.losses+=1;
  }else if(computerMove ==='scissors'){
    result='You win.';
    score.wins+=1;
  }
  
  console.log(localStorage.setItem('score',JSON.stringify(score)));
  document.querySelector('.js-result').innerHTML=`${result}`;
  document.querySelector('.js-moves')
  .innerHTML=`You
<img class="move-icon" src="images/${playerMove}-emoji.png"> 
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
  updateScore();
  
}else if(playerMove=='paper') {
  const computerMove= pickComputerMove();
  let result='';
  if(computerMove === 'rock'){
    result='You win.';
    score.losses+=1;
  }else if(computerMove==='paper'){
    result='Tie.';
    score.ties+=1;
  }else if(computerMove ==='scissors'){
    result='Computer win.';
    score.wins+=1;
  }

  console.log(localStorage.setItem('score',JSON.stringify(score)));
  document.querySelector('.js-result').innerHTML=`${result}`;
  document.querySelector('.js-moves')
  .innerHTML=`You
<img class="move-icon" src="images/${playerMove}-emoji.png"> 
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
  updateScore();
}else if(playerMove=='scissors') {
  const computerMove= pickComputerMove();
  let result='';
  if(computerMove === 'rock'){
    result='Computer win.';
    score.losses+=1;
  }else if(computerMove==='paper'){
    result='You win.';
    score.wins+=1;
  }else if(computerMove ==='scissors'){
    result='Tie.';
    score.ties+=1;
  }
  console.log(localStorage.setItem('score',JSON.stringify(score)));
  document.querySelector('.js-result').innerHTML=`${result}`;
  document.querySelector('.js-moves')
  .innerHTML=`You
<img class="move-icon" src="images/${playerMove}-emoji.png"> 
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
  updateScore();
}      
}

function updateScore(){
document.querySelector('.js-score')
.innerText=`Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}

function pickComputerMove(){
let computerMove='';
const randomNumber=Math.random();
if(randomNumber>=0 && randomNumber<1/3){
computerMove='rock';
}else if(randomNumber >=1/3 && randomNumber<2/3){
computerMove='paper';
}else if(randomNumber>=2/3 && randomNumber<1){
computerMove='scissors';
}
console.log(computerMove);

return computerMove;
}

let autoPlaying=false;
let intervalId;

document.querySelector('.js-auto-play-button')
.addEventListener('click',() => {
  if(!autoPlaying){
    document.querySelector('.js-auto-play-button')
    .innerHTML='Stop playing'
    intervalId=setInterval(()=>{
      const move=pickComputerMove();
      playGame(move);
    },1000);
    autoPlaying=true;
  }else{
     document.querySelector('.js-auto-play-button')
    .innerHTML='Auto Play'
    clearInterval(intervalId);
    autoPlaying=false;
  } 
})

document.body.addEventListener('keydown',(Event) => {
  if(Event.key === 'a'){
    if(!autoPlaying){
      document.querySelector('.js-auto-play-button')
      .innerHTML='Stop playing'
      intervalId=setInterval(()=>{
        const move=pickComputerMove();
        playGame(move);
      },1000);
      autoPlaying=true;
    }  
    }
  else if(Event.key === 'Backspace'){
    document.querySelector('.js-auto-play-button')
    .innerHTML='Auto Play'
    clearInterval(intervalId);
    autoPlaying=false;
  }
})

let v;

document.querySelector('.js-reset-button')
.addEventListener('click',(Event) => {
     v= document.querySelector('.js-d')
  v.innerHTML=`
  <p class="js-confirm-button">
  Are you sure you want to reset the score?
      <button class="js-confirm1">Yes</button>
      <button class="js-confirm2">No</button>
  </p>`

  document.querySelector('.js-confirm1')
  .addEventListener('click',() => {
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScore();
    v.innerHTML='';

    document.querySelector('.js-result').innerHTML=``;
    document.querySelector('.moves').innerHTML=``;
  })

  
  document.querySelector('.js-confirm2')
  .addEventListener('click',() => {
    v.innerHTML='';
  })
 })






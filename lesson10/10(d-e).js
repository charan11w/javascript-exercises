// function on(name){
//   const button1=document.querySelector(name);
//   if(!button1.classList.contains('toggle')){
//       button1.classList.add('toggle');
//   }else{
//     button1.classList.remove('toggle');
//   }
  
// }

// above code is to on all buttons

function on(name){
  const button1=document.querySelector(name);
  if(!button1.classList.contains('toggle')){
    turnOffPreviousButton()
    button1.classList.add('toggle');  
  }else{
    button1.classList.remove('toggle');
  }
}

function turnOffPreviousButton(){
  const button2=document.querySelector('.toggle');
  if(button2){
    button2.classList.remove('toggle');
  }
}
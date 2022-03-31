console.log('js is here');

function button1Clicked(){
  document.getElementById('button-1').classList.toggle('was-clicked');
}
function windowLoaded(){
  console.log('loaded');
  document.getElementById('button-1').addEventListener('click',button1Clicked);
  document.getElementById("button-2").addEventListener('mouseenter',buttonHovered);
  document.getElementById("button-2").addEventListener('mouseenter',buttonMouseover);
  //mouse over, mouse down, mouse up, mouse move, //
}

function buttonHovered(){
  event.target.style.color="purple";
}

function buttonMouseover(){
  event.target.style.color = "orange";
}

window.onload = windowLoaded;

const turnOnOff= document.getElementById('turnOnOff');

const change = document.getElementById('change')
const lamp = document.getElementById('lamp');

function isLampBroken(){
  return lamp.src.indexOf('quebrada') > -1; 
}


function lampOn (){
  if (!isLampBroken()){
    lamp.src = './assets/ligada.jpg';
  }
}

function lampOff(){
  if (!isLampBroken()){
    lamp.src = './assets/desligada.jpg';
  }
}

function lampOnOff(){
  if (turnOnOff.textContent == 'Ligar'){
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else {
    lampOff();
    turnOnOff.textContent = 'Ligar';
  }
}

function lampBroken(){
  lamp.src = './assets/quebrada.jpg';
}

function changeLamp(){
  lamp.src = './assets/desligada.jpg'
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('dblclick', lampBroken);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
change.addEventListener('click', changeLamp);


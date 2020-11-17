const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function startGame() { // 1
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();
  
    setTimeout(() => timeUp = true, 10000);
}

function peep() { // 2
    const time = randTime(1000, 2000);
    const hole = randHole(holes);
    hole.classList.add('up');
  
    setTimeout(() => {
      hole.classList.remove('up');
      if(!timeUp) {
        peep();
      }
    }, time);
  }


function randTime(min, max) { // 3
  return Math.round(Math.random() * (max - min) + min);
}

function randHole(holes) { // 4
  const randIndex = Math.floor(Math.random() * holes.length);
  const hole = holes[randIndex];
  if (hole === lastHole) { // 처음 lastHole은 undefined
    return randHole(holes);
  }

  lastHole = hole;
  return hole;
}





function bonk(e) {
  if (!e.isTrusted) return; // isTrusted is a property that tells whether mouse event is fake or not
  
  this.classList.remove('up');
  score++;
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
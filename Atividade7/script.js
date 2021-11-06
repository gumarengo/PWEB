var contador = document.getElementById("contar"),
  formPc = document.getElementById("pchoose"),
  rock = document.getElementById("pedra"),
  paper = document.getElementById("papel"),
  scissors = document.getElementById("tesoura"),
  choose = document.getElementById("choose"),
  win = document.getElementById("win"),
  lose = document.getElementById("lose"),
  empate = document.getElementById("draw"),
  resetar = document.getElementById("reset"),
  vitoria = 0,
  derrota = 0;

resetar.onclick = function () {
  formPc.reset();
};

function winDisappear() {
  choose.style.display = "none";
  win.style.display = "none";
  lose.style.display = "none";
  empate.style.display = "none";
}

function delay() {
  setTimeout(function () {
    winDisappear();
  }, 1000);
}

function showWin() {
  choose.style.display = "block";
  win.style.display = "block";
  delay();
}

function showDraw() {
  choose.style.display = "block";
  empate.style.display = "block";
  delay();
}

function showLose() {
  choose.style.display = "block";
  lose.style.display = "block";
  delay();
}

var compare = function (arma) {
  var computer = [1, 2, 3];
  var random = computer[Math.floor(Math.random() * computer.length)];

  if (random == 1) {
    computer = "Pedra!";
  } else if (random == 2) {
    computer = "Papel!";
  } else {
    computer = "Tesoura!";
  }

  if (arma == "pedra") {
    if (computer == "Pedra!") {
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
    } else if (computer == "Papel!") {
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    } else {
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    }
  }
  if (arma == "papel") {
    if (computer == "Pedra!") {
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    } else if (computer == "Papel!") {
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
    } else {
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    }
  }
  if (arma == "tesoura") {
    if (computer == "Pedra!") {
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
    } else if (computer == "Papel!") {
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    } else {
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
    }
  }
};

rock.onclick = function () {
  compare("pedra");
};
paper.onclick = function () {
  compare("papel");
};

scissors.onclick = function () {
  compare("tesoura");
};

/*

const jogador = parseInt(prompt(
"Escolha:\n" +
"1 - Pedra\n" +
"2 - Papel\n" +
"3 - Tesoura\n"
));

var computer = Math.random();



if(computer < 0.33){
computer = 1;
}
else if (computer < 0.66){
computer = 2;
}
else {
computer = 3;
}

alert(computer);
alert(jogador);

if (jogador === 1){
if(computer === 1){
alert ("empate");
}
else if(computer === 2){
alert( "Computador venceu");
}
else if(computer === 3){
alert( "jogador venceu");
}
}

if (jogador === 2){
if(computer === 1){
alert( "jogador venceu");
}
else if(computer === 2){
alert( "empate");
}
else if(computer === 3){
alert( "Computador venceu");
}
}

if (jogador === 3){
if(computer === 1){
alert( "jogador venceu");
}
else if(computer === 2){
alert( "empate");
}
else if(computer === 3){
alert( "empate");
}
}*/

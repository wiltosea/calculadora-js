let display = document.getElementById('display');

// let soma = document.getElementById('soma');
// let subtracao = document.getElementById('subtracao');
// let multiplicacao = document.getElementById('multiplicacao');
// let clear = document.getElementById('clear');
// let percentual = document.getElementById('percentual');
// let total = document.getElementById('total');

function catKey(numero) {
  let content = display.value;
  display.value !== '0' ? (display.value += numero) : (display.value = numero);
  return console.log(numero, content);
}

function cleari() {
  return (display.value = '0');
}

function resultado() {
  let result = eval(display.value);
  display.value = result;
  console.log(result);
}

function somaClick() {
  display.value += '+';
}
function subtraiClick() {
  display.value += '-';
}
function multiplicaClick() {
  display.value += '*';
}
function divideClick() {
  display.value += '/';
}

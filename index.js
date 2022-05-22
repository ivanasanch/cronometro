const appDiv = document.getElementById('app');
appDiv.innerHTML += `
<div class="btnGroup">
  <button id="btnStart">Iniciar</button>
  <button id="btnStop">Parar</button>
  <button id="btnReset">Resetear</button>
</div>`;
appDiv.innerHTML += `
<div class="txtTime">
<p><span id="min">00</span>:<span id="sec">00</span>:<span id="tens">00</span></p>
</div>`;
let sec = '00';
let min = '00';
let tens = '00';
let txtsec = document.getElementById('sec');
let txtmin = document.getElementById('min');
let txttens = document.getElementById('tens');
let btnStart = document.getElementById('btnStart');
let btnStop = document.getElementById('btnStop');
let btnReset = document.getElementById('btnReset');
let time;

btnStart.addEventListener('click', fnStart);
btnStop.addEventListener('click', fnStop);
btnReset.addEventListener('click', fnReset);

function fnStart() {
  clearInterval(time);
  time = setInterval(startTimer, 10);
}
function fnStop() {
  clearInterval(time);
}
function fnReset() {
  clearInterval(time);
  sec = '00';
  min = '00';
  tens = '00';
  txtmin.innerHTML = min;
  txtsec.innerHTML = sec;
  txttens.innerHTML = tens;
}
function startTimer() {
  tens++;
  if (tens <= 9) {
    txttens.innerHTML = '0' + tens;
  } else if (tens > 9 && tens <= 99) {
    txttens.innerHTML = tens;
  } else if (tens > 99) {
    sec++;
    txtsec.innerHTML = '0' + sec;
    tens = 0;
    txttens.innerHTML = '0' + tens;
  }
  if (sec > 9) {
    txtsec.innerHTML = sec;
  } else if (sec > 59) {
    min++;
    txtmin.innerHTML = '0' + min;
    sec = 0;
    txtsec.innerHTML = '0' + sec;
  }
  if (min > 9) {
    txtmin.innerHTML = min;
  }
}
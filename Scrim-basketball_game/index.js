const home = document.getElementById("home");

const guest = document.getElementById("guest");

let count1 = 0;
let count2 = 0;

function addIncrement1() {
  count1 += 1;
  home.textContent = count1;
}
function addIncrement2() {
  count1 += 2;
  home.textContent = count1;
}
function addIncrement3() {
  count1 += 3;
  home.textContent = count1;
}

function addIncGuest1() {
  count2 += 1;
  guest.textContent = count2;
}
function addIncGuest2() {
  count2 += 2;
  guest.textContent = count2;
}
function addIncGuest3() {
  count2 += 3;
  guest.textContent = count2;
}

function reset() {
  home.textContent = 0;
  guest.textContent = 0;

  count1 = 0;
  count2 = 0;
}

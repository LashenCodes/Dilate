let speed = 0n;
let distance = 0n;
let speed_add = 1n;

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach((tab) => {
    tab.hidden = tab.id !== tabId;
  });
}

function clicked_maintab() {
  showTab('main-tab');
}

function clicked_prestigetab() {
  showTab('prestige-tab');
}

function clicked_battlestab() {
  showTab('battles-tab');
}

function clicked_supernovatab() {
  showTab('supernova-tab');
}

function updateDisplay() {
  document.getElementById('speed-display').textContent = speed.toString();
  document.getElementById('distance-display').textContent = distance.toString();
  document.getElementById('speed-add-display').textContent = speed_add.toString();
}

function clicked_mu0() {
  speed += speed_add;
  updateDisplay();
}

setInterval(() => {
  distance += speed;
  updateDisplay();
}, 1000);

updateDisplay();

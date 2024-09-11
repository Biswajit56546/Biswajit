document.addEventListener('DOMContentLoaded', () => {
  // Array of IDs
  const ids = ['shell15', 'shell16', 'shell17', 'shell18'];

  // Function to add event listeners to each div
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('touchstart', () => {
        element.classList.add('invisible');
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Array of IDs
  const ids = ['cb1', 'cb2', 'cb3', 'cb4'];

  // Function to add event listeners to each div
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('touchstart', () => {
        element.classList.add('invisible');
      });
    }
  });
});
function changeText1() {
    const div = document.getElementById('cb1');
    div.textContent = 'Claimed!';
}
function changeText2() {
    const div = document.getElementById('cb2');
    div.textContent = 'Claimed!';
}
function changeText3() {
    const div = document.getElementById('cb3');
    div.textContent = 'Claimed!';
}
function changeText4() {
    const div = document.getElementById('cb4');
    div.textContent = 'Claimed!';
}

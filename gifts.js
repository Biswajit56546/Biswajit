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
function toggleMenu(event) {
    event.stopPropagation(); 
    const dropdown = document.querySelector('.content');
    const menu = document.querySelector('.menu');
    dropdown.classList.toggle('show');
    menu.classList.toggle('open');
}

window.onclick = function(event) {
    const dropdown = document.querySelector('.content');
    const menu = document.querySelector('.menu');
    
    if (!event.target.matches('.menu') && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
        menu.classList.remove('open');
    }
};

document.querySelector('.content').onclick = function(event) {
    event.stopPropagation();
};

function changeTextAndPosition(buttonId, top, left) {
    const div = document.getElementById(buttonId);
    div.textContent = 'Claimed!';
    div.style.position = 'absolute';  // You can use 'relative' or 'fixed' as well depending on your layout
    div.style.top = top;
    div.style.left = left;
}

// Call this function for each button with different positions
function changeText1() {
    changeTextAndPosition('cb1', '1600px', '195px');  // Example position for button 1
}
function changeText2() {
    changeTextAndPosition('cb2', '1600px', '170px'); // Example position for button 2
}
function changeText3() {
    changeTextAndPosition('cb3', '1350px', '170px'); // Example position for button 3
}
function changeText4() {
    changeTextAndPosition('cb4', '2260px', '170px'); // Example position for button 4
}


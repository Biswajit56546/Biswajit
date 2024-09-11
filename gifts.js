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









// Function to add the click event and animation for each button
function addClaimAnimation(button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
      button.classList.remove("animate");
    }, 600); // Animation lasts for 600ms
  });
}

// Loop through each button ID and apply the animation
for (let i = 1; i <= 4; i++) {
  const claimButton = document.getElementById(`cb${i}`);
  addClaimAnimation(claimButton);
}

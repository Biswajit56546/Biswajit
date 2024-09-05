function toggleMenu(event) {
    event.stopPropagation(); // Prevents click from propagating to window.onclick
    const dropdown = document.querySelector('.content');
    const menu = document.querySelector('.menu');
    dropdown.classList.toggle('show');
    menu.classList.toggle('open');
}

window.onclick = function(event) {
    const dropdown = document.querySelector('.content');
    const menu = document.querySelector('.menu');
    
    // Check if click is outside the menu and dropdown
    if (!event.target.matches('.menu') && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
        menu.classList.remove('open');
    }
};

// Prevent dropdown from closing when clicking inside it
document.querySelector('.content').onclick = function(event) {
    event.stopPropagation();
};
function toggleDiv1() {
  const hiddenDiv = document.getElementById('hd1');
  hiddenDiv.style.display = hiddenDiv.style.display === 'none' ? 'block' : 'none';
}
function toggleDiv2() {
  const hiddenDiv = document.getElementById('hd2');
  hiddenDiv.style.display = hiddenDiv.style.display === 'none' ? 'block' : 'none';
}
function toggleDiv3() {
  const hiddenDiv = document.getElementById('hd3');
  hiddenDiv.style.display = hiddenDiv.style.display === 'none' ? 'block' : 'none';
}
function hideBothDivs() {
    document.getElementById('yes').style.display = "none";
    document.getElementById('no').style.display = "none";
}

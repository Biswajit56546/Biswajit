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

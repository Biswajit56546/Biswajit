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

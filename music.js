function revealContent() {
    // Select all audio elements with the class 'music'
    const musicAudios = document.querySelectorAll('.music');
    
    // Iterate over each selected audio element and change its display style
    musicAudios.forEach(audio => {
        audio.style.display = 'block'; // Show all hidden audio elements
    });

    // Hide the button after revealing the content
    document.getElementById('revealButton').style.display = 'none';
}
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

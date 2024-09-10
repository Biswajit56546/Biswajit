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



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', function() {
        // Toggle visibility for the h2, hr, and other elements
        document.querySelector('h20').classList.toggle('hidden');
        document.querySelector('hr').classList.toggle('hidden');
        document.querySelector('.text-input').classList.toggle('hidden');
        document.querySelector('.submit-btn').classList.toggle('hidden');
        
        // Get all elements with class "photo"
        let photos = document.querySelectorAll('.photo');
        
        // Loop through all elements and toggle their visibility
        photos.forEach(function(photo) {
            photo.classList.toggle('hidden');
        });
        
        // After toggling visibility, refresh AOS to re-trigger animations
        AOS.refresh();

        // Change the button text
        if (this.textContent === 'Show Content') {
            this.textContent = 'Click';
        } else {
            this.textContent = 'Show Content';
        }
    });
});

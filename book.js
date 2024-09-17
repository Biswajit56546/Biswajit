document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 1;
  const images = document.querySelectorAll('.img');
  
  function showImage(index) {
    const outgoingImage = document.querySelector('.img.active');
    if (outgoingImage) {
      outgoingImage.classList.remove('active');
      outgoingImage.classList.add('outgoing'); // First image flips out to the left with a fold
    }

    const incomingImage = images[index - 1];
    incomingImage.classList.add('incoming'); // Second image starts the fold transition

    setTimeout(() => {
      incomingImage.classList.add('active');
      incomingImage.classList.add('show'); // Make the second image fully visible with the wave/fold effect
    }, 10); // Small delay to start opacity and position transition

    setTimeout(() => {
      if (outgoingImage) outgoingImage.classList.remove('outgoing'); // Remove outgoing class after transition
      incomingImage.classList.remove('incoming'); // Remove incoming class after transition
      incomingImage.classList.remove('show'); // Clean up the show class after transition
    }, 1500); // Wait for the transition to complete
  }

  // Show the first image by default
  showImage(1);

  // Expose the function globally for buttons to work
  window.showImage = showImage;
});
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

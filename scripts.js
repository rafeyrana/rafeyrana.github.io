// Typing animation
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typing', {
        strings: ['Software Engineer', 'Experimenter', 'Athlete'],
        typeSpeed: 20,
        backSpeed: 40,
        loop: true
    });
});

// Modal functionality
function openModal(projectContainer) {
    const modal = document.getElementById('projectModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalLink = modal.querySelector('.modal-link');

    // Get content from the clicked project
    const projectImage = projectContainer.querySelector('.project-image');
    const projectTitle = projectContainer.querySelector('.project-title');
    const projectDescription = projectContainer.querySelector('.project-description');
    const projectLink = projectContainer.querySelector('.project-link');

    // Set modal content
    modalImage.src = projectImage.src;
    modalImage.alt = projectImage.alt;
    modalTitle.textContent = projectTitle.textContent;
    modalDescription.innerHTML = projectDescription.outerHTML;
    modalLink.href = projectLink.href;

    // Show modal with animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
} 
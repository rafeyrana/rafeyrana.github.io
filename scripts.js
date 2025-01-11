// Theme Switch
const themeSwitch = document.getElementById('checkbox');

// Check for saved theme preference, otherwise use device preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeSwitch.checked = true;
} else if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeSwitch.checked = false;
} else {
    // If no saved preference, use device preference
    if (!prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeSwitch.checked = true;
    }
}

themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

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
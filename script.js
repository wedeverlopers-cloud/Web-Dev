// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check LocalStorage for saved preference
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

themeBtn.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Plan Selection Logic
const planButtons = document.querySelectorAll('.plan-btn');
const contactMsg = document.getElementById('contact-message');

planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const plan = btn.getAttribute('data-plan');
        contactMsg.value = `Hi Devoria! I would like to choose the ${plan} package. Let's discuss further.`;
        
        // Smooth scroll to contact section
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Visual feedback
        contactMsg.focus();
        contactMsg.style.borderColor = "var(--primary)";
        setTimeout(() => contactMsg.style.borderColor = "", 2000);
    });
});
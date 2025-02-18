bubbles.forEach((bubble) => {
    bubble.addEventListener("click", function (event) {
        event.preventDefault();

        if (this.classList.contains("expanding")) return;
        this.classList.add("expanding");

        // Store initial position
        const rect = this.getBoundingClientRect();
        this.style.setProperty("--bubble-top", `${rect.top + window.scrollY}px`);
        this.style.setProperty("--bubble-left", `${rect.left + window.scrollX}px`);

        this.classList.add("expand");

        // First animation: expand while keeping circular
        setTimeout(() => {
            this.classList.add("final"); // Make it full-screen
        }, 500); // Adjust timing if needed

        this.addEventListener("transitionend", () => {
            window.location.href = this.dataset.href || this.getAttribute("href");
        }, { once: true });
    });
});





// Close expanded content
closeBtn.addEventListener('click', () => {
    expandedContent.style.display = 'none';
});

// Email (contact.html)
function copyEmail() {
    const email = 'thossain180@gmail.com';

    // Copy to clipboard
    navigator.clipboard.writeText(email)
        .then(() => {
            // Change tooltip to success message
            const tooltip = document.getElementById('email_tooltip');
            tooltip.textContent = 'Copied: ' + email;
        })
        .catch(err => {
            console.error('Error copying email: ', err);
        });
}

// Reset tooltip text when mouse leaves
function resetTooltip() {
    document.getElementById('email_tooltip').textContent = 'Copy to clipboard';
}


// about timeline
document.querySelectorAll('.timeline-event-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        const targetId = this.getAttribute('href').substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            const imageUrl = this.getAttribute('data-image');
            this.style.setProperty('--underline-image', `url(${imageUrl})`);
        });
    });
});

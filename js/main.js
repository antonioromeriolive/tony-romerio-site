document.addEventListener("DOMContentLoaded", function() {
    // Gestione Menu Hamburger Mobile
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (menuToggle && mobileNav) {
        // Apri/Chiudi il menu cliccando sull'hamburger
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('is-active');
            mobileNav.classList.toggle('is-active');
            // Blocca lo scroll del body quando il menu è aperto
            document.body.style.overflow = this.classList.contains('is-active') ? 'hidden' : '';
        });

        // Chiudi il menu cliccando su un link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('is-active');
                mobileNav.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        });

        // Chiudi il menu cliccando al di fuori (sull'overlay scuro/vuoto)
        mobileNav.addEventListener('click', function(e) {
            if (e.target === mobileNav || e.target.classList.contains('mobile-nav-content')) {
                menuToggle.classList.remove('is-active');
                mobileNav.classList.remove('is-active');
                document.body.style.overflow = '';
            }
        });
    }
});

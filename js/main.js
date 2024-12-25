/* Essential JS for Basic Functionality */

(function(html) {
    'use strict';

    /* Preloader */
    const ssPreloader = function() {
        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');

        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader')) {
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });
        });
    };

    /* Mobile Menu */
    const ssMobileMenu = function() {
        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const mainNavWrap = document.querySelector('.s-header__nav-wrap');
        const siteBody = document.querySelector('body');

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        window.addEventListener('resize', function() {
            if (window.matchMedia('(min-width: 1201px)').matches) {
                siteBody.classList.remove('menu-is-open');
                toggleButton.classList.remove('is-clicked');
            }
        });
    };

    /* Back to Top Button */
    const ssBackToTop = function() {
        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                goTopButton.classList.add("link-is-visible");
            } else {
                goTopButton.classList.remove("link-is-visible");
            }
        });
    };

    /* Initialize */
    (function ssInit() {
        ssPreloader();
        ssMobileMenu();
        ssBackToTop();
    })();

})(document.documentElement);

(() => {
    'use strict';

    const onReady = (fn) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn, { once: true });
        } else {
            fn();
        }
    };

    onReady(() => {
        // --- ELEMENTS ---
        const globalNav = document.getElementById('globalNav');
        const megaContainer = document.getElementById('megaMenuContainer');
        const panels = Array.from(document.querySelectorAll('.mega-panel'));
        const triggers = Array.from(globalNav ? globalNav.querySelectorAll('[data-target]') : []);
        const themeToggle = document.getElementById('themeToggle');
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileContent = document.getElementById('mobileMenuContent');
        const mainEl = document.getElementById('main');
        const menuCurtain = document.getElementById('menuCurtain');
        const siteFooter = document.querySelector('.site-footer');
        const siteLoader = document.getElementById('siteLoader');
        const loaderBarFill = document.getElementById('loaderBarFill');
        const featuredCards = Array.from(document.querySelectorAll('.featured-card'));

        /* ==========================================================
           0. SITE LOADING OVERLAY ANIMATION
           ========================================================== */
        const initSiteLoader = () => {
            if (!siteLoader || !loaderBarFill) {
                document.body.classList.add('is-loaded');
                return;
            }

            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.floor(Math.random() * 25) + 15;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    loaderBarFill.style.width = '100%';

                    setTimeout(() => {
                        siteLoader.classList.add('is-dismissed');
                        document.body.classList.add('is-loaded');
                    }, 250);
                } else {
                    loaderBarFill.style.width = `${progress}%`;
                }
            }, 60);
        };

        initSiteLoader();

        /* ==========================================================
           0.1 MOUSE TRACKING HOVER GLOW ANIMATION
           ========================================================== */
        featuredCards.forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
                card.style.setProperty('--mouse-glow-opacity', '1');
            });

            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--mouse-glow-opacity', '0');
            });
        });

        if (!globalNav || !megaContainer) return;

        // --- MEDIA QUERIES ---
        const desktopMQ = window.matchMedia('(min-width: 769px)');
        const hoverMQ = window.matchMedia('(hover: hover) and (pointer: fine)');

        // --- STATE ---
        let activePanel = null;
        let closeTimeout = null;
        let hoverIntentTimeout = null;
        let isMobileMenuOpen = false;

        const HOVER_OPEN_DELAY = 80;
        const CLOSE_GRACE = 200;

        /* ==========================================================
           1. THEME MANAGEMENT
           ========================================================== */
        const THEME_CYCLE = { auto: 'light', light: 'dark', dark: 'auto' };
        const THEME_LABELS = {
            auto: 'Switch to light theme',
            light: 'Switch to dark theme',
            dark: 'Use system theme',
        };

        const applyTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            if (themeToggle) {
                themeToggle.setAttribute('aria-label', THEME_LABELS[theme] || THEME_LABELS.auto);
            }
        };

        const bootTheme = document.documentElement.getAttribute('data-theme');
        applyTheme(['dark', 'light', 'auto'].includes(bootTheme) ? bootTheme : 'auto');

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = THEME_CYCLE[current] || 'light';
                applyTheme(next);
                try {
                    localStorage.setItem('theme', next);
                } catch {
                    /* storage unavailable */
                }
            });
        }

        /* ==========================================================
           2. DESKTOP MEGA MENU
           ========================================================== */
        let panelResizeObserver = null;
        if ('ResizeObserver' in window) {
            panelResizeObserver = new ResizeObserver(() => {
                if (activePanel && globalNav.classList.contains('is-open')) {
                    megaContainer.style.height = `${activePanel.scrollHeight}px`;
                }
            });
        }

        const setFlyoutExposure = (isOpen) => {
            megaContainer.inert = !isOpen;
            megaContainer.setAttribute('aria-hidden', String(!isOpen));
            globalNav.classList.toggle('is-open', isOpen);
            if (menuCurtain) menuCurtain.classList.toggle('is-visible', isOpen);
        };

        const observePanel = (panel) => {
            if (!panelResizeObserver) return;
            panelResizeObserver.disconnect();
            panelResizeObserver.observe(panel);
        };

        function openPanel(targetId) {
            const panel = document.getElementById(targetId);
            if (!panel) return;

            clearTimeout(closeTimeout);
            if (activePanel === panel) return;

            activePanel = panel;

            panels.forEach((p) => p.classList.toggle('is-active', p === panel));
            triggers.forEach((trigger) => {
                const isSource = trigger.dataset.target === targetId;
                trigger.setAttribute('aria-expanded', String(isSource));
                trigger.classList.toggle('is-active', isSource);
            });

            setFlyoutExposure(true);
            megaContainer.style.height = `${panel.scrollHeight}px`;
            observePanel(panel);
        }

        function closeMenu() {
            if (!activePanel) return;

            clearTimeout(closeTimeout);
            clearTimeout(hoverIntentTimeout);
            activePanel = null;

            setFlyoutExposure(false);
            megaContainer.style.height = '0px';

            if (panelResizeObserver) {
                panelResizeObserver.disconnect();
            }

            panels.forEach((p) => p.classList.remove('is-active'));
            triggers.forEach((trigger) => {
                trigger.setAttribute('aria-expanded', 'false');
                trigger.classList.remove('is-active');
            });
        }

        // --- Trigger events ---
        triggers.forEach((trigger) => {
            const isSearchTrigger = trigger.dataset.target === 'panel-search';

            trigger.addEventListener('mouseenter', () => {
                if (!desktopMQ.matches) return;
                if (isSearchTrigger) return;
                clearTimeout(hoverIntentTimeout);
                hoverIntentTimeout = setTimeout(() => openPanel(trigger.dataset.target), HOVER_OPEN_DELAY);
            });
            trigger.addEventListener('mouseleave', () => clearTimeout(hoverIntentTimeout));

            trigger.addEventListener('click', () => {
                if (!desktopMQ.matches) return;
                clearTimeout(hoverIntentTimeout);
                const targetId = trigger.dataset.target;
                const isAlreadyOpen = activePanel && activePanel.id === targetId;

                if (isAlreadyOpen && !hoverMQ.matches) {
                    closeMenu();
                    return;
                }

                if (isSearchTrigger && isAlreadyOpen) {
                    closeMenu();
                    return;
                }

                openPanel(targetId);
            });
        });

        megaContainer.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
        if (menuCurtain) menuCurtain.addEventListener('click', () => closeMenu());

        globalNav.addEventListener('mouseleave', () => {
            if (!desktopMQ.matches) return;
            clearTimeout(closeTimeout);
            closeTimeout = setTimeout(closeMenu, CLOSE_GRACE);
        });

        globalNav.addEventListener('focusin', (event) => {
            if (!desktopMQ.matches) return;
            const trigger = event.target.closest('[data-target]');
            if (trigger) {
                const isSearchTrigger = trigger.dataset.target === 'panel-search';
                if (event.target.matches(':focus-visible') && !isSearchTrigger) {
                    openPanel(trigger.dataset.target);
                }
                return;
            }
            if (!megaContainer.contains(event.target)) closeMenu();
        });

        globalNav.addEventListener('focusout', (event) => {
            if (!desktopMQ.matches) return;
            if (!globalNav.contains(event.relatedTarget)) {
                clearTimeout(closeTimeout);
                closeTimeout = setTimeout(closeMenu, CLOSE_GRACE);
            }
        });

        document.addEventListener('click', (event) => {
            if (!desktopMQ.matches || !activePanel) return;
            if (!globalNav.contains(event.target)) closeMenu();
        });

        window.addEventListener('scroll', () => {
            if (desktopMQ.matches && activePanel) closeMenu();
        }, { passive: true });

        /* ==========================================================
           3. MOBILE ACCORDION MENU
           ========================================================== */
        const mobileAccordionHeaders = Array.from(document.querySelectorAll('.mobile-accordion-header'));
        mobileAccordionHeaders.forEach((header) => {
            header.addEventListener('click', () => {
                const willOpen = header.getAttribute('aria-expanded') !== 'true';
                const inner = header.nextElementSibling ? header.nextElementSibling.querySelector('.mobile-accordion-inner') : null;

                if (mobileContent) {
                    mobileContent
                        .querySelectorAll('.mobile-accordion-header[aria-expanded="true"]')
                        .forEach((openHeader) => {
                            if (openHeader === header) return;
                            openHeader.setAttribute('aria-expanded', 'false');
                            const openInner = openHeader.nextElementSibling ? openHeader.nextElementSibling.querySelector('.mobile-accordion-inner') : null;
                            if (openInner) openInner.classList.remove('is-animating');
                        });
                }

                header.setAttribute('aria-expanded', String(willOpen));

                if (inner) {
                    inner.classList.remove('is-animating');
                    if (willOpen) {
                        void inner.offsetHeight;
                        inner.classList.add('is-animating');
                    }
                }
            });
        });

        /* ==========================================================
           4. MOBILE MENU OPEN/CLOSE
           ========================================================== */
        function setMobileMenu(open) {
            if (!mobileToggle || !mobileMenu) return;
            isMobileMenuOpen = open;
            mobileToggle.setAttribute('aria-expanded', String(open));
            mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            mobileMenu.classList.toggle('is-open', open);
            mobileMenu.inert = !open;
            mobileMenu.setAttribute('aria-hidden', String(!open));

            const backgroundLayer = [mainEl, menuCurtain, siteFooter].filter(Boolean);
            backgroundLayer.forEach((el) => {
                el.inert = open;
            });

            if (open) {
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => setMobileMenu(!isMobileMenuOpen));
        }

        if (mobileContent) {
            mobileContent.addEventListener('click', (event) => {
                const link = event.target.closest('a[href]');
                if (!link) return;
                setMobileMenu(false);
                if (mobileToggle) mobileToggle.focus();
            });
        }

        /* ==========================================================
           5. GLOBAL BEHAVIOR
           ========================================================== */
        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') return;

            if (isMobileMenuOpen) {
                setMobileMenu(false);
                if (mobileToggle) mobileToggle.focus();
                return;
            }

            if (activePanel && desktopMQ.matches) {
                const sourceTrigger = globalNav.querySelector(`[data-target="${activePanel.id}"]`);
                closeMenu();
                if (sourceTrigger) sourceTrigger.focus();
            }
        });

        desktopMQ.addEventListener('change', () => {
            closeMenu();
            if (isMobileMenuOpen) setMobileMenu(false);
        });
    });
})();

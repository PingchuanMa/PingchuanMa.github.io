/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict';

  // Theme management utilities
  const ThemeManager = {
    getStoredTheme: () => localStorage.getItem('theme'),
    setStoredTheme: theme => localStorage.setItem('theme', theme),

    getPreferredTheme() {
      const storedTheme = this.getStoredTheme();
      if (storedTheme) return storedTheme;

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    setTheme(theme) {
      const resolvedTheme = theme === 'auto'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : theme;

      document.documentElement.setAttribute('data-bs-theme', resolvedTheme);
    },

    showActiveTheme(theme, focus = false) {
      const themeSwitcher = document.querySelector('#bd-theme');
      if (!themeSwitcher) return;

      const themeSwitcherText = document.querySelector('#bd-theme-text');
      const activeThemeIcon = document.querySelector('.theme-icon-active use');
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

      if (!btnToActive) return;

      const svgOfActiveBtn = btnToActive.querySelector('svg use')?.getAttribute('href');

      // Reset all theme buttons
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active');
        element.setAttribute('aria-pressed', 'false');
      });

      // Activate current theme button
      btnToActive.classList.add('active');
      btnToActive.setAttribute('aria-pressed', 'true');

      if (activeThemeIcon && svgOfActiveBtn) {
        activeThemeIcon.setAttribute('href', svgOfActiveBtn);
      }

      if (themeSwitcherText) {
        const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
        themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);
      }

      if (focus) themeSwitcher.focus();
    },

    updateToggleButtonIcon(theme) {
      const themeToggleBtn = document.getElementById('theme-toggle');
      if (!themeToggleBtn) return;

      const icon = themeToggleBtn.querySelector('i');
      if (!icon) return;

      if (theme === 'dark') {
        icon.className = 'bi bi-moon-fill';
      } else {
        icon.className = 'bi bi-sun-fill';
      }
    },

    handleThemeChange(toggle) {
      let theme = toggle.getAttribute('data-bs-theme-value');

      if (theme === 'toggle') {
        const currentTheme = this.getStoredTheme() || this.getPreferredTheme();
        theme = currentTheme === 'light' ? 'dark' : 'light';
        this.updateToggleButtonIcon(theme);
      }

      this.setStoredTheme(theme);
      this.setTheme(theme);
      this.showActiveTheme(theme, true);
    },

    init() {
      // Set initial theme
      const initialTheme = this.getPreferredTheme();
      this.setTheme(initialTheme);
      this.showActiveTheme(initialTheme);

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = this.getStoredTheme();
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
          this.setTheme(this.getPreferredTheme());
        }
      });

      // Initialize theme toggle buttons
      document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
        toggle.addEventListener('click', () => this.handleThemeChange(toggle));
      });

      // Initialize toggle button icon
      this.updateToggleButtonIcon(initialTheme);
    }
  };

  // Profile image hover effects
  const ProfileManager = {
    counter: 0,
    hoverImages: [
      "assets/profile/cuda.webp",
      "assets/profile/mcflurry.webp",
    ],
    defaultImage: "assets/profile/pcma.webp",

    init() {
      const profileCredit = document.getElementById("profile-credit");
      const profileImg = document.getElementById("profile");

      if (!profileCredit || !profileImg) return;

      profileCredit.addEventListener("mouseenter", () => this.showHoverImage(profileImg));
      profileCredit.addEventListener("mouseleave", () => this.showDefaultImage(profileImg));

      // Set initial image
      this.showDefaultImage(profileImg);
    },

    showHoverImage(profileImg) {
      profileImg.src = this.hoverImages[this.counter];
      this.counter = (this.counter + 1) % this.hoverImages.length;
    },

    showDefaultImage(profileImg) {
      profileImg.src = this.defaultImage;
    }
  };

  // Clipboard functionality
  const ClipboardManager = {
    init() {
      this.addCopyButtons();
      this.initializeTooltips();
      this.setupClipboard();
    },

    addCopyButtons() {
      const snippets = document.querySelectorAll('.snippet');

      snippets.forEach(snippet => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.setAttribute('data-bs-toggle', 'tooltip');
        button.setAttribute('data-bs-title', 'Copy to clipboard');
        button.setAttribute('data-clipboard-snippet', '');
        button.innerHTML = '<i class="bi bi-clipboard"></i>';

        snippet.insertBefore(button, snippet.firstChild);
      });
    },

    initializeTooltips() {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    },

    setupClipboard() {
      const clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
        target: trigger => trigger.nextElementSibling
      });

      clipboardSnippets.on('success', e => {
        e.clearSelection();
        this.showCopySuccess(e.trigger);
      });
    },

    showCopySuccess(trigger) {
      const icon = trigger.querySelector('i');
      const tooltip = bootstrap.Tooltip.getInstance(trigger);

      if (!icon || !tooltip) return;

      // Show success state
      icon.className = 'bi bi-check2';
      tooltip.setContent({'.tooltip-inner': 'Copied!'});
      tooltip.show();

      // Reset after 2 seconds
      setTimeout(() => {
        icon.className = 'bi bi-clipboard';
        tooltip.setContent({'.tooltip-inner': 'Copy to clipboard'});
        tooltip.hide();
      }, 2000);
    }
  };

  // Utility functions
  const Utils = {
    setFooterYear() {
      const yearElement = document.getElementById('year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    },

    setupMoreContentScroll() {
      const moreContent = document.getElementById("more-content");
      if (moreContent) {
        moreContent.addEventListener("shown.bs.collapse", function() {
          this.scrollIntoView();
        });
      }
    },

    setupExternalLinks() {
      const links = document.querySelectorAll('a[href]:not([href^="#"])');

      links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
    }
  };

  // Initialize everything when DOM is ready
  const initializeApp = () => {
    ThemeManager.init();
    ProfileManager.init();
    ClipboardManager.init();
    Utils.setFooterYear();
    Utils.setupMoreContentScroll();
    Utils.setupExternalLinks();
  };

  // Start the application
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }
})();

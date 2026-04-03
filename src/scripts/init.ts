// Track observers so we can disconnect them on re-init (e.g. astro:page-load)
let revealObserver: IntersectionObserver | null = null;
let counterObserver: IntersectionObserver | null = null;

// Scroll reveal observer
export function initReveals() {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = (entry.target as HTMLElement).dataset.delay || '0';
        setTimeout(() => entry.target.classList.add('is-visible'), parseInt(delay));
        revealObserver?.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealObserver!.observe(el));
}

// Counter animation — animates .counter elements when they scroll into view
export function initCounters() {
  if (counterObserver) {
    counterObserver.disconnect();
    counterObserver = null;
  }

  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const target = parseInt(el.dataset.target || '0', 10);
        const suffix = el.dataset.suffix || '';
        if (!target) return;

        counterObserver?.unobserve(el);

        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic for smooth deceleration
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px 0px 0px' });

  counters.forEach(el => {
    // Counters may be inside .reveal elements that start with opacity:0.
    // The reveal observer will make the parent visible first, so we observe
    // the counter itself directly — IntersectionObserver fires based on
    // layout visibility (the element's rect in the viewport), not CSS
    // opacity. Since the parent has transform:translateY(40px) before
    // reveal, we need to re-observe after reveals are triggered.
    // Strategy: observe immediately — the counter will intersect once its
    // parent .reveal gets is-visible and transitions into the viewport.
    counterObserver!.observe(el);
  });
}

// Text-split word-by-word reveal animation
// Note: uses innerHTML to wrap each word in animation spans. This is safe
// because it only processes the element's own textContent (no external input).
export function initTextSplits() {
  document.querySelectorAll('.text-split:not(.is-split)').forEach(el => {
    const text = (el.textContent || '').trim();
    if (!text) return;
    const words = text.split(/\s+/);
    el.innerHTML = words.map((w, i) =>
      `<span style="display:inline-block;overflow:hidden;"><span class="split-word" style="display:inline-block;transform:translateY(100%);opacity:0;transition:transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms, opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms;">${w}</span></span>`
    ).join(' ');
    el.classList.add('is-split');

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.split-word').forEach(w => {
            (w as HTMLElement).style.transform = 'translateY(0)';
            (w as HTMLElement).style.opacity = '1';
          });
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
  });
}

// Dark mode toggle
export function initTheme() {
  const stored = localStorage.getItem('bark-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('bark-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('bark-theme', 'dark');
    }
    updateToggleIcons();
  }

  // Desktop toggle
  const toggle = document.getElementById('theme-toggle');
  toggle?.addEventListener('click', toggleTheme);

  // Mobile toggle(s)
  document.querySelectorAll('.theme-toggle-mobile').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  updateToggleIcons();
}

function updateToggleIcons() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.querySelectorAll('.dark-icon').forEach(el => el.classList.toggle('hidden', !isDark));
  document.querySelectorAll('.light-icon').forEach(el => el.classList.toggle('hidden', isDark));
}

// Initialize all behaviors
export function init() {
  initReveals();
  initCounters();
  initTextSplits();
  initTheme();
}

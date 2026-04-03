// Navigation behavior: scroll hide/show, desktop dropdowns, mobile menu, mobile accordion.
// Theme toggle is handled by init.ts — not duplicated here.

let scrollHandler: (() => void) | null = null;
let outsideClickHandler: (() => void) | null = null;

export function initNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!nav) return;

  // Clean up previous listeners (for astro:page-load re-init)
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
  if (outsideClickHandler) document.removeEventListener('click', outsideClickHandler);

  // --- Scroll behavior: glassmorphism on scroll, hide/show on direction ---
  let lastY = 0;
  let ticking = false;

  scrollHandler = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y > 80) {
        nav.classList.add('bg-bark-50/90', 'backdrop-blur-md', 'shadow-sm');
      } else {
        nav.classList.remove('bg-bark-50/90', 'backdrop-blur-md', 'shadow-sm');
      }
      if (y > lastY && y > 300) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastY = y;
      ticking = false;
    });
  };

  window.addEventListener('scroll', scrollHandler);

  // --- Mobile menu toggle ---
  const iconOpen = btn?.querySelector('.mobile-icon-open');
  const iconClose = btn?.querySelector('.mobile-icon-close');

  btn?.addEventListener('click', () => {
    menu?.classList.toggle('hidden');
    iconOpen?.classList.toggle('hidden');
    iconClose?.classList.toggle('hidden');
  });

  // --- Desktop dropdowns: hover open/close with 150ms delay ---
  const groups = nav.querySelectorAll<HTMLElement>('[data-nav-group]');
  const timers: Record<string, number> = {};

  groups.forEach(group => {
    const idx = group.dataset.navGroup!;
    const panel = group.querySelector<HTMLElement>('[data-group-panel]');
    const chevron = group.querySelector<HTMLElement>('.nav-chevron');

    function show() {
      clearTimeout(timers[idx]);
      // Close all other panels first
      groups.forEach(g => {
        if (g !== group) {
          const p = g.querySelector<HTMLElement>('[data-group-panel]');
          const c = g.querySelector<HTMLElement>('.nav-chevron');
          if (p) { p.classList.add('opacity-0', 'pointer-events-none', 'translate-y-1'); p.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0'); }
          if (c) c.classList.remove('rotate-180');
        }
      });
      if (panel) { panel.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-1'); panel.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0'); }
      if (chevron) chevron.classList.add('rotate-180');
    }

    function hide() {
      timers[idx] = window.setTimeout(() => {
        if (panel) { panel.classList.add('opacity-0', 'pointer-events-none', 'translate-y-1'); panel.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0'); }
        if (chevron) chevron.classList.remove('rotate-180');
      }, 150);
    }

    group.addEventListener('mouseenter', show);
    group.addEventListener('mouseleave', hide);
    // Also support keyboard: toggle on click
    const trigger = group.querySelector<HTMLElement>('[data-group-trigger]');
    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = panel?.classList.contains('opacity-100');
      if (isVisible) hide(); else show();
    });
  });

  // Close all desktop panels on outside click
  outsideClickHandler = () => {
    groups.forEach(g => {
      const p = g.querySelector<HTMLElement>('[data-group-panel]');
      const c = g.querySelector<HTMLElement>('.nav-chevron');
      if (p) { p.classList.add('opacity-0', 'pointer-events-none', 'translate-y-1'); p.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0'); }
      if (c) c.classList.remove('rotate-180');
    });
  };

  document.addEventListener('click', outsideClickHandler);

  // --- Mobile accordion ---
  const mobileGroups = menu?.querySelectorAll<HTMLElement>('[data-mobile-group]');
  mobileGroups?.forEach(mg => {
    const trigger = mg.querySelector<HTMLElement>('[data-mobile-trigger]');
    const panel = mg.querySelector<HTMLElement>('.mobile-accordion-panel');
    const chevron = mg.querySelector<HTMLElement>('.mobile-chevron');

    trigger?.addEventListener('click', () => {
      // Close all other mobile panels
      mobileGroups.forEach(other => {
        if (other !== mg) {
          other.querySelector('.mobile-accordion-panel')?.classList.add('hidden');
          other.querySelector('.mobile-chevron')?.classList.remove('rotate-180');
        }
      });
      panel?.classList.toggle('hidden');
      chevron?.classList.toggle('rotate-180');
    });
  });
}

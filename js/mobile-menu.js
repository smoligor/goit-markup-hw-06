(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  if (!refs.openBtn || !refs.menu) return;

  const toggle = () => {
    const isOpen = refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open', isOpen);
    const btn = isOpen ? refs.closeBtn : refs.openBtn;
    const trigger = refs.openBtn;
    if (trigger) trigger.setAttribute('aria-expanded', String(isOpen));
  };

  refs.openBtn.addEventListener('click', toggle);
  if (refs.closeBtn) refs.closeBtn.addEventListener('click', toggle);

  // Close menu on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && refs.menu.classList.contains('is-open')) toggle();
  });

  // Close when clicking a link inside
  refs.menu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.mobile-nav-link')) toggle();
  });
})();


// ========================
// GABRIEL BARIONI — MAIN JS
// ========================

// --- Custom Cursor ---
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--cx', e.clientX + 'px');
  document.documentElement.style.setProperty('--cy', e.clientY + 'px');
});

// --- Menu Overlay ---
const burgerBtn  = document.getElementById('burgerBtn');
const overlayMenu = document.getElementById('overlayMenu');
const overlayBg   = document.getElementById('overlayBg');
const closeMenu   = document.getElementById('closeMenu');

function openMenu() {
  overlayMenu.classList.add('open');
  overlayBg.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeMenuFn() {
  overlayMenu.classList.remove('open');
  overlayBg.classList.remove('show');
  document.body.style.overflow = '';
}

if (burgerBtn)  burgerBtn.addEventListener('click', openMenu);
if (closeMenu)  closeMenu.addEventListener('click', closeMenuFn);
if (overlayBg)  overlayBg.addEventListener('click', closeMenuFn);

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenuFn();
    closePost();
  }
});

// --- Post Modal ---
const postModal    = document.getElementById('postModal');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

function openPost(slug) {
  const post = POSTS[slug];
  if (!post) return;

  // Scroll modal ao topo
  postModal.scrollTop = 0;

  modalContent.innerHTML = `
    <div class="modal-hero-placeholder" style="background: ${post.bg};">
      ${post.icon}
    </div>
    <span class="modal-category">${post.category}</span>
    <h1 class="modal-title">${post.title}</h1>
    <div class="modal-meta">
      <span>${post.date}</span>
      <span>${post.read}</span>
    </div>
    <div class="modal-text">${post.content}</div>
  `;

  postModal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Atualiza URL sem recarregar
  history.pushState({ slug }, '', `#${slug}`);
}

function closePost() {
  postModal.classList.remove('open');
  document.body.style.overflow = '';
  history.pushState({}, '', window.location.pathname);
}

if (modalClose) modalClose.addEventListener('click', closePost);

// Abrir post direto via hash na URL
window.addEventListener('load', () => {
  const hash = window.location.hash.slice(1);
  if (hash && POSTS[hash]) openPost(hash);
});

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.slug) {
    openPost(e.state.slug);
  } else {
    postModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// --- Scroll reveal cards ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

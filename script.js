/* ================================================================
   PROFILE WEBSITE — script.js
   Multi-page SPA with hash-based routing
   Edit CONFIG below to personalise everything
   ================================================================ */

const CONFIG = {
  // ── Personal Info ──
  name: 'Hoang Dev',
  title: 'Digital Creator | MMO Expert | Tool Maker',
  tagline: 'Tôi xây. Bạn dùng. Cùng kiếm tiền.',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hoang&backgroundColor=1a0a2e',
  aboutAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hoang2&backgroundColor=1a0a2e',

  // ── Social Links ──
  socials: [
    { platform: 'facebook',  name: 'Facebook',  desc: '@HoangDev',       url: 'https://facebook.com/',      icon: 'fa-brands fa-facebook-f',  color: '#1877f2' },
    { platform: 'tiktok',    name: 'TikTok',    desc: '@hoangdev_mmо',   url: 'https://tiktok.com/',        icon: 'fa-brands fa-tiktok',       color: '#ff0050' },
    { platform: 'youtube',   name: 'YouTube',   desc: 'HoangDev Channel', url: 'https://youtube.com/',       icon: 'fa-brands fa-youtube',      color: '#ff0000' },
    { platform: 'instagram', name: 'Instagram', desc: '@hoangdev.ig',    url: 'https://instagram.com/',     icon: 'fa-brands fa-instagram',    color: '#e4405f' },
    { platform: 'telegram',  name: 'Telegram',  desc: 'Nhóm cộng đồng',  url: 'https://t.me/',              icon: 'fa-brands fa-telegram',     color: '#0088cc' },
    { platform: 'discord',   name: 'Discord',   desc: 'Server Discord',   url: 'https://discord.gg/',        icon: 'fa-brands fa-discord',      color: '#5865f2' },
    { platform: 'email',     name: 'Email',     desc: 'contact@example.com', url: 'mailto:contact@example.com', icon: 'fa-solid fa-envelope',   color: '#ffd700' }
  ],

  // ── Products ──
  products: [
    { name: 'Auto Tool Pro',         category: 'tool',     price: '500.000đ',   image: '', description: 'Công cụ tự động hóa mạnh mẽ, tiết kiệm 80% thời gian.' },
    { name: 'Khóa Học MMO A-Z',      category: 'khoa-hoc', price: '1.200.000đ', image: '', description: 'Học kiếm tiền online từ con số 0, có mentor hỗ trợ 1-1.' },
    { name: 'Template Landing Page',  category: 'template', price: '300.000đ',   image: '', description: 'Template web bán hàng chuyên nghiệp, tỷ lệ chuyển đổi cao.' },
    { name: 'Setup VPS & Server',    category: 'dich-vu',  price: 'Liên hệ',    image: '', description: 'Dịch vụ cài đặt và tối ưu server chuyên nghiệp.' },
    { name: 'Bot Telegram Premium',  category: 'tool',     price: '800.000đ',   image: '', description: 'Bot tự động quản lý nhóm Telegram, tích hợp AI.' },
    { name: 'Pack Design Social',    category: 'template', price: '200.000đ',   image: '', description: '100+ mẫu thiết kế đẹp cho tất cả mạng xã hội.' }
  ],

  // ── Bank Accounts ──
  banks: [
    { name: 'Vietcombank', class: 'vietcombank', account: '1234567890123', holder: 'NGUYEN VAN HOANG', logo: 'fa-solid fa-building-columns' },
    { name: 'Techcombank', class: 'techcombank', account: '9876543210987', holder: 'NGUYEN VAN HOANG', logo: 'fa-solid fa-landmark' },
    { name: 'MB Bank',     class: 'mbbank',      account: '5555666677778', holder: 'NGUYEN VAN HOANG', logo: 'fa-solid fa-credit-card' },
    { name: 'MoMo',        class: 'momo',        account: '0987654321',    holder: 'NGUYEN VAN HOANG', logo: 'fa-solid fa-mobile-screen-button' },
    { name: 'TP Bank',     class: 'tpbank',      account: '1112223334445', holder: 'NGUYEN VAN HOANG', logo: 'fa-solid fa-coins' }
  ],

  // ── Projects & Free Tools ──
  projects: [
    { name: 'Auto Click Pro',     icon: 'fa-solid fa-computer-mouse',          desc: 'Công cụ auto click thông minh, hỗ trợ đa tác vụ, lên lịch tự động.',   downloads: 15420, progress: 85, url: '#', free: true },
    { name: 'SEO Checker Tool',   icon: 'fa-solid fa-magnifying-glass-chart',  desc: 'Kiểm tra SEO website trong 30 giây, báo cáo 50+ chỉ số chi tiết.',     downloads: 8930,  progress: 72, url: '#', free: true },
    { name: 'Thumbnail Maker',    icon: 'fa-solid fa-wand-magic-sparkles',     desc: 'Tạo thumbnail YouTube chuyên nghiệp, 200+ template sẵn có.',            downloads: 22100, progress: 95, url: '#', free: true },
    { name: 'Link Shortener',     icon: 'fa-solid fa-link',                   desc: 'Rút gọn link thông minh với tracking UTM và analytics chi tiết.',        downloads: 31500, progress: 90, url: '#', free: true },
    { name: 'Password Generator', icon: 'fa-solid fa-shield-halved',          desc: 'Tạo mật khẩu siêu mạnh với entropy cực cao, không lưu server.',          downloads: 12800, progress: 68, url: '#', free: true },
    { name: 'Color Palette AI',   icon: 'fa-solid fa-swatchbook',             desc: 'AI tạo bảng màu hoàn hảo, xuất sang CSS/Figma/Sketch trong 1 click.',   downloads: 9400,  progress: 60, url: '#', free: true }
  ],

  // ── Skills ──
  skills: [
    { icon: 'fa-solid fa-money-bill-trend-up', title: 'MMO / Affiliate',  level: 'Expert',      pct: 95, desc: 'Dropship, affiliate marketing, CPA, email marketing, traffic.' },
    { icon: 'fa-solid fa-code',                title: 'Web Development',  level: 'Advanced',    pct: 85, desc: 'HTML/CSS/JS, Node.js, React, REST API, responsive design.' },
    { icon: 'fa-solid fa-robot',               title: 'Bot & Automation', level: 'Expert',      pct: 92, desc: 'Telegram bot, auto click, web scraping, workflow automation.' },
    { icon: 'fa-solid fa-palette',             title: 'UI/UX Design',     level: 'Intermediate',pct: 75, desc: 'Figma, Photoshop, Canva, landing page, thumbnail design.' },
    { icon: 'fa-solid fa-server',              title: 'DevOps / VPS',     level: 'Advanced',    pct: 80, desc: 'Linux, Nginx, Docker, Cloudflare, server setup & optimization.' },
    { icon: 'fa-solid fa-bullhorn',            title: 'Digital Marketing',level: 'Advanced',    pct: 88, desc: 'Facebook Ads, TikTok Ads, SEO, content marketing, viral growth.' }
  ],

  // ── Tech Stack ──
  techStack: [
    { name: 'HTML5',       icon: 'fa-brands fa-html5',      featured: true  },
    { name: 'CSS3',        icon: 'fa-brands fa-css3-alt',   featured: true  },
    { name: 'JavaScript',  icon: 'fa-brands fa-js',         featured: true  },
    { name: 'Node.js',     icon: 'fa-brands fa-node-js',    featured: true  },
    { name: 'Python',      icon: 'fa-brands fa-python',     featured: false },
    { name: 'Git',         icon: 'fa-brands fa-git-alt',    featured: false },
    { name: 'Linux',       icon: 'fa-brands fa-linux',      featured: false },
    { name: 'Docker',      icon: 'fa-brands fa-docker',     featured: false },
    { name: 'WordPress',   icon: 'fa-brands fa-wordpress',  featured: false },
    { name: 'Figma',       icon: 'fa-brands fa-figma',      featured: false },
    { name: 'Cloudflare',  icon: 'fa-solid fa-cloud',       featured: false },
    { name: 'Telegram API',icon: 'fa-brands fa-telegram',   featured: false }
  ],

  // ── Analytics (placeholders — replace with real IDs) ──
  googleAnalyticsId: 'G-XXXXXXXXXX',
  facebookPixelId:   'XXXXXXXXXXXXXXX'
};

// ────────────────────────────────────────────────────────────
// 2. SOUND MANAGER
// ────────────────────────────────────────────────────────────
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }
  _resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  _play(freq, type, duration, gainStart, gainEnd) {
    if (!this.enabled || !this.ctx) return;
    this._resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(gainStart, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(gainEnd || 0.01, this.ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }
  playClick() {
    this._play(800, 'square', 0.06, 0.05);
  }
  playHover() {
    this._play(600, 'sine', 0.09, 0.02);
  }
  playWhoosh() {
    if (!this.enabled || !this.ctx) return;
    this._resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.setTargetAtTime(100, this.ctx.currentTime, 0.1);
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }
  playDing() {
    if (!this.enabled || !this.ctx) return;
    this._resume();
    [1200, 1500].forEach(f => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    });
  }
  playCopy() {
    if (!this.enabled || !this.ctx) return;
    this._resume();
    [800, 1000, 1200].forEach((f, i) => {
      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
      }, i * 100);
    });
  }
}

const soundManager = new SoundManager();

// ────────────────────────────────────────────────────────────
// 3. PRELOADER
// ────────────────────────────────────────────────────────────
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
      preloader.remove();
    }, 600);
  }, 2000);
}

// ────────────────────────────────────────────────────────────
// 4. SPA ROUTER
// ────────────────────────────────────────────────────────────
const PAGES = ['home', 'social', 'shop', 'banking', 'projects'];
const DEFAULT_PAGE = 'home';
let currentPage = null;

function navigateTo(pageId, pushState = true) {
  if (!PAGES.includes(pageId)) pageId = DEFAULT_PAGE;
  if (currentPage === pageId) return;
  
  // Hide current page
  if (currentPage) {
    const oldEl = document.getElementById('page-' + currentPage);
    if (oldEl) {
      oldEl.classList.remove('active');
    }
  }
  
  // Show new page with animation
  const newEl = document.getElementById('page-' + pageId);
  if (newEl) {
    newEl.classList.add('active', 'page-enter');
    // Remove animation class after it plays
    newEl.addEventListener('animationend', () => newEl.classList.remove('page-enter'), { once: true });
  }
  
  currentPage = pageId;
  
  // Update URL hash
  if (pushState) {
    window.location.hash = pageId;
  }
  
  // Update navbar active states
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
  
  // Re-run scroll animations for new page
  setTimeout(() => {
    initScrollAnimationsOnPage(newEl);
    // Animate progress bars on projects page
    if (pageId === 'projects') animateProgressBars();
    if (pageId === 'home') {
      animateCounters();
      animateSkillBars();
    }
  }, 100);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Sound
  soundManager.playWhoosh();
  
  // Close mobile menu
  closeMobileMenu();
}

function initRouter() {
  // Handle initial load
  const hash = window.location.hash.replace('#', '') || DEFAULT_PAGE;
  navigateTo(hash, false);
  
  // Handle hash change (browser back/forward)
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || DEFAULT_PAGE;
    navigateTo(hash, false);
  });
  
  // Handle nav link clicks
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-page]');
    if (!link) return;
    const pageId = link.dataset.page;
    if (!pageId || !PAGES.includes(pageId)) return;
    e.preventDefault();
    navigateTo(pageId);
  });
}

// ────────────────────────────────────────────────────────────
// 5. THEME TOGGLE
// ────────────────────────────────────────────────────────────
function initTheme() {
  const isLight = localStorage.getItem('theme') === 'light';
  if (isLight) {
    document.body.classList.add('light-mode');
    const icon = document.querySelector('.theme-toggle i');
    if (icon) icon.className = 'fa-solid fa-sun';
  }
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  const icon = document.querySelector('.theme-toggle i');
  if (icon) icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  soundManager.playClick();
}

// ────────────────────────────────────────────────────────────
// 7. SOUND TOGGLE
// ────────────────────────────────────────────────────────────
function initSoundPref() {
  const isMuted = localStorage.getItem('sound') === 'muted';
  soundManager.enabled = !isMuted;
  const icon = document.querySelector('.sound-toggle i');
  if (icon) icon.className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
}

function toggleSound() {
  soundManager.enabled = !soundManager.enabled;
  localStorage.setItem('sound', soundManager.enabled ? 'enabled' : 'muted');
  const icon = document.querySelector('.sound-toggle i');
  if (icon) icon.className = soundManager.enabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
  if (soundManager.enabled) soundManager.playClick();
}

// ────────────────────────────────────────────────────────────
// 8. DYNAMIC RENDERING FUNCTIONS
// ────────────────────────────────────────────────────────────
function renderSocialCards() {
  const grid = document.getElementById('social-grid');
  const footerGrid = document.getElementById('footer-socials');
  if (!grid || !footerGrid) return;
  
  grid.innerHTML = CONFIG.socials.map(s => `
    <a href="${s.url}" target="_blank" class="social-card scroll-animate" data-platform="${s.platform}">
      <div class="social-icon"><i class="${s.icon}"></i></div>
      <span class="social-name">${s.name}</span>
      <span class="social-desc">${s.desc}</span>
    </a>
  `).join('');
  
  footerGrid.innerHTML = CONFIG.socials.slice(0, 5).map(s => `
    <a href="${s.url}" target="_blank" class="footer-social-link" title="${s.name}" data-cursor="pointer">
      <i class="${s.icon}"></i>
    </a>
  `).join('');
}

function renderProducts() {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;
  
  grid.innerHTML = CONFIG.products.map(p => {
    let imgHTML;
    if (p.image) {
      imgHTML = `<div class="product-image"><img src="${p.image}" alt="${p.name}"></div>`;
    } else {
      let icon = 'fa-solid fa-box';
      if (p.category === 'khoa-hoc') icon = 'fa-solid fa-graduation-cap';
      if (p.category === 'tool') icon = 'fa-solid fa-screwdriver-wrench';
      if (p.category === 'template') icon = 'fa-solid fa-palette';
      if (p.category === 'dich-vu') icon = 'fa-solid fa-gears';
      imgHTML = `<div class="product-image placeholder"><i class="${icon}"></i></div>`;
    }
    
    return `
      <div class="product-card scroll-animate" data-category="${p.category}">
        ${imgHTML}
        <div class="product-info">
          <div class="product-category">${p.category.replace('-', ' ')}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-price">${p.price}</div>
          <button class="product-btn" data-cursor="pointer">Mua ngay</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderBankCards() {
  const carousel = document.getElementById('bank-carousel');
  if (!carousel) return;
  
  function maskAccount(acc) {
    if (acc.length <= 4) return acc;
    return '**** **** ' + acc.slice(-4);
  }
  
  carousel.innerHTML = CONFIG.banks.map(b => `
    <div class="bank-card ${b.class} scroll-animate">
      <div class="bank-header">
        <div class="bank-logo"><i class="${b.logo}"></i></div>
        <div class="bank-name">${b.name}</div>
      </div>
      <div class="bank-account-number">${maskAccount(b.account)}</div>
      <div class="bank-bottom">
        <div class="bank-holder">${b.holder}</div>
        <button class="copy-btn" data-account="${b.account}" data-cursor="pointer">
          <i class="fa-regular fa-copy"></i> Copy
        </button>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  function formatDownloads(n) {
    return n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;
  }
  
  grid.innerHTML = CONFIG.projects.map(p => `
    <div class="project-card scroll-animate">
      ${p.free ? `<div class="project-badge free">MIỄN PHÍ</div>` : ''}
      <div class="project-icon">
        <i class="${p.icon}"></i>
      </div>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      
      <div class="project-meta">
        <div class="project-downloads">
          <i class="fa-solid fa-download"></i> ${formatDownloads(p.downloads)} lượt tải
        </div>
      </div>
      
      <div class="progress-bar">
        <div class="progress-fill" style="width: 0%" data-pct="${p.progress}"></div>
      </div>
      
      <button class="project-btn" data-url="${p.url}" data-cursor="pointer">
        ${p.free ? '<i class="fa-solid fa-cloud-arrow-down"></i> Tải xuống' : '<i class="fa-solid fa-arrow-up-right-from-square"></i> Dùng thử'}
      </button>
    </div>
  `).join('');
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  
  grid.innerHTML = CONFIG.skills.map(s => `
    <div class="skill-card scroll-animate">
      <div class="skill-header">
        <div class="skill-icon"><i class="${s.icon}"></i></div>
        <div>
          <h3 class="skill-title">${s.title}</h3>
          <div class="skill-level">${s.level}</div>
        </div>
      </div>
      <p class="skill-desc">${s.desc}</p>
      <div class="skill-bar">
        <div class="skill-fill" style="width: 0%" data-pct="${s.pct}"></div>
      </div>
    </div>
  `).join('');
}

function renderTechStack() {
  const grid = document.getElementById('tech-grid');
  if (!grid) return;
  
  grid.innerHTML = CONFIG.techStack.map(t => `
    <div class="tech-badge scroll-animate ${t.featured ? 'featured' : ''}" data-cursor="pointer">
      <i class="${t.icon}"></i> ${t.name}
    </div>
  `).join('');
}

// ────────────────────────────────────────────────────────────
// 9. PRODUCT FILTER
// ────────────────────────────────────────────────────────────
function initProductFilter() {
  const filters = document.getElementById('shop-filters');
  if (!filters) return;
  
  filters.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    
    soundManager.playClick();
    
    filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const category = btn.dataset.category;
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
        setTimeout(() => card.style.opacity = '1', 50);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
}

// ────────────────────────────────────────────────────────────
// 10. BANK COPY
// ────────────────────────────────────────────────────────────
function initBankCopy() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    
    const account = btn.dataset.account;
    const originalHTML = btn.innerHTML;
    
    navigator.clipboard.writeText(account).then(() => {
      soundManager.playCopy();
      soundManager.playDing();
      
      btn.innerHTML = 'ĐÃ COPY!';
      btn.classList.add('copied');
      
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('copied');
      }, 2000);
      
      showToast(`SAO CHÉP: ${account}`);
    }).catch(() => {
      showToast('LỖI: KHÔNG THỂ SAO CHÉP');
    });
  });
}

// ────────────────────────────────────────────────────────────
// 11. PROJECT CARD CLICK
// ────────────────────────────────────────────────────────────
function initProjectCards() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.project-btn');
    if (!btn) return;
    
    soundManager.playClick();
    const url = btn.dataset.url;
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener');
      return;
    }
    
    const card = btn.closest('.project-card');
    const name = card?.querySelector('.project-name')?.textContent || 'Project';
    const desc = card?.querySelector('.project-desc')?.textContent || '';
    const iconEl = card?.querySelector('.project-icon');
    const iconHTML = iconEl ? iconEl.innerHTML : '<i class="fa-solid fa-folder"></i>';
    
    showModal(
      name,
      `<div style="font-size:3rem;margin-bottom:16px;color:var(--accent-cyan);text-align:center;">${iconHTML}</div>
       <p style="text-align:center;color:var(--text-secondary);margin-bottom:20px;">${desc}</p>
       <p style="text-align:center;color:var(--accent-gold);font-size:0.9rem;"><i class="fa-solid fa-clock"></i> Tính năng đang được phát triển. Hãy quay lại sau!</p>`
    );
  });
}

// ────────────────────────────────────────────────────────────
// 12. SCROLL ANIMATIONS
// ────────────────────────────────────────────────────────────
function initScrollAnimationsOnPage(container) {
  if (!container) return;
  const els = container.querySelectorAll('.scroll-animate:not(.visible)');
  if (!els.length) return;
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || '0', 10);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  els.forEach(el => observer.observe(el));
}

// ────────────────────────────────────────────────────────────
// 13. ANIMATE COUNTERS
// ────────────────────────────────────────────────────────────
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    if (counter.dataset.animated) return;
    const target = +counter.dataset.target;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const update = () => {
      start += increment;
      if (start < target) {
        counter.textContent = Math.ceil(start);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
        counter.dataset.animated = 'true';
      }
    };
    
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        update();
        observer.disconnect();
      }
    });
    observer.observe(counter);
  });
}

// ────────────────────────────────────────────────────────────
// 14. ANIMATE SKILL BARS
// ────────────────────────────────────────────────────────────
function animateSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pct = entry.target.dataset.pct;
        if (pct) entry.target.style.width = pct + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  fills.forEach(fill => {
    fill.style.width = '0%';
    observer.observe(fill);
  });
}

// ────────────────────────────────────────────────────────────
// 15. ANIMATE PROGRESS BARS
// ────────────────────────────────────────────────────────────
function animateProgressBars() {
  const fills = document.querySelectorAll('.progress-fill');
  fills.forEach(fill => {
    const pct = fill.dataset.pct;
    if (pct) {
      fill.style.width = '0%';
      setTimeout(() => fill.style.width = pct + '%', 100);
    }
  });
}

// ────────────────────────────────────────────────────────────
// 16. PARTICLES
// ────────────────────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  
  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 35 : 70;
  const CONNECT_DIST = 120;
  const colors = [
    'rgba(0,245,255,0.6)',
    'rgba(139,92,246,0.5)',
    'rgba(255,215,0,0.45)',
    'rgba(236,72,153,0.4)'
  ];
  
  let W, H;
  const particles = [];
  
  function resize() {
    W = canvas.width = container.offsetWidth;
    H = canvas.height = container.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  class Particle {
    constructor() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 2.5 + 1;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  
  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
  
  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139,92,246,${0.15 * (1 - dist / CONNECT_DIST)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(loop);
  }
  loop();
}

// ────────────────────────────────────────────────────────────
// 17. NAVBAR
// ────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      soundManager.playClick();
    });
  }
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger) hamburger.classList.remove('active');
  if (navLinks) navLinks.classList.remove('active');
}

// ────────────────────────────────────────────────────────────
// 18. BACK TO TOP
// ────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundManager.playWhoosh();
  });
}

// ────────────────────────────────────────────────────────────
// 19. MODAL
// ────────────────────────────────────────────────────────────
function showModal(title, content) {
  const old = document.querySelector('.modal-overlay');
  if (old) old.remove();
  
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" aria-label="Đóng"><i class="fa-solid fa-xmark"></i></button>
      <h2 class="modal-title" style="font-family:'Space Grotesk',sans-serif;font-size:1.4rem;font-weight:700;margin-bottom:16px;padding-right:40px;">${title}</h2>
      <div class="modal-body">${content}</div>
    </div>`;
  document.body.appendChild(overlay);
  
  overlay.offsetHeight; // reflow
  requestAnimationFrame(() => overlay.classList.add('active'));
  
  const close = () => {
    overlay.classList.remove('active');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 500);
    soundManager.playClick();
  };
  
  overlay.querySelector('.modal-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  const onKey = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } };
  document.addEventListener('keydown', onKey);
}

// ────────────────────────────────────────────────────────────
// 20. TOAST
// ────────────────────────────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ────────────────────────────────────────────────────────────
// 21. HOVER SOUNDS
// ────────────────────────────────────────────────────────────
function initHoverSounds() {
  let lastHover = 0;
  const DEBOUNCE = 80;
  
  document.addEventListener('mouseenter', e => {
    if (!e.target.closest('.social-card, .product-card, .project-card, .bank-card, .skill-card, .tech-badge')) return;
    const now = Date.now();
    if (now - lastHover < DEBOUNCE) return;
    lastHover = now;
    soundManager.playHover();
  }, true);
}

// ────────────────────────────────────────────────────────────
// 22. ANALYTICS PLACEHOLDERS
// ────────────────────────────────────────────────────────────
function initAnalytics() {
  if (CONFIG.googleAnalyticsId && CONFIG.googleAnalyticsId !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalyticsId}`;
    document.head.appendChild(script);
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', CONFIG.googleAnalyticsId);
    };
  }
  
  if (CONFIG.facebookPixelId && CONFIG.facebookPixelId !== 'XXXXXXXXXXXXXXX') {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', CONFIG.facebookPixelId);
    window.fbq('track', 'PageView');
    /* eslint-enable */
  }
}

// ────────────────────────────────────────────────────────────
// 23. INITIALIZATION
// ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // 1. Preloader
  initPreloader();
  
  // 2. Audio
  soundManager.init();
  initSoundPref();
  
  // 3. Theme
  initTheme();
  
  // 4. Render dynamic content
  renderSocialCards();
  renderProducts();
  renderBankCards();
  renderProjects();
  renderSkills();
  renderTechStack();
  
  // 5. Populate info
  const heroAvatar = document.getElementById('hero-avatar');
  if (heroAvatar) heroAvatar.src = CONFIG.avatar;
  const aboutAvatar = document.getElementById('about-avatar');
  if (aboutAvatar) aboutAvatar.src = CONFIG.aboutAvatar;
  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = CONFIG.name;
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) heroTitle.textContent = CONFIG.title;
  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) heroTagline.textContent = '"' + CONFIG.tagline + '"';
  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();
  
  // 6. SPA Router
  initRouter();
  
  // 7. UI modules
  initNavbar();
  initParticles();
  initBackToTop();
  
  // 8. Event handlers
  initProductFilter();
  initBankCopy();
  initProjectCards();
  initHoverSounds();
  
  // 9. Buttons
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('sound-toggle')?.addEventListener('click', toggleSound);
  
  // 10. Resume audio context
  const resumeAudio = () => soundManager._resume();
  document.addEventListener('click', resumeAudio, { once: true });
  document.addEventListener('touchstart', resumeAudio, { once: true });
  
  // 11. Analytics
  initAnalytics();
});

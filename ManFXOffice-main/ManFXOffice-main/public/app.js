// ============================================================
// GAME LAUNCHER
// ============================================================
let currentGameUrl = '';

function gameLaunch(url, name, title) {
  currentGameUrl = url;
  const lobby = document.getElementById('game-lobby');
  const player = document.getElementById('game-player');
  const frame = document.getElementById('game-frame');
  const titleEl = document.getElementById('game-player-title');
  const fsLink = document.getElementById('game-fullscreen-link');
  if (!lobby || !player || !frame) return;
  titleEl.textContent = title || name;
  fsLink.href = url;
  frame.src = url;
  lobby.classList.add('hidden');
  player.classList.remove('hidden');
  player.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function gameReset() {
  const frame = document.getElementById('game-frame');
  if (frame && currentGameUrl) frame.src = currentGameUrl;
}

function gameClose() {
  const lobby = document.getElementById('game-lobby');
  const player = document.getElementById('game-player');
  const frame = document.getElementById('game-frame');
  if (!lobby || !player || !frame) return;
  frame.src = '';
  currentGameUrl = '';
  player.classList.add('hidden');
  lobby.classList.remove('hidden');
  lobby.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
/*
• Jasa pembuatan website 
• Menerima perbaikan script atau fitur bot
• Menerima pembuatan fitur bot
• Menerima semua kebutuhan bot
• Menerima dia dengan segala kekurangannya;)
ℹ️ Information

• Bisa bayar di awal atau akhir
• Pembayaran melalu QRIS Only
• Testimoni Banyak

Kontak: wa.me/6282389924037
t.me/VynaaValerie
*/
// ============================================================
// Boot sequence data injected by server
const bootSequence = window.__MFX_BOOT__ || [];
let bootIndex = 0;
const bootTextEl = document.getElementById('boot-text');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const statusText = document.getElementById('loading-status');

function runBootSequence() {
  if (bootIndex < bootSequence.length) {
    const line = document.createElement('div');
    line.textContent = '> ' + bootSequence[bootIndex];
    bootTextEl.appendChild(line);
    bootTextEl.scrollTop = bootTextEl.scrollHeight;
    statusText.textContent = bootSequence[bootIndex].split('...')[0] + '...';
    let progress = Math.floor((bootIndex / (bootSequence.length - 1)) * 100);
    progressBar.style.width = progress + '%';
    progressText.textContent = progress + '%';
    bootIndex++;
    setTimeout(runBootSequence, Math.random() * 200 + 100);
  } else {
    setTimeout(() => {
      const ls = document.getElementById('loading-screen');
      ls.style.opacity = '0';
      ls.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        ls.style.display = 'none';
        document.getElementById('welcome-screen').style.display = 'flex';
      }, 500);
    }, 800);
  }
}
window.addEventListener('load', () => setTimeout(runBootSequence, 500));

// NAVIGATION
function enterPortal() {
  const welcome = document.getElementById('welcome-screen');
  welcome.classList.add('opacity-0');
  welcome.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  welcome.style.transform = 'scale(1.1)';
  setTimeout(() => {
    welcome.style.display = 'none';
    const app = document.getElementById('app-ui');
    app.style.display = 'flex';
    void app.offsetWidth;
    app.classList.add('animate-fade-in');
  }, 800);
}

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section-container');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

function navigate(targetId) {
  navLinks.forEach(link => link.classList.remove('active'));
  sections.forEach(sec => {
    sec.classList.remove('active');
    setTimeout(() => { if (!sec.classList.contains('active')) sec.style.display = 'none'; }, 400);
  });
  const activeLink = document.querySelector('.nav-link[data-target="' + targetId + '"]');
  if (activeLink) activeLink.classList.add('active');
  const targetSec = document.getElementById(targetId);
  if (targetSec) {
    targetSec.style.display = 'block';
    setTimeout(() => targetSec.classList.add('active'), 50);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (window.innerWidth < 768) {
    sidebar.classList.add('-translate-x-full');
    if (overlay) overlay.classList.add('hidden');
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navigate(link.getAttribute('data-target'));
  });
});

// MOBILE MENU
function openSidebar() {
  sidebar.scrollTop = 0;
  sidebar.classList.remove('-translate-x-full');
  if (overlay) overlay.classList.remove('hidden');
}
function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  if (overlay) overlay.classList.add('hidden');
}
document.getElementById('mobile-menu-btn').addEventListener('click', openSidebar);
document.getElementById('close-menu-btn').addEventListener('click', closeSidebar);

// COPY TEXT
function copyText(text, btnElement) {
  const original = btnElement.innerHTML;
  function onSuccess() {
    btnElement.innerHTML = '<i class="ph-fill ph-check" style="color:#e8e8ec"></i>';
    setTimeout(() => { btnElement.innerHTML = original; }, 2000);
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackCopy(text, onSuccess));
  } else {
    fallbackCopy(text, onSuccess);
  }
}
function fallbackCopy(text, onSuccess) {
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.cssText = 'position:fixed;top:0;left:0;width:2em;height:2em;opacity:0;';
  document.body.appendChild(el);
  el.focus();
  el.select();
  el.setSelectionRange(0, el.value.length);
  try { document.execCommand('copy'); onSuccess(); } catch(e) {}
  document.body.removeChild(el);
}

// MESSAGE BOX
const msgBox = document.getElementById('msg-box');
const msgContent = document.getElementById('msg-content');
function showMessage(title, desc) {
  document.getElementById('msg-title').textContent = title;
  document.getElementById('msg-desc').textContent = desc;
  msgBox.style.display = 'flex';
  void msgBox.offsetWidth;
  msgBox.classList.remove('opacity-0');
  msgContent.classList.remove('scale-95');
}
function closeMessage() {
  msgBox.classList.add('opacity-0');
  msgContent.classList.add('scale-95');
  setTimeout(() => { msgBox.style.display = 'none'; }, 300);
}

// FAQ TOGGLE
function toggleFAQ(element) {
  const content = element.querySelector('.faq-content');
  const icon = element.querySelector('.ph-caret-down');
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.style.transform = 'rotate(0deg)';
  } else {
    document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = null);
    document.querySelectorAll('.ph-caret-down').forEach(el => el.style.transform = 'rotate(0deg)');
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}

// AUDIO TOGGLE
let isPlaying = true;
function toggleAudio(btn) {
  const icon = btn.querySelector('i');
  const dot = document.querySelector('.animate-pulse');
  isPlaying = !isPlaying;
  if (isPlaying) {
    icon.className = 'ph-fill ph-speaker-high';
    if (dot) dot.style.display = 'inline';
  } else {
    icon.className = 'ph-fill ph-speaker-slash';
    if (dot) dot.style.display = 'none';
  }
}

// STAR RATING
const stars = document.querySelectorAll('#rating-stars i');
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('text-mfx-border', i > index);
      s.classList.toggle('text-mfx-primary', i <= index);
    });
  });
});

// ================= QRIS PAYMENT =================
let qrisDepositId = null;
let qrisTimerInterval = null;
let qrisPollInterval = null;

function qrisShow(section) {
  document.getElementById('qris-loading').classList.add('hidden');
  document.getElementById('qris-result').classList.add('hidden');
  document.getElementById('qris-error').classList.add('hidden');
  if (section) document.getElementById('qris-' + section).classList.remove('hidden');
}

function qrisFormatRp(n) {
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}

function qrisStartTimer(expiredAt) {
  clearInterval(qrisTimerInterval);
  const timerEl = document.getElementById('qris-timer');
  function tick() {
    const diff = new Date(expiredAt) - Date.now();
    if (diff <= 0) {
      timerEl.textContent = 'EXPIRED';
      timerEl.style.color = '#ef4444';
      clearInterval(qrisTimerInterval);
      clearInterval(qrisPollInterval);
      document.getElementById('qris-status').textContent = '⌛ EXPIRED';
      document.getElementById('qris-status').style.color = '#ef4444';
      return;
    }
    const m = Math.floor(diff / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    timerEl.textContent = 'Tamat dalam ' + m + 'm ' + (s < 10 ? '0' + s : s) + 's';
  }
  tick();
  qrisTimerInterval = setInterval(tick, 1000);
}

let qrisSuccessCountdown = null;

function qrisSetStatus(status) {
  const el = document.getElementById('qris-status');
  const map = {
    Success: { label: '✅ BERJAYA', color: '#22c55e' },
    Pending: { label: '⏳ MENUNGGU', color: '#e8e8ec' },
    Failed:  { label: '❌ GAGAL', color: '#ef4444' },
    Expired: { label: '⌛ TAMAT', color: '#f97316' },
    Canceled:{ label: '❌ DIBATAL', color: '#ef4444' },
  };
  const s = map[status] || { label: status, color: '#e8e8ec' };
  el.textContent = s.label;
  el.style.color = s.color;
  if (status === 'Success') {
    clearInterval(qrisPollInterval);
    clearInterval(qrisTimerInterval);
    document.getElementById('qris-timer').textContent = '✅ PEMBAYARAN DITERIMA';
    document.getElementById('qris-timer').style.color = '#22c55e';
    qrisStartSuccessRedirect();
  }
}

function qrisStartSuccessRedirect() {
  if (qrisSuccessCountdown) return;
  const banner = document.getElementById('qris-success-banner');
  const countEl = document.getElementById('qris-countdown');
  banner.classList.remove('hidden');
  let sec = 10;
  countEl.textContent = sec;
  qrisSuccessCountdown = setInterval(() => {
    sec--;
    countEl.textContent = sec;
    if (sec <= 0) {
      clearInterval(qrisSuccessCountdown);
      qrisSuccessCountdown = null;
      qrisReset();
      navigate('hubungi');
    }
  }, 1000);
}

function qrisDownload() {
  const img = document.getElementById('qris-img');
  if (!img.src || img.src === window.location.href) return;
  const src = img.src;
  const filename = 'QRIS-MannForceX-' + (qrisDepositId || 'payment') + '.png';
  if (src.startsWith('data:')) {
    const parts = src.split(',');
    const mime = parts[0].match(/:(.*?);/)[1];
    const binary = atob(parts[1]);
    const arr = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) arr[i] = binary.charCodeAt(i);
    const blob = new Blob([arr], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  } else {
    window.open(src, '_blank');
  }
}

async function qrisCreate() {
  const amount = parseInt(document.getElementById('qris-amount').value.replace(/[^0-9]/g, ''));
  if (!amount || amount < 500) {
    alert('Jumlah minimum adalah 500 IDR');
    return;
  }
  qrisShow('loading');
  document.getElementById('qris-form').classList.add('opacity-50', 'pointer-events-none');
  clearInterval(qrisPollInterval);
  clearInterval(qrisTimerInterval);
  try {
    const res = await fetch('/api/qris/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'amount=' + amount,
    });
    const data = await res.json();
    document.getElementById('qris-form').classList.remove('opacity-50', 'pointer-events-none');
    if (!data.status) {
      document.getElementById('qris-errmsg').textContent = data.data?.msg || data.msg || 'Ralat tidak diketahui';
      qrisShow('error');
      return;
    }
    const d = data.data;
    qrisDepositId = d.deposit_id;
    document.getElementById('qris-id').textContent = d.deposit_id;
    document.getElementById('qris-amt').textContent = qrisFormatRp(d.amount);
    document.getElementById('qris-fee').textContent = qrisFormatRp(d.fee);
    document.getElementById('qris-total').textContent = qrisFormatRp(d.total_amount);
    qrisSetStatus('Pending');
    document.getElementById('qris-link').href = d.payment_url || '#';
    const img = document.getElementById('qris-img');
    if (d.qris_image_base64) {
      img.src = d.qris_image_base64.startsWith('data:') ? d.qris_image_base64 : 'data:image/png;base64,' + d.qris_image_base64;
    } else {
      img.src = '';
      img.alt = 'Guna link di bawah';
    }
    qrisShow('result');
    if (d.expired_at) qrisStartTimer(d.expired_at);
    qrisPollInterval = setInterval(() => qrisCheck(true), 10000);
  } catch (e) {
    document.getElementById('qris-form').classList.remove('opacity-50', 'pointer-events-none');
    document.getElementById('qris-errmsg').textContent = e.message;
    qrisShow('error');
  }
}

async function qrisCheck(silent) {
  if (!qrisDepositId) return;
  if (!silent) {
    const btn = document.getElementById('qris-check-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="ph-bold ph-arrows-clockwise animate-spin"></i> Checking...';
  }
  try {
    const res = await fetch('/api/qris/check?id=' + qrisDepositId);
    const data = await res.json();
    if (data.status && data.data) {
      qrisSetStatus(data.data.status);
    }
  } catch (e) {}
  if (!silent) {
    const btn = document.getElementById('qris-check-btn');
    btn.disabled = false;
    btn.innerHTML = '<i class="ph-bold ph-arrows-clockwise"></i> Cek Status';
  }
}

function qrisCancelRedirect() {
  clearInterval(qrisSuccessCountdown);
  qrisSuccessCountdown = null;
  const banner = document.getElementById('qris-success-banner');
  if (banner) banner.classList.add('hidden');
}

// ================= EWALLET (DANA/OVO) PAYMENT =================
let ewMethod = 'dana';
let ewDepositId = null;
let ewTimerInterval = null;
let ewPollInterval = null;
let ewSuccessCountdown = null;

function ewalletSetMethod(method, btn) {
  ewMethod = method;
  document.querySelectorAll('.ew-tab').forEach(t => {
    t.classList.remove('border-blue-400', 'bg-blue-400/20', 'text-blue-300');
    t.classList.add('border-mfx-border', 'text-mfx-textMuted');
  });
  btn.classList.add('border-blue-400', 'bg-blue-400/20', 'text-blue-300');
  btn.classList.remove('border-mfx-border', 'text-mfx-textMuted');
  document.getElementById('ew-btn-text').textContent = 'BAYAR DENGAN ' + method.toUpperCase();
}

function ewalletShow(section) {
  ['ew-loading', 'ew-result', 'ew-error'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  if (section) document.getElementById('ew-' + section).classList.remove('hidden');
}

function ewalletFormatRp(n) {
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}

function ewalletStartTimer(expiredAt) {
  clearInterval(ewTimerInterval);
  const timerEl = document.getElementById('ew-timer');
  function tick() {
    const diff = new Date(expiredAt) - Date.now();
    if (diff <= 0) {
      timerEl.textContent = 'EXPIRED';
      timerEl.style.color = '#ef4444';
      clearInterval(ewTimerInterval);
      clearInterval(ewPollInterval);
      document.getElementById('ew-status').textContent = '⌛ EXPIRED';
      document.getElementById('ew-status').style.color = '#ef4444';
      return;
    }
    const m = Math.floor(diff / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    timerEl.textContent = m + 'm ' + (s < 10 ? '0' + s : s) + 's';
  }
  tick();
  ewTimerInterval = setInterval(tick, 1000);
}

function ewalletSetStatus(status) {
  const el = document.getElementById('ew-status');
  const map = {
    Success:    { label: '✅ BERJAYA', color: '#22c55e' },
    Pending:    { label: '⏳ MENUNGGU', color: '#93c5fd' },
    Processing: { label: '🔄 DIPROSES', color: '#fbbf24' },
    Failed:     { label: '❌ GAGAL', color: '#ef4444' },
    Expired:    { label: '⌛ TAMAT', color: '#f97316' },
    Canceled:   { label: '❌ DIBATAL', color: '#ef4444' },
  };
  const s = map[status] || { label: status, color: '#e8e8ec' };
  el.textContent = s.label;
  el.style.color = s.color;
  if (status === 'Success') {
    clearInterval(ewPollInterval);
    clearInterval(ewTimerInterval);
    document.getElementById('ew-timer').textContent = '✅ SELESAI';
    document.getElementById('ew-timer').style.color = '#22c55e';
    ewalletStartSuccessRedirect();
  }
}

function ewalletStartSuccessRedirect() {
  if (ewSuccessCountdown) return;
  const banner = document.getElementById('ew-success-banner');
  const countEl = document.getElementById('ew-countdown');
  banner.classList.remove('hidden');
  let sec = 10;
  countEl.textContent = sec;
  ewSuccessCountdown = setInterval(() => {
    sec--;
    countEl.textContent = sec;
    if (sec <= 0) {
      clearInterval(ewSuccessCountdown);
      ewSuccessCountdown = null;
      ewalletReset();
      navigate('hubungi');
    }
  }, 1000);
}

function ewalletCancelRedirect() {
  clearInterval(ewSuccessCountdown);
  ewSuccessCountdown = null;
  const banner = document.getElementById('ew-success-banner');
  if (banner) banner.classList.add('hidden');
}

async function ewalletCreate() {
  const amount = parseInt(document.getElementById('ew-amount').value.replace(/[^0-9]/g, ''));
  const phone = document.getElementById('ew-phone').value.trim();
  if (!amount || amount < 10000) { alert('Jumlah minimum adalah 10.000 IDR'); return; }
  if (!phone || !/^08\d{8,11}$/.test(phone)) { alert('Nomor HP tidak valid. Format: 08xxxxxxxxxx'); return; }
  ewalletShow('loading');
  document.getElementById('ew-form').classList.add('opacity-50', 'pointer-events-none');
  clearInterval(ewPollInterval);
  clearInterval(ewTimerInterval);
  try {
    const res = await fetch('/api/ewallet/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'method=' + ewMethod + '&amount=' + amount + '&phone=' + encodeURIComponent(phone),
    });
    const data = await res.json();
    document.getElementById('ew-form').classList.remove('opacity-50', 'pointer-events-none');
    if (!data.status) {
      document.getElementById('ew-errmsg').textContent = data.data?.msg || data.msg || 'Ralat tidak diketahui';
      ewalletShow('error');
      return;
    }
    const d = data.data;
    ewDepositId = d.deposit_id;
    document.getElementById('ew-id').textContent = d.deposit_id;
    document.getElementById('ew-method-label').textContent = d.method || ewMethod.toUpperCase();
    document.getElementById('ew-amt').textContent = ewalletFormatRp(d.amount);
    document.getElementById('ew-fee').textContent = ewalletFormatRp(d.fee);
    document.getElementById('ew-total').textContent = ewalletFormatRp(d.total_amount);
    ewalletSetStatus('Pending');
    document.getElementById('ew-pay-link').href = d.payment_url || '#';
    ewalletShow('result');
    if (d.expired_at) ewalletStartTimer(d.expired_at);
    ewPollInterval = setInterval(() => ewalletCheck(true), 10000);
    if (d.payment_url) window.open(d.payment_url, '_blank');
  } catch (e) {
    document.getElementById('ew-form').classList.remove('opacity-50', 'pointer-events-none');
    document.getElementById('ew-errmsg').textContent = e.message;
    ewalletShow('error');
  }
}

async function ewalletCheck(silent) {
  if (!ewDepositId) return;
  if (!silent) {
    const btn = document.getElementById('ew-check-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="ph-bold ph-arrows-clockwise animate-spin"></i> Checking...';
  }
  try {
    const res = await fetch('/api/ewallet/check?id=' + ewDepositId);
    const data = await res.json();
    if (data.status && data.data) ewalletSetStatus(data.data.status);
  } catch (e) {}
  if (!silent) {
    const btn = document.getElementById('ew-check-btn');
    btn.disabled = false;
    btn.innerHTML = '<i class="ph-bold ph-arrows-clockwise"></i> Cek Status';
  }
}

function ewalletReset() {
  clearInterval(ewPollInterval);
  clearInterval(ewTimerInterval);
  clearInterval(ewSuccessCountdown);
  ewSuccessCountdown = null;
  ewDepositId = null;
  document.getElementById('ew-amount').value = '';
  document.getElementById('ew-phone').value = '';
  document.getElementById('ew-form').classList.remove('opacity-50', 'pointer-events-none');
  const banner = document.getElementById('ew-success-banner');
  if (banner) banner.classList.add('hidden');
  ewalletShow(null);
}

function qrisReset() {
  clearInterval(qrisPollInterval);
  clearInterval(qrisTimerInterval);
  clearInterval(qrisSuccessCountdown);
  qrisSuccessCountdown = null;
  qrisDepositId = null;
  document.getElementById('qris-amount').value = '';
  document.getElementById('qris-form').classList.remove('opacity-50', 'pointer-events-none');
  const banner = document.getElementById('qris-success-banner');
  if (banner) banner.classList.add('hidden');
  qrisShow(null);
}

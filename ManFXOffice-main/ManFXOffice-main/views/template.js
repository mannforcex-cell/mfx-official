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
module.exports = function renderTemplate(d) {
  const {
    seo,
    brand,
    contact,
    payment,
    reviews,
    community,
    profile,
    footer,
    systemInfo,
    bootSeqJSON,
  } = d;
  const {
    navHTML,
    statsHTML,
    dashBadgesHTML,
    welcomeTagsHTML,
    servicesHTML,
    whyUsHTML,
    techSkillsHTML,
    softSkillsHTML,
    techStackHTML,
    paymentCardsHTML,
    paymentGuideHTML,
    reviewsHTML,
    waGroupBenefitsHTML,
    tgGroupBenefitsHTML,
    profileTagsHTML,
    missionPointsHTML,
    visionPointsHTML,
    faqHTML,
    timelineHTML,
    structuredDataOrg,
    structuredDataWebsite,
  } = d;

  return `<!DOCTYPE html>
<html lang="${seo.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${seo.title}</title>
  <meta name="description" content="${seo.description}">
  <meta name="keywords" content="${seo.keywords}">
  <meta name="author" content="${seo.author}">
  <meta name="robots" content="${seo.robots}">
  <meta name="theme-color" content="${seo.themeColor}">
  <link rel="canonical" href="${seo.canonical}">
  ${seo.googleSiteVerification ? `<meta name="google-site-verification" content="${seo.googleSiteVerification}">` : ""}
  <meta name="geo.region" content="${seo.geoRegion}">
  <meta name="geo.placename" content="${seo.geoPlacename}">
  <meta name="geo.position" content="${seo.geoPosition}">
  <meta name="ICBM" content="${seo.icbm}">
  <meta name="language" content="Malay">
  <meta name="revisit-after" content="7 days">
  <meta name="rating" content="general">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${seo.siteUrl}">
  <meta property="og:title" content="${seo.title}">
  <meta property="og:description" content="${seo.description}">
  <meta property="og:image" content="${seo.ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${brand.name} — Official Portal Malaysia">
  <meta property="og:site_name" content="${brand.name}">
  <meta property="og:locale" content="${seo.locale}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="${seo.twitterHandle}">
  <meta name="twitter:creator" content="${seo.twitterHandle}">
  <meta name="twitter:title" content="${seo.title}">
  <meta name="twitter:description" content="${seo.description}">
  <meta name="twitter:image" content="${seo.ogImage}">
  <meta name="twitter:image:alt" content="${brand.name} — Official Portal Malaysia">
  <script type="application/ld+json">${structuredDataOrg}</script>
  <script type="application/ld+json">${structuredDataWebsite}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@phosphor-icons/web"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            space: ['"Space Grotesk"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
            fira: ['"Fira Code"', 'monospace'],
          },
          colors: {
            mfx: {
              bg: '#111118', panel: '#22222e', border: '#3c3c50',
              primary: '#e8e8ec', primaryHover: '#ffffff', accent: '#606078',
              textMain: '#e2e2ea', textMuted: '#c0c0cc'
            }
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="/style.css">
  <script>window.__MFX_BOOT__ = ${bootSeqJSON};</script>
</head>
<body class="text-mfx-textMain antialiased selection:bg-mfx-primary selection:text-black">
  <div class="scanline-effect"></div>

  <!-- LOADING SCREEN -->
  <div id="loading-screen" class="fixed inset-0 bg-black z-[100] flex flex-col justify-center items-start p-5 md:p-16 font-tech text-mfx-primary">
    <div class="max-w-3xl w-full">
      <h1 class="text-lg md:text-4xl font-bold mb-4 md:mb-6 text-white tracking-widest">${brand.name} <span class="text-mfx-primary">—</span> OS</h1>
      <div id="boot-text" class="text-xs md:text-base space-y-1.5 opacity-80 h-32 md:h-48 overflow-hidden"></div>
      <div class="mt-5 md:mt-8 flex items-center gap-3">
        <div class="w-full bg-mfx-border h-0.5 flex-1 relative overflow-hidden">
          <div id="progress-bar" class="absolute top-0 left-0 h-full bg-mfx-primary w-0 transition-all duration-75"></div>
        </div>
        <span id="progress-text" class="w-10 text-right text-xs">0%</span>
      </div>
      <div class="mt-3 text-[10px] md:text-xs text-mfx-textMuted font-code" id="loading-status">Initializing...</div>
    </div>
  </div>

  <!-- WELCOME SCREEN -->
  <div id="welcome-screen" class="fixed inset-0 bg-mfx-bg z-[90] flex flex-col items-center justify-center text-center px-4 py-6 overflow-y-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mfx-panel via-mfx-bg to-mfx-bg">
    <div class="animate-fade-in flex flex-col items-center max-w-4xl w-full">
      <div class="mb-4 inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full border border-mfx-border bg-mfx-bg/50 shadow-lg relative">
        <i class="ph ph-shield-check text-2xl md:text-4xl text-mfx-primary"></i>
        <div class="absolute inset-0 rounded-full border border-mfx-primary/30 animate-[spin_8s_linear_infinite]"></div>
      </div>
      <h2 class="text-[10px] md:text-sm font-tech text-mfx-primary tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3">${brand.subtitle}</h2>
      <h1 class="text-3xl md:text-7xl font-bold font-space text-white mb-1.5 tracking-tight text-glow">${brand.name}</h1>
      <p class="text-xs md:text-2xl text-mfx-textMuted font-light mb-5 md:mb-8">${brand.tagline}</p>
      <div class="flex flex-wrap justify-center gap-2 mb-5 md:mb-10 text-xs font-tech text-mfx-textMuted">
        ${welcomeTagsHTML}
      </div>
      <p class="text-mfx-primary font-code mb-5 md:mb-10 flex items-center justify-center gap-1.5 text-xs md:text-base">
        <i class="ph-fill ph-check-circle"></i> Pantas <span class="text-mfx-border px-1.5">|</span>
        <i class="ph-fill ph-lock-key"></i> Selamat <span class="text-mfx-border px-1.5">|</span>
        <i class="ph-fill ph-diamond"></i> Dipercayai
      </p>
      <button onclick="enterPortal()" class="group relative px-6 py-3 md:px-8 md:py-4 bg-mfx-primary text-black font-bold font-space text-sm md:text-lg rounded-none hover:bg-white transition-all duration-300 overflow-hidden flex items-center gap-2">
        <span class="relative z-10 text-black">ENTER PORTAL</span>
        <i class="ph-bold ph-arrow-right relative z-10 text-black group-hover:translate-x-1 transition-transform"></i>
        <div class="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>
      </button>
      <p class="mt-6 md:mt-16 text-xs text-mfx-textMuted italic font-code opacity-70 px-4">${brand.quote}</p>
    </div>
  </div>

  <!-- MAIN APP UI -->
  <div id="app-ui" class="min-h-screen flex flex-col md:flex-row relative">

    <!-- Mobile Sidebar Overlay -->
    <div id="sidebar-overlay" class="fixed inset-0 bg-black/60 z-40 hidden md:hidden"
      onclick="document.getElementById('sidebar').classList.add('-translate-x-full'); this.classList.add('hidden');"></div>

    <!-- Mobile Header -->
    <header class="mobile-header md:hidden sticky top-0 z-40 px-4 py-3 flex justify-between items-center border-b border-mfx-border">
      <div class="font-bold font-space text-base text-white flex items-center gap-2">
        <i class="ph-fill ph-shield-check text-mfx-primary"></i> ${brand.nameShort}
      </div>
      <button id="mobile-menu-btn" class="text-xl text-mfx-textMain active:text-mfx-primary p-1">
        <i class="ph ph-list"></i>
      </button>
    </header>

    <!-- Sidebar -->
    <aside id="sidebar" class="fixed md:sticky top-0 left-0 w-72 glass-panel border-r border-mfx-border flex flex-col z-50 transform -translate-x-full md:translate-x-0 transition-transform duration-300 overflow-y-auto">
      <div class="p-6 md:p-8 flex-1">
        <div class="flex justify-between items-start mb-8">
          <div>
            <h1 class="text-2xl font-bold text-white font-space tracking-tight text-glow">${brand.name}</h1>
            <p class="text-xs text-mfx-textMuted font-tech mt-1 flex items-center gap-1">
              <i class="ph ph-map-pin"></i> Official Portal · MY
            </p>
          </div>
          <button id="close-menu-btn" class="md:hidden text-xl text-mfx-textMuted hover:text-white">
            <i class="ph ph-x"></i>
          </button>
        </div>
        <nav class="space-y-6 font-space text-sm">${navHTML}</nav>
      </div>
      <div class="p-6 border-t border-mfx-border bg-mfx-bg/20 mt-auto">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2 text-xs font-tech text-mfx-textMuted">
            <div class="w-2 h-2 rounded-full bg-mfx-primary animate-pulse"></div>
            ${systemInfo.status}
          </div>
        </div>
        <div class="glass-panel p-3 rounded-lg flex items-center gap-3 border-none bg-mfx-border/30">
          <div class="w-8 h-8 rounded bg-mfx-panel flex items-center justify-center border border-mfx-border">
            <i class="ph-fill ph-music-notes text-mfx-primary"></i>
          </div>
          <div class="flex-1">
            <p class="text-xs font-bold text-white leading-tight">${systemInfo.bgmTitle}</p>
            <p class="text-[10px] text-mfx-textMuted font-tech">${systemInfo.bgmLabel} <span class="animate-pulse">...</span></p>
          </div>
          <button class="text-mfx-textMuted hover:text-white" onclick="toggleAudio(this)">
            <i class="ph-fill ph-speaker-high"></i>
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-3 md:p-12 lg:p-16 w-full max-w-6xl mx-auto">

      <!-- DASHBOARD -->
      <section id="dashboard" class="section-container active">
        <div class="mb-4 md:mb-8">
          <p class="text-mfx-primary font-tech text-[10px] md:text-sm mb-1 md:mb-2"><i class="ph ph-sparkle"></i> SELAMAT DATANG KE PORTAL RASMI</p>
          <h1 class="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">${brand.name}</h1>
          <p class="text-xs md:text-lg text-mfx-textMuted font-code max-w-2xl">Digital Services · Payment Gateway · Pro Gamer · Web &amp; Design</p>
        </div>
        <div class="glass-panel p-3 md:p-8 rounded-xl tech-border mb-4 md:mb-10 bg-gradient-to-br from-mfx-panel/80 to-transparent">
          <p class="text-xs md:text-lg leading-relaxed mb-3 md:mb-6">
            Kami menyediakan perkhidmatan digital berkualiti tinggi — dari topup, boosting, pembuatan website, logo, hingga AI Customer. Kepuasan pelanggan adalah keutamaan kami.
          </p>
          <div class="flex flex-wrap gap-1.5 md:gap-2 text-[10px] md:text-xs font-tech">${dashBadgesHTML}</div>
        </div>
        <h3 class="font-tech text-[10px] md:text-sm text-mfx-textMuted mb-2 md:mb-4 tracking-widest">STATISTIK SEMASA:</h3>
        <div class="stats-grid grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-12">${statsHTML}</div>
        <h3 class="font-tech text-[10px] md:text-sm text-mfx-textMuted mb-2 md:mb-4 tracking-widest">AKSES PANTAS:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <button onclick="navigate('bayaran')" class="quick-btn flex flex-col items-start text-left p-3 md:p-5 glass-panel rounded-lg tech-border group">
            <div class="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 w-full">
              <i class="ph-fill ph-credit-card text-lg md:text-2xl text-mfx-primary"></i>
              <span class="font-bold text-white text-sm md:text-lg group-hover:text-mfx-primary transition-colors">BAYAR SEKARANG</span>
              <i class="ph ph-arrow-up-right ml-auto text-mfx-textMuted opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
            <p class="text-xs md:text-sm text-mfx-textMuted">Lihat semua kaedah pembayaran rasmi.</p>
          </button>
          <button onclick="navigate('perkhidmatan')" class="quick-btn flex flex-col items-start text-left p-3 md:p-5 glass-panel rounded-lg tech-border group">
            <div class="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 w-full">
              <i class="ph-fill ph-briefcase text-lg md:text-2xl text-mfx-textMain"></i>
              <span class="font-bold text-white text-sm md:text-lg group-hover:text-mfx-primary transition-colors">PERKHIDMATAN</span>
              <i class="ph ph-arrow-up-right ml-auto text-mfx-textMuted opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
            <p class="text-xs md:text-sm text-mfx-textMuted">Lihat senarai penuh servis yang kami tawar.</p>
          </button>
          <button onclick="navigate('ulasan')" class="quick-btn flex flex-col items-start text-left p-3 md:p-5 glass-panel rounded-lg tech-border group">
            <div class="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 w-full">
              <i class="ph-fill ph-chat-centered-text text-lg md:text-2xl text-mfx-textMain"></i>
              <span class="font-bold text-white text-sm md:text-lg group-hover:text-mfx-primary transition-colors">ULASAN PELANGGAN</span>
              <i class="ph ph-arrow-up-right ml-auto text-mfx-textMuted opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
            <p class="text-xs md:text-sm text-mfx-textMuted">Apa kata mereka tentang servis kami.</p>
          </button>
          <button onclick="navigate('hubungi')" class="quick-btn flex flex-col items-start text-left p-3 md:p-5 glass-panel rounded-lg tech-border group">
            <div class="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 w-full">
              <i class="ph-fill ph-headset text-lg md:text-2xl text-mfx-textMain"></i>
              <span class="font-bold text-white text-sm md:text-lg group-hover:text-mfx-primary transition-colors">HUBUNGI KAMI</span>
              <i class="ph ph-arrow-up-right ml-auto text-mfx-textMuted opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
            <p class="text-xs md:text-sm text-mfx-textMuted">WhatsApp / Telegram / Emel terus.</p>
          </button>
        </div>
      </section>

      <!-- TENTANG KAMI -->
      <section id="tentang" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6">
          <h2 class="text-sm font-tech text-mfx-primary tracking-widest mb-1">PROFIL PERIBADI</h2>
          <h1 class="text-3xl font-bold text-white">Tentang Kami</h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="col-span-1 glass-panel p-6 rounded-xl tech-border flex flex-col items-center text-center h-fit">
            <div class="w-32 h-32 rounded-full border-2 border-mfx-primary mb-4 relative overflow-hidden bg-black flex items-center justify-center">
              <img src="/logo.png" alt="Mann Force X Logo" class="w-full h-full object-cover object-center" />
              <div class="absolute inset-0 rounded-full border border-mfx-primary/20"></div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-1">${profile.name}</h3>
            <p class="text-mfx-primary font-tech text-xs mb-4"><i class="ph ph-sparkle"></i> ${profile.role} <i class="ph ph-sparkle"></i></p>
            <div class="flex flex-wrap justify-center gap-2 text-xs mb-6">${profileTagsHTML}</div>
            <div class="w-full text-left space-y-3 font-code text-sm">
              <div class="flex gap-3"><i class="ph ph-map-pin text-mfx-primary text-lg shrink-0"></i> <span>${profile.location}</span></div>
              <div class="flex gap-3"><i class="ph ph-envelope text-mfx-primary text-lg shrink-0"></i> <span>${profile.email}</span></div>
              <div class="flex gap-3"><i class="ph ph-whatsapp-logo text-mfx-primary text-lg shrink-0"></i> <span>${profile.whatsapp}</span></div>
              <div class="flex gap-3"><i class="ph ph-telegram-logo text-mfx-primary text-lg shrink-0"></i> <span>${profile.telegram}</span></div>
            </div>
          </div>
          <div class="col-span-1 lg:col-span-2 space-y-8">
            <div>
              <h3 class="font-tech text-sm text-mfx-textMuted mb-3 tracking-widest border-l-2 border-mfx-primary pl-3">TENTANG BISNES:</h3>
              <div class="glass-panel p-6 rounded-lg border border-mfx-border space-y-4 text-mfx-textMain leading-relaxed">
                ${profile.bio.map((b) => `<p>${b}</p>`).join("")}
              </div>
            </div>
            <div>
              <h3 class="font-tech text-sm text-mfx-textMuted mb-4 tracking-widest border-l-2 border-mfx-primary pl-3">PERJALANAN KAMI:</h3>
              <div class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-mfx-border before:to-transparent">
                ${timelineHTML}
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="glass-panel p-6 rounded-lg border border-mfx-border">
            <div class="flex items-center gap-3 mb-4">
              <i class="ph-fill ph-target text-3xl text-mfx-primary"></i>
              <h3 class="text-xl font-bold text-white">${profile.mission.title}</h3>
            </div>
            <p class="text-sm text-mfx-textMuted mb-4">${profile.mission.desc}</p>
            <ul class="space-y-2 text-sm">${missionPointsHTML}</ul>
          </div>
          <div class="glass-panel p-6 rounded-lg border border-mfx-border">
            <div class="flex items-center gap-3 mb-4">
              <i class="ph-fill ph-eye text-3xl text-mfx-primary"></i>
              <h3 class="text-xl font-bold text-white">${profile.vision.title}</h3>
            </div>
            <p class="text-sm text-mfx-textMuted mb-4">${profile.vision.desc}</p>
            <ul class="space-y-2 text-sm">${visionPointsHTML}</ul>
          </div>
        </div>
      </section>

      <!-- PERKHIDMATAN -->
      <section id="perkhidmatan" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6">
          <h2 class="text-sm font-tech text-mfx-primary tracking-widest mb-1">APA YANG KAMI TAWARKAN</h2>
          <h1 class="text-3xl font-bold text-white">Perkhidmatan Utama</h1>
        </div>
        <div class="bg-mfx-primary/10 border border-mfx-primary/30 p-4 rounded-lg flex items-start gap-4 mb-8">
          <i class="ph-fill ph-info text-2xl text-mfx-primary shrink-0"></i>
          <p class="text-sm text-mfx-textMain"><strong>NOTA:</strong> Untuk pertanyaan harga dan pakej, sila hubungi kami terus melalui WhatsApp atau Telegram. Kami sedia membantu menyesuaikan servis mengikut bajet anda.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">${servicesHTML}</div>
        <div class="glass-panel p-8 rounded-xl tech-border border-mfx-border">
          <h3 class="text-xl font-bold text-white mb-6 border-l-4 border-mfx-primary pl-4">KENAPA PILIH KAMI?</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${whyUsHTML}</div>
        </div>
      </section>

      <!-- KEMAHIRAN -->
      <section id="kemahiran" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6">
          <h2 class="text-sm font-tech text-mfx-primary tracking-widest mb-1">KEPAKARAN &amp; KEMAHIRAN</h2>
          <h1 class="text-3xl font-bold text-white">Skills Matrix</h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 class="font-tech text-sm text-white mb-6 flex items-center gap-2">
              <i class="ph-fill ph-cpu text-mfx-primary text-xl"></i> GAMING &amp; TEKNIKAL
            </h3>
            <div class="space-y-5">${techSkillsHTML}</div>
          </div>
          <div>
            <h3 class="font-tech text-sm text-white mb-6 flex items-center gap-2">
              <i class="ph-fill ph-handshake text-mfx-primary text-xl"></i> PERNIAGAAN &amp; KOMUNIKASI
            </h3>
            <div class="space-y-5">${softSkillsHTML}</div>
          </div>
        </div>
        <div class="mt-12 glass-panel p-6 rounded-lg border border-mfx-border">
          <h3 class="font-tech text-sm text-mfx-textMuted mb-4 tracking-widest text-center">ALAT &amp; TEKNOLOGI (TECH STACK)</h3>
          <div class="flex flex-wrap justify-center gap-4">${techStackHTML}</div>
        </div>
      </section>

      <!-- MINI GAME -->
      <section id="game" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6">
          <div class="flex items-center gap-3 mb-2">
            <span class="font-code text-mfx-primary text-xs tracking-widest">[ 05 ]</span>
            <span class="text-mfx-textMuted text-xs">// HIBURAN</span>
          </div>
          <h2 class="font-display text-3xl text-mfx-textPrimary">Mini <span class="text-gradient">Games</span></h2>
          <p class="text-mfx-textMuted text-sm mt-2 font-code">Pilih game dan terus main. Klik poster untuk mulakan.</p>
        </div>

        <!-- GAME LOBBY: Poster Cards -->
        <div id="game-lobby" class="grid grid-cols-1 md:grid-cols-2 gap-5">

          <!-- Card 1: Stick Hero -->
          <button onclick="gameLaunch('/game','Stick Hero','STICK HERO v1.0')" class="group relative rounded-xl border border-mfx-border overflow-hidden text-left transition-all duration-300 hover:border-mfx-primary hover:shadow-[0_0_24px_rgba(100,220,180,0.15)] focus:outline-none" style="background:linear-gradient(145deg,#0d1a0d 0%,#1a2e1a 60%,#0d1a0d 100%);">
            <!-- Decorative canvas art bg -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              <div style="position:absolute;bottom:0;left:0;right:0;height:60%;background:linear-gradient(180deg,transparent,#1e3412);"></div>
              <div style="position:absolute;bottom:20%;left:10%;width:8px;height:30px;background:#6D8821;clip-path:polygon(50% 0%,0% 100%,100% 100%);transform:scaleY(-1);"></div>
              <div style="position:absolute;bottom:22%;left:25%;width:10px;height:38px;background:#8FAC34;clip-path:polygon(50% 0%,0% 100%,100% 100%);transform:scaleY(-1);"></div>
              <div style="position:absolute;bottom:18%;right:20%;width:8px;height:28px;background:#6D8821;clip-path:polygon(50% 0%,0% 100%,100% 100%);transform:scaleY(-1);"></div>
            </div>
            <div class="relative p-6 flex flex-col gap-4 min-h-[220px] justify-between">
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2 py-0.5 rounded font-code text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30">KASUAL</span>
                  <span class="px-2 py-0.5 rounded font-code text-xs text-mfx-textMuted border border-mfx-border">1 PLAYER</span>
                </div>
                <h3 class="font-display text-2xl text-mfx-textPrimary group-hover:text-mfx-primary transition-colors">Stick Hero</h3>
                <p class="text-mfx-textMuted text-sm mt-1 font-code leading-relaxed">Hulur tongkat untuk melintas platform. Tahan lama = lebih panjang. Sasaran merah = double score!</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex gap-3 text-mfx-textMuted text-xs font-code">
                  <span><i class="ph ph-hand-tap mr-1"></i>Touch</span>
                  <span><i class="ph ph-mouse mr-1"></i>Mouse</span>
                  <span><i class="ph ph-keyboard mr-1"></i>Space</span>
                </div>
                <span class="flex items-center gap-1.5 text-mfx-primary text-sm font-bold group-hover:gap-3 transition-all font-code">MAIN <i class="ph-bold ph-play-circle text-lg"></i></span>
              </div>
            </div>
          </button>

          <!-- Card 2: PISTOL -->
          <button onclick="gameLaunch('/game2','PISTOL Shooter','PISTOL v6.2')" class="group relative rounded-xl border border-mfx-border overflow-hidden text-left transition-all duration-300 hover:border-red-400/60 hover:shadow-[0_0_24px_rgba(200,80,80,0.15)] focus:outline-none" style="background:linear-gradient(145deg,#1a0d0d 0%,#2a1414 60%,#1a0d0d 100%);">
            <div class="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
              <div style="position:absolute;top:30%;right:15%;width:40px;height:40px;border:2px solid #c95b6a;border-radius:50%;"></div>
              <div style="position:absolute;top:20%;right:30%;width:20px;height:20px;border:2px solid #8abec7;border-radius:50%;"></div>
              <div style="position:absolute;bottom:30%;left:20%;width:6px;height:6px;background:#c95b6a;border-radius:50%;box-shadow:0 0 8px #c95b6a;"></div>
              <div style="position:absolute;bottom:40%;left:40%;width:4px;height:4px;background:#8abec7;border-radius:50%;box-shadow:0 0 6px #8abec7;"></div>
            </div>
            <div class="relative p-6 flex flex-col gap-4 min-h-[220px] justify-between">
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2 py-0.5 rounded font-code text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">ACTION</span>
                  <span class="px-2 py-0.5 rounded font-code text-xs text-mfx-textMuted border border-mfx-border">WAVES</span>
                  <span class="px-2 py-0.5 rounded font-code text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">v6.2</span>
                </div>
                <h3 class="font-display text-2xl text-mfx-textPrimary group-hover:text-red-400 transition-colors">PISTOL Shooter</h3>
                <p class="text-mfx-textMuted text-sm mt-1 font-code leading-relaxed">Top-down shooter — tembak musuh, naik level, pilih upgrade. Standard / Boss Rush / Sandbox mode.</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex gap-3 text-mfx-textMuted text-xs font-code">
                  <span><i class="ph ph-joystick mr-1"></i>WASD</span>
                  <span><i class="ph ph-cursor mr-1"></i>Aim</span>
                  <span><i class="ph ph-hand-tap mr-1"></i>Touch</span>
                </div>
                <span class="flex items-center gap-1.5 text-red-400 text-sm font-bold group-hover:gap-3 transition-all font-code">MAIN <i class="ph-bold ph-play-circle text-lg"></i></span>
              </div>
            </div>
          </button>
        </div>

        <!-- GAME PLAYER: shown after selecting a game -->
        <div id="game-player" class="hidden mt-6">
          <div class="glass-panel rounded-xl border border-mfx-border overflow-hidden">
            <div class="flex items-center justify-between px-3 py-2 border-b border-mfx-border bg-mfx-panel">
              <div class="flex items-center gap-2 min-w-0">
                <div class="flex gap-1 shrink-0">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                </div>
                <span id="game-player-title" class="font-code text-mfx-textMuted text-xs tracking-widest truncate max-w-[100px] md:max-w-none"></span>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <button onclick="gameReset()" class="font-code text-mfx-primary text-xs flex items-center gap-1 px-2 py-1 rounded border border-mfx-border hover:border-mfx-primary transition-colors" title="Reset">
                  <i class="ph-bold ph-arrows-clockwise"></i><span class="hidden md:inline"> Reset</span>
                </button>
                <a id="game-fullscreen-link" href="#" target="_blank" class="font-code text-mfx-textMuted text-xs hover:text-mfx-primary flex items-center gap-1 px-2 py-1 rounded border border-mfx-border hover:border-mfx-primary transition-colors" title="Fullscreen">
                  <i class="ph-bold ph-arrows-out"></i><span class="hidden md:inline"> Fullscreen</span>
                </a>
                <button onclick="gameClose()" class="font-code text-white text-xs flex items-center gap-1 px-2 py-1 rounded border border-red-500/50 bg-red-500/10 hover:bg-red-500/20 transition-colors" title="Tutup">
                  <i class="ph-bold ph-x"></i><span class="hidden md:inline"> Tutup</span>
                </button>
              </div>
            </div>
            <iframe
              id="game-frame"
              src=""
              style="width:100%; height:520px; border:none; display:block;"
              allow="fullscreen"
              title="MFX Game"
            ></iframe>
          </div>
          <p class="text-center text-mfx-textMuted text-xs font-code mt-3 opacity-50">Klik dalam frame dahulu untuk aktifkan kawalan &bull; F = fullscreen (dalam game)</p>
        </div>
      </section>

      <!-- PAYMENT GATEWAY -->
      <section id="bayaran" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6 flex justify-between items-end">
          <div>
            <h2 class="text-sm font-tech text-mfx-primary tracking-widest mb-1 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-mfx-primary animate-pulse"></span> KAEDAH PEMBAYARAN LIVE
            </h2>
            <h1 class="text-3xl font-bold text-white">Payment Gateway</h1>
          </div>
          <i class="ph-fill ph-shield-check text-4xl text-mfx-primary/20 hidden md:block"></i>
        </div>
        <p class="text-mfx-textMain mb-8 max-w-2xl">
          Kami menerima pelbagai kaedah pembayaran untuk kemudahan anda. Semua transaksi selamat &amp; dilindungi.<br>
          <span class="text-mfx-primary text-sm font-code">${payment.note}</span>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">${paymentCardsHTML}</div>
        <!-- QRIS LIVE WIDGET -->
        <div class="glass-panel p-1 border border-mfx-primary/30 rounded-xl mb-12 bg-gradient-to-r from-mfx-primary/10 to-transparent">
          <div class="bg-mfx-panel rounded-lg p-6 md:p-8">
            <div class="flex items-center gap-2 mb-5">
              <span class="w-2 h-2 rounded-full bg-mfx-primary animate-pulse"></span>
              <span class="text-xs font-tech text-mfx-primary tracking-widest">QRIS PAYMENT LIVE</span>
            </div>

            <!-- INPUT FORM -->
            <div id="qris-form" class="flex flex-col md:flex-row gap-3 items-start md:items-end mb-6">
              <div class="flex-1 w-full">
                <label class="block text-xs font-tech text-mfx-textMuted mb-2 tracking-widest">JUMLAH (IDR) — MIN. 500</label>
                <input id="qris-amount" type="text" inputmode="numeric" pattern="[0-9]*" placeholder="Contoh: 10000" autocomplete="off"
                  class="w-full bg-mfx-bg border border-mfx-border rounded px-4 py-3 text-white font-bold font-space focus:border-mfx-primary outline-none transition-colors text-lg" />
              </div>
              <button onclick="qrisCreate()" id="qris-btn"
                class="px-6 py-3 bg-mfx-primary text-black font-bold font-space text-sm rounded hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap">
                <i class="ph-bold ph-qr-code"></i> JANA QRIS
              </button>
            </div>

            <!-- LOADING -->
            <div id="qris-loading" class="hidden text-center py-8">
              <div class="inline-flex flex-col items-center gap-3">
                <div class="w-8 h-8 border-2 border-mfx-primary border-t-transparent rounded-full animate-spin"></div>
                <span class="text-sm font-tech text-mfx-textMuted">Menjana QRIS...</span>
              </div>
            </div>

            <!-- RESULT -->
            <div id="qris-result" class="hidden">
              <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                <!-- QR Image -->
                <div class="shrink-0">
                  <div class="w-52 h-52 flex items-center justify-center">
                    <img id="qris-img" src="" alt="QRIS" class="w-full h-full object-contain rounded-xl" />
                  </div>
                  <div class="mt-2 text-center">
                    <span id="qris-timer" class="text-xs font-tech text-mfx-primary"></span>
                  </div>
                </div>
                <!-- Details -->
                <div class="flex-1 w-full">
                  <div class="space-y-2 mb-4 font-code text-sm">
                    <div class="flex justify-between border-b border-mfx-border pb-2">
                      <span class="text-mfx-textMuted">ID Deposit</span>
                      <span id="qris-id" class="text-white font-bold"></span>
                    </div>
                    <div class="flex justify-between border-b border-mfx-border pb-2">
                      <span class="text-mfx-textMuted">Jumlah</span>
                      <span id="qris-amt" class="text-white"></span>
                    </div>
                    <div class="flex justify-between border-b border-mfx-border pb-2">
                      <span class="text-mfx-textMuted">Fee</span>
                      <span id="qris-fee" class="text-white"></span>
                    </div>
                    <div class="flex justify-between border-b border-mfx-border pb-2">
                      <span class="text-mfx-textMuted">Total Bayar</span>
                      <span id="qris-total" class="text-mfx-primary font-bold text-base"></span>
                    </div>
                    <div class="flex justify-between border-b border-mfx-border pb-2">
                      <span class="text-mfx-textMuted">Status</span>
                      <span id="qris-status" class="font-bold"></span>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <button onclick="qrisCheck()" id="qris-check-btn"
                      class="px-4 py-2 border border-mfx-primary text-mfx-primary text-xs font-bold rounded hover:bg-mfx-primary hover:text-black transition-colors flex items-center gap-1">
                      <i class="ph-bold ph-arrows-clockwise"></i> Cek Status
                    </button>
                    <button onclick="qrisDownload()" id="qris-dl-btn"
                      class="px-4 py-2 border border-mfx-border text-mfx-textMuted text-xs font-bold rounded hover:border-mfx-primary hover:text-mfx-primary transition-colors flex items-center gap-1">
                      <i class="ph-bold ph-download-simple"></i> Download QR
                    </button>
                    <a id="qris-link" href="#" target="_blank"
                      class="px-4 py-2 border border-mfx-border text-mfx-textMuted text-xs font-bold rounded hover:border-mfx-primary hover:text-mfx-primary transition-colors flex items-center gap-1">
                      <i class="ph-bold ph-arrow-square-out"></i> Buka Link
                    </a>
                    <button onclick="qrisReset()"
                      class="px-4 py-2 border border-mfx-border text-mfx-textMuted text-xs font-bold rounded hover:border-white hover:text-white transition-colors flex items-center gap-1">
                      <i class="ph-bold ph-plus"></i> QRIS Baru
                    </button>
                  </div>
                  <!-- Success redirect banner -->
                  <div id="qris-success-banner" class="hidden mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center gap-3">
                    <i class="ph-fill ph-check-circle text-green-400 text-xl shrink-0"></i>
                    <div class="flex-1">
                      <p class="text-green-400 font-bold text-sm">Pembayaran Berjaya!</p>
                      <p class="text-green-300 text-xs font-code">Mengalihkan ke Hubungi Kami dalam <span id="qris-countdown" class="font-bold">10</span> saat...</p>
                    </div>
                    <button onclick="qrisCancelRedirect()" class="shrink-0 px-3 py-1.5 border border-green-500/40 text-green-400 text-xs font-bold rounded hover:bg-green-500/20 transition-colors flex items-center gap-1">
                      <i class="ph-bold ph-x"></i> Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- ERROR -->
            <div id="qris-error" class="hidden">
              <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                <i class="ph-fill ph-warning-circle text-red-400 text-xl shrink-0 mt-0.5"></i>
                <div>
                  <p class="text-red-400 font-bold text-sm mb-1">Gagal Menjana QRIS</p>
                  <p id="qris-errmsg" class="text-red-300 text-xs font-code"></p>
                  <button onclick="qrisReset()" class="mt-2 text-xs text-mfx-primary underline">Cuba Semula</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- DANA / OVO WIDGET -->
        <div class="glass-panel p-1 border border-mfx-border/60 rounded-xl mb-12 bg-gradient-to-r from-blue-500/5 to-transparent">
          <div class="bg-mfx-panel rounded-lg p-6 md:p-8">
            <div class="flex items-center gap-2 mb-5">
              <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span class="text-xs font-tech text-blue-300 tracking-widest">E-WALLET PAYMENT LIVE</span>
            </div>

            <!-- METHOD TABS -->
            <div class="flex gap-2 mb-5">
              <button onclick="ewalletSetMethod('dana', this)" id="ew-tab-dana"
                class="ew-tab px-4 py-1.5 rounded font-tech text-xs border border-blue-400 bg-blue-400/20 text-blue-300 transition-colors">
                DANA
              </button>
              <button onclick="ewalletSetMethod('ovo', this)" id="ew-tab-ovo"
                class="ew-tab px-4 py-1.5 rounded font-tech text-xs border border-mfx-border text-mfx-textMuted hover:border-mfx-primary transition-colors">
                OVO
              </button>
            </div>

            <!-- INPUT FORM -->
            <div id="ew-form" class="space-y-3 mb-4">
              <div>
                <label class="block text-xs font-tech text-mfx-textMuted mb-2 tracking-widest">JUMLAH (IDR) — MIN. 10.000</label>
                <input id="ew-amount" type="text" inputmode="numeric" pattern="[0-9]*" placeholder="Contoh: 50000" autocomplete="off"
                  class="w-full bg-mfx-bg border border-mfx-border rounded px-4 py-3 text-white font-bold font-space focus:border-blue-400 outline-none transition-colors text-lg" />
              </div>
              <div>
                <label class="block text-xs font-tech text-mfx-textMuted mb-2 tracking-widest">NO. TELEFON E-WALLET (FORMAT 08XXXXXXXXXX)</label>
                <input id="ew-phone" type="tel" inputmode="numeric" placeholder="Contoh: 081234567890" autocomplete="off"
                  class="w-full bg-mfx-bg border border-mfx-border rounded px-4 py-3 text-white font-bold font-space focus:border-blue-400 outline-none transition-colors text-lg" />
              </div>
              <button onclick="ewalletCreate()" id="ew-btn"
                class="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-bold font-space text-sm rounded hover:bg-blue-400 transition-colors flex items-center gap-2">
                <i class="ph-bold ph-wallet"></i> <span id="ew-btn-text">BAYAR DENGAN DANA</span>
              </button>
            </div>

            <!-- LOADING -->
            <div id="ew-loading" class="hidden text-center py-8">
              <div class="inline-flex flex-col items-center gap-3">
                <div class="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <span class="text-sm font-tech text-mfx-textMuted">Menjana pembayaran...</span>
              </div>
            </div>

            <!-- RESULT -->
            <div id="ew-result" class="hidden">
              <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
                <div class="flex items-center gap-2 mb-4">
                  <i class="ph-fill ph-wallet text-blue-400 text-xl"></i>
                  <span class="font-bold text-white text-sm">Sila selesaikan pembayaran</span>
                </div>
                <div class="space-y-2 mb-4 font-code text-sm">
                  <div class="flex justify-between border-b border-mfx-border pb-2">
                    <span class="text-mfx-textMuted">ID</span>
                    <span id="ew-id" class="text-white font-bold text-xs"></span>
                  </div>
                  <div class="flex justify-between border-b border-mfx-border pb-2">
                    <span class="text-mfx-textMuted">Kaedah</span>
                    <span id="ew-method-label" class="text-white font-bold"></span>
                  </div>
                  <div class="flex justify-between border-b border-mfx-border pb-2">
                    <span class="text-mfx-textMuted">Jumlah</span>
                    <span id="ew-amt" class="text-white"></span>
                  </div>
                  <div class="flex justify-between border-b border-mfx-border pb-2">
                    <span class="text-mfx-textMuted">Fee</span>
                    <span id="ew-fee" class="text-white"></span>
                  </div>
                  <div class="flex justify-between border-b border-mfx-border pb-2">
                    <span class="text-mfx-textMuted">Total Bayar</span>
                    <span id="ew-total" class="text-blue-300 font-bold text-base"></span>
                  </div>
                  <div class="flex justify-between border-b border-mfx-border pb-2">
                    <span class="text-mfx-textMuted">Status</span>
                    <span id="ew-status" class="font-bold"></span>
                  </div>
                  <div class="flex justify-between pb-1">
                    <span class="text-mfx-textMuted">Tamat Dalam</span>
                    <span id="ew-timer" class="text-xs font-tech text-blue-300"></span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  <a id="ew-pay-link" href="#" target="_blank"
                    class="px-4 py-2 bg-blue-500 text-white text-xs font-bold rounded hover:bg-blue-400 transition-colors flex items-center gap-1">
                    <i class="ph-bold ph-arrow-square-out"></i> Buka Halaman Bayar
                  </a>
                  <button onclick="ewalletCheck(false)" id="ew-check-btn"
                    class="px-4 py-2 border border-blue-400 text-blue-300 text-xs font-bold rounded hover:bg-blue-500/20 transition-colors flex items-center gap-1">
                    <i class="ph-bold ph-arrows-clockwise"></i> Cek Status
                  </button>
                  <button onclick="ewalletReset()"
                    class="px-4 py-2 border border-mfx-border text-mfx-textMuted text-xs font-bold rounded hover:border-white hover:text-white transition-colors flex items-center gap-1">
                    <i class="ph-bold ph-plus"></i> Bayaran Baru
                  </button>
                </div>
                <!-- Success banner -->
                <div id="ew-success-banner" class="hidden mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center gap-3">
                  <i class="ph-fill ph-check-circle text-green-400 text-xl shrink-0"></i>
                  <div class="flex-1">
                    <p class="text-green-400 font-bold text-sm">Pembayaran Berjaya!</p>
                    <p class="text-green-300 text-xs font-code">Mengalihkan ke Hubungi Kami dalam <span id="ew-countdown" class="font-bold">10</span> saat...</p>
                  </div>
                  <button onclick="ewalletCancelRedirect()" class="shrink-0 px-3 py-1.5 border border-green-500/40 text-green-400 text-xs font-bold rounded hover:bg-green-500/20 transition-colors">
                    <i class="ph-bold ph-x"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- ERROR -->
            <div id="ew-error" class="hidden">
              <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                <i class="ph-fill ph-warning-circle text-red-400 text-xl shrink-0 mt-0.5"></i>
                <div>
                  <p class="text-red-400 font-bold text-sm mb-1">Gagal Menjana Pembayaran</p>
                  <p id="ew-errmsg" class="text-red-300 text-xs font-code"></p>
                  <button onclick="ewalletReset()" class="mt-2 text-xs text-blue-400 underline">Cuba Semula</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="font-tech text-sm text-mfx-textMuted mb-6 tracking-widest text-center">PANDUAN PEMBAYARAN</h3>
        <div class="flex flex-col md:flex-row justify-between gap-4 relative before:hidden md:before:block before:absolute before:top-1/2 before:left-0 before:w-full before:h-0.5 before:bg-mfx-border before:-z-10">
          ${paymentGuideHTML}
        </div>
      </section>

      <!-- ULASAN -->
      <section id="ulasan" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6">
          <h2 class="text-sm font-tech text-mfx-primary tracking-widest mb-1">APA KATA MEREKA</h2>
          <h1 class="text-3xl font-bold text-white">Ulasan Pelanggan</h1>
        </div>
        <div class="flex flex-wrap gap-4 mb-10">
          <div class="glass-panel px-6 py-4 rounded-lg border border-mfx-border flex items-center gap-4">
            <div class="text-4xl font-bold text-white font-space">${reviews.stats.rating}</div>
            <div>
              <div class="flex text-mfx-primary text-sm mb-1">
                <i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i>
              </div>
              <div class="text-xs font-tech text-mfx-textMuted">PURATA RATING</div>
            </div>
          </div>
          <div class="glass-panel px-6 py-4 rounded-lg border border-mfx-border flex flex-col justify-center">
            <div class="text-xl font-bold text-white">${reviews.stats.total}</div>
            <div class="text-xs font-tech text-mfx-textMuted">JUMLAH ULASAN</div>
          </div>
          <div class="glass-panel px-6 py-4 rounded-lg border border-mfx-border flex flex-col justify-center">
            <div class="text-xl font-bold text-mfx-primary">${reviews.stats.satisfaction}</div>
            <div class="text-xs font-tech text-mfx-textMuted">KEPUASAN</div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">${reviewsHTML}</div>
        <div class="glass-panel p-6 md:p-8 rounded-xl border border-mfx-border tech-border bg-mfx-panel/50">
          <h3 class="text-xl font-bold text-white mb-2">Tinggalkan Ulasan Anda</h3>
          <p class="text-sm text-mfx-textMuted mb-6">Maklum balas anda membantu kami memberikan perkhidmatan yang lebih baik.</p>
          <form onsubmit="event.preventDefault(); showMessage('Terima kasih!', 'Ulasan anda telah dihantar dan sedang diproses.');" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-tech text-mfx-textMuted mb-1">NAMA ANDA</label>
                <input type="text" required class="w-full bg-mfx-bg border border-mfx-border rounded p-3 text-white focus:border-mfx-primary outline-none transition-colors">
              </div>
              <div>
                <label class="block text-xs font-tech text-mfx-textMuted mb-1">DARI MANA? (LOKASI)</label>
                <input type="text" required class="w-full bg-mfx-bg border border-mfx-border rounded p-3 text-white focus:border-mfx-primary outline-none transition-colors">
              </div>
            </div>
            <div>
              <label class="block text-xs font-tech text-mfx-textMuted mb-1">RATING</label>
              <div class="flex gap-2 text-2xl text-mfx-border cursor-pointer" id="rating-stars">
                <i class="ph-fill ph-star hover:text-mfx-primary transition-colors"></i>
                <i class="ph-fill ph-star hover:text-mfx-primary transition-colors"></i>
                <i class="ph-fill ph-star hover:text-mfx-primary transition-colors"></i>
                <i class="ph-fill ph-star hover:text-mfx-primary transition-colors"></i>
                <i class="ph-fill ph-star hover:text-mfx-primary transition-colors"></i>
              </div>
            </div>
            <div>
              <label class="block text-xs font-tech text-mfx-textMuted mb-1">ULASAN ANDA</label>
              <textarea required rows="3" class="w-full bg-mfx-bg border border-mfx-border rounded p-3 text-white focus:border-mfx-primary outline-none transition-colors resize-none"></textarea>
            </div>
            <button type="submit" class="bg-mfx-primary text-black font-bold px-6 py-3 rounded hover:bg-white transition-colors flex items-center gap-2">
              HANTAR ULASAN <i class="ph-bold ph-paper-plane-right"></i>
            </button>
          </form>
        </div>
      </section>

      <!-- KUMPULAN KAMI -->
      <section id="kumpulan" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6">
          <h2 class="text-sm font-tech text-mfx-primary tracking-widest mb-1">KOMUNITI KAMI</h2>
          <h1 class="text-3xl font-bold text-white">Sertai Kumpulan</h1>
        </div>
        <p class="text-mfx-textMain mb-10 max-w-2xl">
          Sertai komuniti kami untuk mendapat update terkini, promosi eksklusif, dan berinteraksi dengan sesama pelanggan setia ${brand.name}.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-panel p-8 rounded-xl border border-mfx-border hover:border-mfx-primary/50 transition-colors relative overflow-hidden group">
            <div class="absolute -right-10 -bottom-10 text-mfx-border/50 group-hover:scale-110 transition-transform duration-500">
              <i class="ph-fill ph-whatsapp-logo text-[200px]"></i>
            </div>
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-mfx-panel border border-mfx-border text-white flex items-center justify-center text-3xl mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                <i class="ph-fill ph-whatsapp-logo"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">${community.whatsapp.title}</h3>
              <p class="text-sm text-mfx-textMuted mb-6">${community.whatsapp.desc}</p>
              <h4 class="font-tech text-xs text-mfx-primary mb-3">KELEBIHAN:</h4>
              <ul class="space-y-2 text-sm text-mfx-textMain mb-8">${waGroupBenefitsHTML}</ul>
              <a href="${community.whatsapp.link}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-mfx-primary text-black font-bold rounded-lg hover:bg-white transition-colors">
                ${community.whatsapp.btnText} <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="glass-panel p-8 rounded-xl border border-mfx-border hover:border-mfx-primary/50 transition-colors relative overflow-hidden group">
            <div class="absolute -right-10 -bottom-10 text-mfx-border/50 group-hover:scale-110 transition-transform duration-500">
              <i class="ph-fill ph-telegram-logo text-[200px]"></i>
            </div>
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-mfx-panel border border-mfx-border text-white flex items-center justify-center text-3xl mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                <i class="ph-fill ph-telegram-logo"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">${community.telegram.title}</h3>
              <p class="text-sm text-mfx-textMuted mb-6">${community.telegram.desc}</p>
              <h4 class="font-tech text-xs text-mfx-primary mb-3">KELEBIHAN:</h4>
              <ul class="space-y-2 text-sm text-mfx-textMain mb-8">${tgGroupBenefitsHTML}</ul>
              <a href="${community.telegram.link}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-mfx-primary text-black font-bold rounded-lg hover:bg-white transition-colors">
                ${community.telegram.btnText} <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- HUBUNGI KAMI -->
      <section id="hubungi" class="section-container">
        <div class="mb-8 border-b border-mfx-border pb-6">
          <h2 class="text-sm font-tech text-mfx-primary tracking-widest mb-1">BANTUAN &amp; SOKONGAN</h2>
          <h1 class="text-3xl font-bold text-white">Hubungi Kami</h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="${contact.whatsappLink}" target="_blank" class="glass-panel p-6 rounded-lg tech-border flex items-center gap-4 hover:border-mfx-primary/50 transition-colors group">
              <div class="w-12 h-12 rounded-full bg-mfx-panel border border-mfx-border text-white flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-black transition-colors">
                <i class="ph-fill ph-whatsapp-logo"></i>
              </div>
              <div>
                <h3 class="font-bold text-white">${contact.whatsappLabel}</h3>
                <p class="text-sm text-mfx-textMuted">${contact.whatsapp}</p>
              </div>
            </a>
            <a href="${contact.telegramLink}" target="_blank" class="glass-panel p-6 rounded-lg tech-border flex items-center gap-4 hover:border-mfx-primary/50 transition-colors group">
              <div class="w-12 h-12 rounded-full bg-mfx-panel border border-mfx-border text-white flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-black transition-colors">
                <i class="ph-fill ph-telegram-logo"></i>
              </div>
              <div>
                <h3 class="font-bold text-white">${contact.telegramLabel}</h3>
                <p class="text-sm text-mfx-textMuted">${contact.telegram}</p>
              </div>
            </a>
            <a href="mailto:${contact.email}" class="glass-panel p-6 rounded-lg tech-border flex items-center gap-4 hover:border-mfx-primary/50 transition-colors group">
              <div class="w-12 h-12 rounded-full bg-mfx-panel border border-mfx-border text-white flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-black transition-colors">
                <i class="ph-fill ph-envelope-simple"></i>
              </div>
              <div>
                <h3 class="font-bold text-white">${contact.emailLabel}</h3>
                <p class="text-sm text-mfx-textMuted">${contact.email}</p>
              </div>
            </a>
            <div class="glass-panel p-6 rounded-lg tech-border flex items-center gap-4 border-mfx-primary/30">
              <div class="w-12 h-12 rounded-full bg-mfx-primary/10 text-mfx-primary flex items-center justify-center text-2xl">
                <i class="ph-fill ph-clock"></i>
              </div>
              <div>
                <h3 class="font-bold text-white">Waktu Operasi</h3>
                <p class="text-sm text-mfx-textMuted">${contact.operatingHours}</p>
              </div>
            </div>
          </div>
          <div class="glass-panel p-6 rounded-xl border border-mfx-border bg-mfx-bg/50">
            <h3 class="font-tech text-sm text-mfx-textMuted mb-4 tracking-widest border-b border-mfx-border pb-2">INFO SISTEM:</h3>
            <ul class="space-y-4 text-sm">
              <li class="flex justify-between items-center">
                <span class="text-mfx-textMuted">Status Sistem:</span>
                <span class="flex items-center gap-2 text-mfx-primary font-bold text-xs"><span class="w-2 h-2 rounded-full bg-mfx-primary animate-pulse"></span> Aktif &amp; Selamat</span>
              </li>
              <li class="flex justify-between items-center">
                <span class="text-mfx-textMuted">Masa Respons:</span>
                <span class="text-white font-code">${contact.responseTime}</span>
              </li>
              <li class="flex justify-between items-center">
                <span class="text-mfx-textMuted">Kawasan Servis:</span>
                <span class="text-white">${contact.serviceArea}</span>
              </li>
              <li class="flex justify-between items-center">
                <span class="text-mfx-textMuted">Cuti Umum:</span>
                <span class="text-mfx-primary">${contact.publicHoliday}</span>
              </li>
            </ul>
          </div>
        </div>
        <h3 class="font-tech text-sm text-mfx-textMuted mb-4 tracking-widest">SOALAN LAZIM (FAQ):</h3>
        <div class="space-y-3">${faqHTML}</div>
      </section>

      <footer class="mt-20 border-t border-mfx-border pt-8 pb-4 text-center text-xs text-mfx-textMuted font-tech">
        <p>${footer.text}</p>
      </footer>
    </main>
  </div>

  <!-- Message Box -->
  <div id="msg-box" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] hidden items-center justify-center p-4 opacity-0 transition-opacity duration-300">
    <div class="glass-panel p-6 rounded-lg tech-border max-w-sm w-full text-center border-mfx-primary/50 transform scale-95 transition-transform duration-300" id="msg-content">
      <i class="ph-fill ph-info text-4xl text-mfx-primary mb-3"></i>
      <h3 id="msg-title" class="text-xl font-bold text-white mb-2">Notice</h3>
      <p id="msg-desc" class="text-sm text-mfx-textMuted mb-6">Message goes here.</p>
      <button onclick="closeMessage()" class="px-6 py-2 bg-mfx-primary text-black font-bold rounded hover:bg-white transition-colors w-full">OKAY</button>
    </div>
  </div>

  <script src="/app.js"></script>
</body>
</html>`;
};

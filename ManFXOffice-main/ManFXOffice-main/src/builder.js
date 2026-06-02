const fs = require("fs");
const path = require("path");
const renderTemplate = require("../views/template");
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
function buildHTML(cfg) {
  const { seo, brand, contact, payment, stats, services, whyUs, profile, skills, reviews, community, faq, bootSequence, dashboardBadges, welcomeTags, navGroups, footer, systemInfo } = cfg;

  const statsHTML = stats.map(s => `
    <div class="stat-card glass-panel p-3 md:p-5 rounded-lg border border-mfx-border hover:border-mfx-primary/50 transition-colors text-center group">
      <i class="${s.icon} text-2xl md:text-3xl text-mfx-primary mb-1 md:mb-2 group-hover:scale-110 transition-transform block"></i>
      <h4 class="text-xl md:text-2xl font-bold text-white font-space">${s.value}</h4>
      <p class="text-[10px] md:text-xs font-tech text-mfx-textMuted uppercase leading-tight mt-0.5">${s.label}</p>
    </div>`).join("");

  const dashBadgesHTML = dashboardBadges.map(b => `
    <span class="px-3 py-1.5 bg-mfx-border/50 rounded border border-mfx-border flex items-center gap-1${b.label === "Dipercayai" ? " text-mfx-primary" : ""}">
      <i class="${b.icon}"></i> ${b.label}
    </span>`).join("");

  const welcomeTagsHTML = welcomeTags.map(t => `
    <span class="px-3 py-1 border border-mfx-border rounded-full flex items-center gap-2">
      <i class="${t.icon}"></i> ${t.label}
    </span>`).join("");

  const navHTML = navGroups.map(group => `
    <div>
      <p class="text-xs font-tech text-mfx-textMuted mb-3 tracking-widest">${group.label}</p>
      <ul class="space-y-1">
        ${group.links.map(link => {
          if (link.special) {
            return `<li><a href="#" data-target="${link.id}" class="nav-link flex items-center gap-3 px-4 py-2.5 rounded-md text-mfx-primary bg-mfx-primary/5 border border-mfx-primary/20 hover:bg-mfx-primary/10">
              <i class="${link.icon} text-lg"></i> ${link.label} <span class="nav-badge ml-auto text-[10px] bg-mfx-primary text-black px-1.5 py-0.5 rounded font-bold">${link.badge}</span>
            </a></li>`;
          }
          return `<li><a href="#" data-target="${link.id}" class="nav-link${link.active ? " active text-white" : ""} flex items-center gap-3 px-4 py-2.5 rounded-md"><i class="${link.icon} text-lg"></i> ${link.label}</a></li>`;
        }).join("")}
      </ul>
    </div>`).join("");

  const servicesHTML = services.map(s => {
    const badgeHTML = s.badge ? (s.highlight
      ? `<div class="absolute top-0 right-0 bg-mfx-primary text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">${s.badge}</div>`
      : `<span class="text-[10px] font-bold bg-mfx-primary text-black px-2 py-1 rounded">${s.badge}</span>`) : "";
    if (!s.badge || s.badge === "HOT") {
      return `
      <div class="glass-panel p-6 rounded-lg tech-border group hover:-translate-y-1 transition-all">
        <div class="flex justify-between items-start mb-4">
          <div class="w-12 h-12 rounded bg-mfx-border/50 flex items-center justify-center text-2xl text-mfx-primary group-hover:bg-mfx-primary group-hover:text-black transition-colors">
            <i class="${s.icon}"></i>
          </div>
          ${s.badge ? `<span class="text-[10px] font-bold bg-mfx-primary text-black px-2 py-1 rounded">${s.badge}</span>` : ""}
        </div>
        <h3 class="text-lg font-bold text-white mb-2">${s.title}</h3>
        <p class="text-sm text-mfx-textMuted">${s.desc}</p>
      </div>`;
    }
    return `
    <div class="glass-panel p-6 rounded-lg border border-mfx-primary/30 relative overflow-hidden group hover:-translate-y-1 transition-all">
      ${badgeHTML}
      <div class="w-12 h-12 rounded bg-mfx-border/50 flex items-center justify-center text-2xl text-mfx-primary mb-4 relative z-10 group-hover:bg-mfx-primary group-hover:text-black transition-colors">
        <i class="${s.icon}"></i>
      </div>
      <h3 class="text-lg font-bold text-white mb-2 relative z-10">${s.title}</h3>
      <p class="text-sm text-mfx-textMuted relative z-10">${s.desc}</p>
    </div>`;
  }).join("");

  const whyUsHTML = whyUs.map(w => `
    <div>
      <div class="flex items-center gap-2 text-mfx-primary font-bold mb-2"><i class="${w.icon} text-xl"></i> ${w.title}</div>
      <p class="text-sm text-mfx-textMuted">${w.desc}</p>
    </div>`).join("");

  const techSkillsHTML = skills.technical.map(s => `
    <div>
      <div class="flex justify-between text-sm mb-1 font-code"><span class="text-white">${s.name}</span><span class="text-mfx-primary">${s.level}%</span></div>
      <div class="h-1.5 w-full bg-mfx-panel rounded overflow-hidden border border-mfx-border"><div class="h-full bg-mfx-primary rounded" style="width: ${s.level}%"></div></div>
    </div>`).join("");

  const softSkillsHTML = skills.soft.map(s => `
    <div>
      <div class="flex justify-between text-sm mb-1 font-code"><span class="text-white">${s.name}</span><span class="text-mfx-primary">${s.level}%</span></div>
      <div class="h-1.5 w-full bg-mfx-panel rounded overflow-hidden border border-mfx-border"><div class="h-full bg-mfx-primary rounded" style="width: ${s.level}%"></div></div>
    </div>`).join("");

  const techStackHTML = skills.techStack.map(t => `
    <div class="flex items-center gap-2 px-4 py-2 bg-mfx-panel rounded-full border border-mfx-border text-sm"><i class="${t.icon} text-xl ${t.color}"></i> ${t.label}</div>`).join("");

  const paymentCardsHTML = payment.accounts.map(acc => `
    <div class="glass-panel p-6 rounded-xl border border-mfx-border tech-border relative group">
      <div class="absolute top-4 right-4 text-2xl text-mfx-textMuted group-hover:text-mfx-primary transition-colors"><i class="${acc.icon}"></i></div>
      <h3 class="text-lg font-bold text-white mb-1">${acc.name}</h3>
      <p class="text-xs text-mfx-textMuted font-tech mb-4">${acc.type}</p>
      <div class="bg-mfx-bg p-3 rounded flex justify-between items-center group-hover:border-mfx-primary border border-transparent transition-colors">
        <code class="text-mfx-primary font-mono text-lg tracking-wider">${acc.number}</code>
        <button onclick="copyText('${acc.number}', this)" class="text-mfx-textMuted hover:text-white" title="Copy"><i class="ph ph-copy"></i></button>
      </div>
    </div>`).join("");

  const paymentGuideHTML = payment.guide.map(g => `
    <div class="glass-panel p-4 rounded-lg border ${g.highlight ? "border-mfx-primary/50" : "border-mfx-border"} text-center flex-1 bg-mfx-panel z-10">
      <div class="w-8 h-8 rounded-full ${g.highlight ? "bg-white" : "bg-mfx-primary"} text-black font-bold flex items-center justify-center mx-auto mb-3 text-sm">${g.highlight ? '<i class="ph-bold ph-check"></i>' : g.step}</div>
      <h4 class="font-bold text-white text-sm mb-1">${g.title}</h4>
      <p class="text-xs text-mfx-textMuted">${g.desc}</p>
    </div>`).join("");

  const reviewsHTML = reviews.items.map(r => `
    <div class="glass-panel p-6 rounded-lg border border-mfx-border relative">
      <i class="ph-fill ph-quotes text-3xl text-mfx-border absolute top-4 right-4"></i>
      <div class="flex text-mfx-primary text-sm mb-3"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i></div>
      <p class="text-sm text-mfx-textMain mb-4 italic">${r.text}</p>
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-mfx-border flex items-center justify-center font-bold text-white">${r.initial}</div>
        <div>
          <div class="font-bold text-white text-sm">${r.name}</div>
          <div class="text-xs text-mfx-textMuted">${r.location}</div>
        </div>
      </div>
    </div>`).join("");

  const timelineHTML = profile.timeline.map(t => {
    if (t.featured) {
      return `
      <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-mfx-primary text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
          <i class="${t.icon}"></i>
        </div>
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 rounded border border-mfx-primary/50 tech-border">
          <div class="flex items-center justify-between mb-1">
            <div class="font-bold text-white">${t.title}</div>
            <time class="font-tech text-xs text-mfx-primary">${t.year}</time>
          </div>
          <div class="text-sm text-mfx-textMuted">${t.desc}</div>
        </div>
      </div>`;
    }
    return `
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-mfx-panel text-mfx-textMuted group-[.is-active]:text-mfx-primary group-[.is-active]:border-mfx-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
        <i class="${t.icon}"></i>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 rounded border border-mfx-border tech-border">
        <div class="flex items-center justify-between mb-1">
          <div class="font-bold text-white">${t.title}</div>
          <time class="font-tech text-xs text-mfx-primary">${t.year}</time>
        </div>
        <div class="text-sm text-mfx-textMuted">${t.desc}</div>
      </div>
    </div>`;
  }).join("");

  const profileTagsHTML = profile.tags.map(t => `<span class="px-2 py-1 bg-mfx-border/50 rounded border border-mfx-border">${t}</span>`).join("");
  const missionPointsHTML = profile.mission.points.map(p => `<li class="flex items-start gap-2"><i class="ph ph-check text-mfx-primary mt-0.5"></i> ${p}</li>`).join("");
  const visionPointsHTML = profile.vision.points.map(p => `<li class="flex items-start gap-2"><i class="ph ph-check text-mfx-primary mt-0.5"></i> ${p}</li>`).join("");
  const faqHTML = faq.map(f => `
    <div class="glass-panel border border-mfx-border rounded-lg overflow-hidden faq-item cursor-pointer" onclick="toggleFAQ(this)">
      <div class="p-4 flex justify-between items-center bg-mfx-panel/50 hover:bg-mfx-panel transition-colors">
        <h4 class="font-bold text-white text-sm">${f.q}</h4>
        <i class="ph-bold ph-caret-down text-mfx-textMuted transition-transform duration-300"></i>
      </div>
      <div class="px-4 py-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-sm text-mfx-textMuted faq-content">
        <div class="pb-4">${f.a}</div>
      </div>
    </div>`).join("");

  const waGroupBenefitsHTML = community.whatsapp.benefits.map(b => `<li class="flex items-start gap-2"><i class="ph ph-check-circle text-mfx-primary mt-0.5"></i> ${b}</li>`).join("");
  const tgGroupBenefitsHTML = community.telegram.benefits.map(b => `<li class="flex items-start gap-2"><i class="ph ph-check-circle text-mfx-primary mt-0.5"></i> ${b}</li>`).join("");

  const structuredDataOrg = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": brand.name,
    "url": seo.siteUrl,
    "description": seo.description,
    "telephone": contact.whatsapp,
    "email": contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gua Musang",
      "addressRegion": "Kelantan",
      "addressCountry": "MY"
    },
    "sameAs": [contact.telegramLink, contact.whatsappLink],
    "openingHours": "Mo-Su 09:00-24:00",
    "priceRange": "RM",
    "image": seo.ogImage,
    "areaServed": "Malaysia",
    "serviceType": ["Game Boosting", "Game Topup", "Website Development", "Logo Design", "AI Customer Service"]
  });

  const structuredDataWebsite = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": brand.name,
    "url": seo.siteUrl,
    "description": seo.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": seo.siteUrl + "?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  return renderTemplate({
    seo, brand, contact, payment, reviews, community, profile, footer, systemInfo,
    bootSeqJSON: JSON.stringify(bootSequence),
    structuredDataOrg, structuredDataWebsite,
    navHTML, statsHTML, dashBadgesHTML, welcomeTagsHTML, servicesHTML, whyUsHTML,
    techSkillsHTML, softSkillsHTML, techStackHTML, paymentCardsHTML, paymentGuideHTML,
    reviewsHTML, waGroupBenefitsHTML, tgGroupBenefitsHTML,
    profileTagsHTML, missionPointsHTML, visionPointsHTML, faqHTML, timelineHTML,
  });
}

module.exports = buildHTML;

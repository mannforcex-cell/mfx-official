const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const config = require("./config");
const buildHTML = require("./src/builder");
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
const PORT = process.env.PORT || 5000;
const html = buildHTML(config);
const css = fs.readFileSync(path.join(__dirname, "public/style.css"), "utf8");
const appJs = fs.readFileSync(path.join(__dirname, "public/app.js"), "utf8");

// ================= SOCIALGO API =================
const { apiUrl, apiKey, secretKey } = config.socialgo;

function createSignature(action, timestamp) {
  return crypto.createHash("md5").update(apiKey + secretKey + action + timestamp).digest("hex");
}

function socialgoApi(action, params = {}) {
  return new Promise((resolve) => {
    const timestamp = Date.now();
    const signature = createSignature(action, timestamp);
    const body = new URLSearchParams({
      action,
      api_key: apiKey,
      secret_key: secretKey,
      timestamp,
      signature,
      ...params,
    }).toString();

    const urlObj = new URL(apiUrl);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); } catch { resolve({ status: false, data: { msg: "Invalid response" } }); }
      });
    });
    req.on("error", (e) => resolve({ status: false, data: { msg: e.message } }));
    req.write(body);
    req.end();
  });
}

function getBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
  });
}

// ================= SERVER =================
const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://localhost`);
  const url = urlObj.pathname;

  if (url === "/" || url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=3600" });
    res.end(html);

  } else if (url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css", "Cache-Control": "public, max-age=3600" });
    res.end(css);

  } else if (url === "/app.js") {
    res.writeHead(200, { "Content-Type": "application/javascript", "Cache-Control": "public, max-age=3600" });
    res.end(appJs);

  } else if (url === "/game") {
    const gamePath = path.join(__dirname, "public/game.html");
    fs.readFile(gamePath, "utf8", (err, data) => {
      if (err) { res.writeHead(404); res.end("Not found"); return; }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" });
      res.end(data);
    });

  } else if (url === "/game2") {
    const game2Path = path.join(__dirname, "public/game2.html");
    fs.readFile(game2Path, "utf8", (err, data) => {
      if (err) { res.writeHead(404); res.end("Not found"); return; }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" });
      res.end(data);
    });

  } else if (url === "/logo.png") {
    const imgPath = path.join(__dirname, "public/logo.png");
    fs.readFile(imgPath, (err, data) => {
      if (err) { res.writeHead(404); res.end("Not found"); return; }
      res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" });
      res.end(data);
    });

  } else if (url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.end(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#111118"/><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#e8e8ec">X</text></svg>`);

  } else if (url === "/robots.txt") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`User-agent: *\nAllow: /\nSitemap: ${config.seo.siteUrl}/sitemap.xml`);

  } else if (url === "/sitemap.xml") {
    res.writeHead(200, { "Content-Type": "application/xml" });
    res.end(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${config.seo.siteUrl}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);

  // ================= QRIS CREATE =================
  } else if (url === "/api/qris/create" && req.method === "POST") {
    try {
      const raw = await getBody(req);
      const params = new URLSearchParams(raw);
      const amount = parseInt(params.get("amount"));
      if (!amount || amount < 500) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ status: false, msg: "Jumlah minimum adalah 500" }));
      }
      const result = await socialgoApi("deposit", { method: "qris", amount });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: false, msg: e.message }));
    }

  // ================= EWALLET (DANA/OVO) CREATE =================
  } else if (url === "/api/ewallet/create" && req.method === "POST") {
    try {
      const raw = await getBody(req);
      const params = new URLSearchParams(raw);
      const method = params.get("method");
      const amount = parseInt(params.get("amount"));
      const ewallet_phone = (params.get("phone") || "").trim();
      if (!["dana", "ovo", "linkaja"].includes(method)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ status: false, msg: "Metode tidak valid" }));
      }
      if (!amount || amount < 10000) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ status: false, msg: "Jumlah minimum adalah 10.000" }));
      }
      if (!ewallet_phone || !/^08\d{8,11}$/.test(ewallet_phone)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ status: false, msg: "Nomor HP tidak valid. Format: 08xxxxxxxxxx" }));
      }
      const result = await socialgoApi("deposit", { method, amount, ewallet_phone });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: false, msg: e.message }));
    }

  // ================= EWALLET STATUS =================
  } else if (url === "/api/ewallet/check" && req.method === "GET") {
    try {
      const deposit_id = urlObj.searchParams.get("id");
      if (!deposit_id) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ status: false, msg: "ID diperlukan" }));
      }
      const result = await socialgoApi("deposit_status", { deposit_id });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: false, msg: e.message }));
    }

  // ================= QRIS STATUS =================
  } else if (url === "/api/qris/check" && req.method === "GET") {
    try {
      const deposit_id = urlObj.searchParams.get("id");
      if (!deposit_id) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ status: false, msg: "ID diperlukan" }));
      }
      const result = await socialgoApi("deposit_status", { deposit_id });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (e) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: false, msg: e.message }));
    }

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`MANN FORCE X Portal running on http://0.0.0.0:${PORT}`);
});
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

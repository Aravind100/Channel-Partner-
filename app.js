/*
  Financial Partner Portal
  WhatsApp links are REAL <a href="https://wa.me/..."> links.
  They do not depend on a click handler, popup, or JavaScript navigation.
*/

const services = [
  ["◈","Mutual Funds","Professionally managed pooled investments across eligible schemes."],
  ["◌","PMS","Professionally managed portfolios for eligible investors."],
  ["◇","AIF","Alternative investment strategies for eligible investors."],
  ["✦","SIF","Specialized Investment Fund category, subject to applicable eligibility."],
  ["◍","Intelligent Model Portfolio","Structured/model-based investment solutions; market-linked and subject to risk."],
  ["⬡","Private Equity","Opportunities involving privately held businesses, subject to availability and eligibility."],
  ["◆","Unlisted Shares","Shares of companies not currently listed on public stock exchanges."],
  ["▣","Bonds & NCDs","Fixed-income opportunities across eligible issuers and securities."],
  ["♢","Life Insurance","Protection and long-term financial planning solutions."],
  ["♡","Health Insurance","Health protection solutions based on applicable terms."],
  ["▤","General Insurance","Insurance solutions for applicable general risks."],
  ["▥","Demat & Broking","Market access and securities-account solutions."]
];

const partnerServices = [
  ["Demat Account",["Aadhaar Card","PAN Card","Email ID","Mobile Number","Signature on blank paper","Bank Details","Nominee PAN Number","Nominee Mobile Number","Nominee Email ID"],"Hello, I am an existing Channel Partner. I want to submit documents for a Demat Account. I have the required documents ready. Please guide me for the next step."],
  ["Third-Party Insurance Quotation",["RC Book — Front & Back"],"Hello, I am an existing Channel Partner. I want to request a Third-Party Insurance Quotation. I have the RC Book ready. Please guide me."],
  ["Complete Insurance Quotation",["RC Book — Front & Back","Previous Policy Copy","Claim on Previous Policy — Yes / No"],"Hello, I am an existing Channel Partner. I want to request a Complete Insurance Quotation. Please guide me for the document submission."],
  ["Vehicle Policy Login",["Aadhaar Card","PAN Card","Email ID","Mobile Number","Nominee Name","Nominee Relationship","Nominee Date of Birth"],"Hello, I am an existing Channel Partner. I want to submit documents for Vehicle Policy Login. Please guide me for the next step."],
  ["Life & Health Insurance Quotation",["Date of Birth","Smoker / Non-Smoker","Any Pre-existing Disease"],"Hello, I am an existing Channel Partner. I want to request a Life / Health Insurance Quotation. Please guide me for the required information."]
];

// Kept in one place for generated WhatsApp links.
const WHATSAPP_NUMBER = String((window.SITE_CONFIG && window.SITE_CONFIG.whatsappNumber) || "919173334069").replace(/\D/g, "");

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(String(message || "Hello, I would like to know more about your financial services."))}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Service links are direct WhatsApp links. No JS click handler is required.
document.getElementById("serviceCards").innerHTML = services.map(s => {
  const message = `Hello, I would like to know more about ${s[1]}. Please guide me.`;
  return `
    <article class="service-card">
      <div class="icon">${escapeHtml(s[0])}</div>
      <h3>${escapeHtml(s[1])}</h3>
      <p>${escapeHtml(s[2])}</p>
      <a class="text-link" href="${whatsappUrl(message)}" target="_blank" rel="noopener noreferrer">Talk to us →</a>
    </article>`;
}).join("");

// Partner-service buttons are anchors with real hrefs, so they work without a click listener.
document.getElementById("partnerServices").innerHTML = partnerServices.map(s => `
  <article class="partner-card">
    <span class="eyebrow">DOCUMENT CHECKLIST</span>
    <h3>${escapeHtml(s[0])}</h3>
    <ul>${s[1].map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
    <a class="btn" href="${whatsappUrl(s[2])}" target="_blank" rel="noopener noreferrer">Send / Request on WhatsApp</a>
  </article>`).join("");

// Opportunity enquiry buttons are direct WhatsApp links too.
document.getElementById("bondTable").innerHTML = BONDS.map(b => {
  const message = `Hello, I would like to enquire about the bond: ${b.issuer}. Please share current availability and details.`;
  return `<tr>
    <td>${escapeHtml(b.issuer)}</td><td>${escapeHtml(b.type)}</td><td>${escapeHtml(b.coupon)}</td><td>${escapeHtml(b.maturity)}</td><td>${escapeHtml(b.frequency)}</td><td>${escapeHtml(b.price)}</td><td>${escapeHtml(b.yield)}</td><td>${escapeHtml(b.minInvestment)}</td><td>${escapeHtml(b.updated)}</td>
    <td><a class="table-btn" href="${whatsappUrl(message)}" target="_blank" rel="noopener noreferrer">Enquire</a></td>
  </tr>`;
}).join("");

document.getElementById("unlistedTable").innerHTML = UNLISTED_SHARES.map(b => {
  const message = `Hello, I would like to enquire about the unlisted share: ${b.company}. Please share current availability and details.`;
  return `<tr>
    <td>${escapeHtml(b.company)}</td><td>${escapeHtml(b.securityType)}</td><td>${escapeHtml(b.price)}</td><td>${escapeHtml(b.minQty)}</td><td>${escapeHtml(b.minInvestment)}</td><td>${escapeHtml(b.updated)}</td>
    <td><a class="table-btn" href="${whatsappUrl(message)}" target="_blank" rel="noopener noreferrer">Enquire</a></td>
  </tr>`;
}).join("");

// Only the mobile navigation remains a JavaScript interaction.
document.addEventListener("click", e => {
  if (e.target.closest(".menu-btn")) {
    document.querySelector(".nav").classList.toggle("open");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

// Centralized personal/contact details. This enhances already-working static links.
(function initPersonalBranding() {
  const c = window.SITE_CONFIG || {};
  const waNumber = String(c.whatsappNumber || "919173334069").replace(/\D/g, "");
  const email = c.email || "aravindchaudhary90@gmail.com";
  const name = c.name || "Aravind Chaudhary";
  const role = c.role || "Area Manager | Financial Services";
  const location = c.location || "Ahmedabad, Gujarat, India";

  document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = name);
  document.querySelectorAll("[data-site-role]").forEach(el => el.textContent = role);
  document.querySelectorAll("[data-site-location]").forEach(el => el.textContent = location);

  const message = `Hello ${name}, I would like to know more about your financial services / Channel Partner solutions.`;
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  });
  document.querySelectorAll("[data-email-link]").forEach(el => {
    el.href = `mailto:${email}`;
  });
})();

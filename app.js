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

function wa(message){
  const n=(SITE_CONFIG.whatsappNumber||"").replace(/\D/g,"");
  if(!n || n.includes("XXXXXXXX")) { alert("Please configure your WhatsApp number in config.js first."); return; }
  window.open(`https://wa.me/${n}?text=${encodeURIComponent(message)}`,"_blank","noopener");
}

document.getElementById("serviceCards").innerHTML=services.map(s=>`
  <article class="service-card"><div class="icon">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p>
  <a class="text-link" href="#contact" data-wa-message="Hello, I would like to know more about ${s[1]}. Please guide me.">Talk to us →</a></article>`).join("");

document.getElementById("partnerServices").innerHTML=partnerServices.map(s=>`
  <article class="partner-card"><span class="eyebrow">DOCUMENT CHECKLIST</span><h3>${s[0]}</h3>
  <ul>${s[1].map(x=>`<li>${x}</li>`).join("")}</ul>
  <button class="btn" data-wa-message="${s[2]}">Send / Request on WhatsApp</button></article>`).join("");

document.getElementById("bondTable").innerHTML=BONDS.map(b=>`
<tr><td>${b.issuer}</td><td>${b.type}</td><td>${b.coupon}</td><td>${b.maturity}</td><td>${b.frequency}</td><td>${b.price}</td><td>${b.yield}</td><td>${b.minInvestment}</td><td>${b.updated}</td><td><button class="table-btn" data-wa-message="Hello, I would like to enquire about the bond: ${b.issuer}. Please share current availability and details.">Enquire</button></td></tr>`).join("");

document.getElementById("unlistedTable").innerHTML=UNLISTED_SHARES.map(b=>`
<tr><td>${b.company}</td><td>${b.securityType}</td><td>${b.price}</td><td>${b.minQty}</td><td>${b.minInvestment}</td><td>${b.updated}</td><td><button class="table-btn" data-wa-message="Hello, I would like to enquire about the unlisted share: ${b.company}. Please share current availability and details.">Enquire</button></td></tr>`).join("");

document.addEventListener("click",e=>{
  const el=e.target.closest("[data-wa-message]");
  if(el){e.preventDefault();wa(el.dataset.waMessage)}
  if(e.target.closest(".menu-btn")) document.querySelector(".nav").classList.toggle("open");
});
document.getElementById("year").textContent=new Date().getFullYear();


// Centralized personal/contact details
(function initPersonalBranding() {
  const c = window.SITE_CONFIG || {};
  const wa = String(c.whatsappNumber || "919173334069").replace(/\D/g, "");
  const email = c.email || "aravindchaudhary90@gmail.com";
  const name = c.name || "Aravind Chaudhary";
  const role = c.role || "Area Manager | Financial Services";
  const location = c.location || "Ahmedabad, Gujarat, India";

  document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = name);
  document.querySelectorAll("[data-site-role]").forEach(el => el.textContent = role);
  document.querySelectorAll("[data-site-location]").forEach(el => el.textContent = location);

  const message = encodeURIComponent(
    `Hello ${name}, I would like to know more about your financial services / Channel Partner solutions.`
  );
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = `https://wa.me/${wa}?text=${message}`;
  });
  document.querySelectorAll("[data-email-link]").forEach(el => {
    el.href = `mailto:${email}`;
  });
})();

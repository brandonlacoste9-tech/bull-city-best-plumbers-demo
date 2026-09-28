/* EN-only i18n for Bull City Best Plumbers demo */
const i18n = {
  en: {
    "services.s1t": "Emergency plumbing",
    "services.s1d": "Burst pipes and urgent leaks handled fast, any hour.",
    "services.s2t": "Drain cleaning",
    "services.s2d": "Clogged drains cleared quickly and cleanly.",
    "services.s3t": "Water heaters",
    "services.s3d": "Repair and replacement of tank and tankless units.",
    "services.s4t": "Leak detection &amp; repair",
    "services.s4d": "We find hidden leaks and fix them right.",
    "services.s5t": "Sewer line service",
    "services.s5d": "Sewer repairs and line inspections.",
    "services.s6t": "Fixture installation",
    "services.s6d": "Faucets, toilets and fixtures installed right.",
    "nav.call": "(984) 256-7948",
    "hero.kicker": "Durham, North Carolina · Plumbing &amp; drain · Open 24/7",
    "hero.title": "Durham&#8217;s 5-star plumbers<br>— day or night.",
    "hero.sub": "Rated 5.0 out of 5 from 107 reviews: emergency plumbing, drains, water heaters and leak repair across Durham.",
    "hero.cta1": "Call __PHONE__",
    "trust.t1t": "5.0-star rated",
    "trust.t1d": "107 verified reviews",
    "trust.t2t": "24/7 emergency",
    "trust.t2d": "We answer around the clock",
    "trust.t3t": "Upfront pricing",
    "trust.t3d": "You approve the price first",
    "stats.s1n": "5.0\\u2605",
    "stats.s1l": "from 107 reviews",
    "stats.s2n": "24/7",
    "stats.s2l": "emergency service",
    "stats.s3n": "Durham",
    "stats.s3l": "&amp; surrounding areas",
    "stats.s4n": "Water heaters",
    "stats.s4l": "&amp; drains done right",
    "services.title": "Plumbing help, whenever you need it",
    "why.title": "Why Durham calls Bull City",
    "why.intro": "A perfect 5.0 rating from more than a hundred reviews — earned one fixed leak at a time, around the clock.",
    "why.l1t": "Always open",
    "why.l1d": "24/7 service for emergencies big and small.",
    "why.l2t": "5-star reputation",
    "why.l2d": "107 reviews averaging a perfect 5.0.",
    "why.l3t": "Upfront pricing",
    "why.l3d": "Clear quotes before we start.",
    "why.l4t": "Local &amp; responsive",
    "why.l4d": "Based on E Main St in Durham.",
    "gallery.kicker": "On the job",
    "gallery.title": "Real work, real results",
    "gallery.c1": "Water heater installs done right",
    "gallery.c2": "Drain cleaning, fast and clean",
    "reviews.title": "Rated 5.0 out of 5 by Durham homeowners",
    "reviews.more": "See what customers say about us — 5.0 stars from 107 reviews",
    "faq.q1": "Do you really work 24/7?",
    "faq.a1": "Yes — call (984) 256-7948 any time, day or night.",
    "faq.q2": "How fast can you get here?",
    "faq.a2": "We prioritize emergencies and serve Durham and the surrounding areas.",
    "faq.q3": "Do you install water heaters?",
    "faq.a3": "Yes — we repair and replace tank and tankless water heaters.",
    "faq.q4": "How much will it cost?",
    "faq.a4": "You get an upfront price before any work begins — no surprises.",
    "contact.hoursVal": "Open 24 hours<br>7 days a week",
    "footer.tag": "Plumber · Durham, North Carolina",
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.cta2": "See services",
    "services.kicker": "What we do",
    "why.kicker": "Why choose us",
    "reviews.kicker": "Word on the street",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.cta": "Call now",
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});

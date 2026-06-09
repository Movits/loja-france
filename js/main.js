/* =========================================================
   BOUTIQUE FRANCE - Interações e renderização
   Lê o conteúdo de config.js (window.FRANCE) e monta as seções.
   ========================================================= */
(function () {
  "use strict";
  var F = window.FRANCE || {};
  var IMG = "./assets/img/";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Links (WhatsApp, Instagram, Maps) ---------- */
  function buildLinks() {
    var c = F.contato || {};
    var wa = "https://wa.me/" + (c.whatsapp || "") +
      (c.whatsappMsg ? "?text=" + encodeURIComponent(c.whatsappMsg) : "");
    $$("[data-wa]").forEach(function (el) {
      el.href = wa; el.target = "_blank"; el.rel = "noopener";
    });
    $$("[data-ig]").forEach(function (el) {
      if (c.instagram) el.href = c.instagram; el.target = "_blank"; el.rel = "noopener";
    });
    $$("[data-maps]").forEach(function (el) {
      if (c.maps) el.href = c.maps; el.target = "_blank"; el.rel = "noopener";
    });
  }

  /* ---------- Marquee ---------- */
  function buildMarquee() {
    var track = $("#marqueeTrack");
    if (!track || !F.marquee) return;
    var html = F.marquee.map(function (t) { return "<span>" + t + "</span>"; }).join("");
    track.innerHTML = html + html; // duplica para loop contínuo
  }

  /* ---------- Coleções ---------- */
  function buildColecoes() {
    var grid = $("#colecoesGrid");
    if (!grid || !F.colecoes) return;
    grid.innerHTML = F.colecoes.map(function (col) {
      return '<article class="colecao reveal" tabindex="0">' +
        '<img src="' + IMG + col.img + '" alt="' + col.nome + '" loading="lazy" />' +
        '<div class="colecao__body">' +
          '<p class="colecao__sub">' + (col.sub || "") + '</p>' +
          '<h3 class="colecao__name">' + col.nome + '</h3>' +
          '<p class="colecao__desc">' + (col.desc || "") + '</p>' +
        '</div></article>';
    }).join("");
  }

  /* ---------- Lookbook ---------- */
  function buildLookbook() {
    var grid = $("#lookbookGrid");
    if (!grid || !F.lookbook) return;
    grid.innerHTML = F.lookbook.map(function (item, i) {
      var cls = "lookbook__item reveal" + (item.size === "wide" ? " is-wide" : "");
      return '<figure class="' + cls + '" data-lb="' + i + '" tabindex="0" role="button" aria-label="Ampliar: ' + (item.cap || "foto") + '">' +
        '<img src="' + IMG + item.img + '" alt="' + (item.cap || "Look da Boutique France") + '" loading="lazy" />' +
        (item.cap ? '<figcaption>' + item.cap + '</figcaption>' : "") +
        '</figure>';
    }).join("");
  }

  /* ---------- Avaliações ---------- */
  function initials(name) {
    return name.split(" ").map(function (p) { return p[0]; }).slice(0, 2).join("").toUpperCase();
  }
  function buildAvaliacoes() {
    var grid = $("#avaliacoesGrid");
    if (!grid || !F.avaliacoes) return;
    grid.innerHTML = F.avaliacoes.map(function (r) {
      return '<article class="review reveal">' +
        '<div class="review__stars" aria-label="5 de 5 estrelas">★★★★★</div>' +
        '<p class="review__text">“' + r.texto + '”</p>' +
        '<div class="review__author">' +
          '<span class="review__avatar" aria-hidden="true">' + initials(r.nome) + '</span>' +
          '<span><span class="review__name">' + r.nome + '</span><br>' +
          '<span class="review__role">' + (r.role || "Google") + '</span></span>' +
        '</div></article>';
    }).join("");
  }

  /* ---------- Header ao rolar ---------- */
  function initHeader() {
    var header = $("#siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Menu mobile ---------- */
  function initNav() {
    var toggle = $("#navToggle"), nav = $("#primaryNav");
    if (!toggle || !nav) return;
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
  }

  /* ---------- Reveal no scroll ---------- */
  function initReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    var box = $("#lightbox"), img = $("#lbImg"), cap = $("#lbCap");
    if (!box) return;
    var items = F.lookbook || [];
    var idx = 0;
    var show = function (i) {
      idx = (i + items.length) % items.length;
      var it = items[idx];
      img.src = IMG + it.img; img.alt = it.cap || "Look da Boutique France";
      cap.textContent = it.cap || "";
    };
    var open = function (i) { show(i); box.classList.add("open"); box.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; };
    var close = function () { box.classList.remove("open"); box.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };

    $("#lookbookGrid").addEventListener("click", function (e) {
      var fig = e.target.closest("[data-lb]");
      if (fig) open(parseInt(fig.getAttribute("data-lb"), 10));
    });
    $("#lookbookGrid").addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ")) {
        var fig = e.target.closest("[data-lb]");
        if (fig) { e.preventDefault(); open(parseInt(fig.getAttribute("data-lb"), 10)); }
      }
    });
    $("#lbClose").addEventListener("click", close);
    $("#lbPrev").addEventListener("click", function () { show(idx - 1); });
    $("#lbNext").addEventListener("click", function () { show(idx + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(idx - 1);
      else if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ---------- Ano no rodapé ---------- */
  function setYear() { var y = $("#ano"); if (y) y.textContent = new Date().getFullYear(); }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildLinks();
    buildMarquee();
    buildColecoes();
    buildLookbook();
    buildAvaliacoes();
    initHeader();
    initNav();
    initLightbox();
    setYear();
    initReveal(); // por último, já com os cards renderizados
  });
})();

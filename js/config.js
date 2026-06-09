/* =========================================================
   BOUTIQUE FRANCE - Conteúdo editável
   ---------------------------------------------------------
   👉 ESTE É O ARQUIVO QUE VOCÊ EDITA para mudar textos, fotos,
      contatos e avaliações. Não precisa mexer no resto.
   - Imagens: coloque os arquivos em assets/img/ e use só o
     nome do arquivo (ex.: "fachada.png").
   ========================================================= */
window.FRANCE = {
  /* ---- Contato e links (mude aqui e vale no site todo) ---- */
  contato: {
    whatsapp: "556186111616",            // só números, com 55 (Brasil) + DDD
    whatsappMsg: "Olá! Vim pelo site da France e gostaria de mais informações 😊",
    telefoneDisplay: "(61) 9 8611-1616",
    instagram: "https://www.instagram.com/france.spw/",
    instagramUser: "@france.spw",
    maps: "https://maps.app.goo.gl/7fdJT6zxN2mkbYa66"
  },

  /* ---- Faixa rolante (nomes que passam animados) ---- */
  marquee: [
    "Saint Rémy de Provence", "Bordeaux", "Chamonix Mont-Blanc",
    "Édition Limitée", "Pierre Cardin Paris", "Sportswear", "Use & Presenteie"
  ],

  /* ---- Coleções (cards) ---- */
  colecoes: [
    { sub: "Provence · França",  nome: "Saint Rémy de Provence", desc: "Linho e alfaiataria leve para dias de sol.",      img: "linho-dupla.png" },
    { sub: "Édition Limitée",    nome: "100% Puro Linho",         desc: "Camisaria em fibras naturais, edição limitada.",  img: "linho-flatlay.png" },
    { sub: "Mont-Blanc · França",nome: "Chamonix",                desc: "Tricôs e malhas para o friozinho de Brasília.",   img: "tricot-feminino.png" },
    { sub: "Náutic Club",        nome: "Sportswear",              desc: "Casual e esportivo com pegada francesa.",          img: "look-bomber.jpg" },
    { sub: "Denim premium",      nome: "Jeans France",            desc: "Modelagens que vestem bem de verdade.",            img: "jeans-rolos.jpg" },
    { sub: "Paris · ícone",      nome: "Pierre Cardin",           desc: "Clássicos atemporais. Revendedor autorizado.",     img: "polo-creme.png" }
  ],

  /* ---- Lookbook / galeria (size opcional: "wide") ---- */
  lookbook: [
    { img: "fachada.png",           cap: "Nossa loja na 107 Sul" },
    { img: "look-bomber.jpg",       cap: "Look Sportswear France" },
    { img: "linho-dupla.png",       cap: "Coleção Saint Rémy de Provence", pos: "center top" },
    { img: "vestido-vermelho.png",  cap: "Feminino · Use & Presenteie" },
    { img: "polo-creme.png",        cap: "Polo em algodão" },
    { img: "look-listrada.jpg",     cap: "Camisaria France" },
    { img: "linho-flatlay.png",     cap: "Édition Limitée · 100% linho", size: "wide" },
    { img: "tricot-feminino.png",   cap: "Tricot · linha Chamonix" },
    { img: "jeans-pierre.png",      cap: "Jeans Pierre Cardin" },
    { img: "detalhe-polos.jpg",     cap: "Polos France" }
  ],

  /* ---- Avaliações reais (Google) ---- */
  avaliacoes: [
    { nome: "Paulo Pereira",   role: "Google · 3 anos atrás", texto: "Recebi um tratamento fantástico. Loja linda e organizada. Todos muito educados e excelentes roupas. Com certeza voltarei muitas vezes." },
    { nome: "Leandro Galvão",  role: "Local Guide · Google",  texto: "Roupas masculinas de qualidade e bom preço. O atendimento também é muito simpático!" },
    { nome: "Jaqueline Castro",role: "Local Guide · Google",  texto: "Roupas de excelente qualidade, preço justo e atendimento nota 10." },
    { nome: "Lucilene Andrade",role: "Google · 2 anos atrás", texto: "Entrei pra experimentar um vestido da vitrine, fui muito bem atendida, acabei levando dois vestidos." },
    { nome: "Simone Leão",     role: "Google · 1 ano atrás",  texto: "Atendimento excelente, Sra. Silvana e Sr. Carlos, parabéns, sem contar a qualidade!" },
    { nome: "Daniela Damasceno",role: "Google · 2 anos atrás",texto: "Roupas que vestem super bem. Atendimento fantástico." }
  ]
};

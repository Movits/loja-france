# Boutique France · site vitrine

Landing page (vitrine) da **Boutique France**, na Asa Sul, Brasília.
Site estático, sem build, publicado no **GitHub Pages**.

🔗 **No ar em:** https://movits.github.io/loja-france/

> Objetivo: apresentar a loja de forma bonita e levar as pessoas até a loja física,
> WhatsApp, Instagram e Google Maps. (Não vende online por enquanto.)

---

## Como editar o conteúdo (sem saber programar)

Quase tudo fica em **um único arquivo**: [`js/config.js`](js/config.js).
Abra, edite o texto entre aspas e salve. As principais partes:

| O que muda | Onde |
|------------|------|
| WhatsApp, Instagram, telefone, link do Maps | `contato` |
| Nomes que passam na faixa animada | `marquee` |
| Cards de coleções (nome, descrição, foto) | `colecoes` |
| Fotos do lookbook (galeria) | `lookbook` |
| Avaliações dos clientes | `avaliacoes` |

Textos maiores (slogan, "A Boutique", endereço e horário) ficam no
[`index.html`](index.html). Procure a seção correspondente; há comentários guiando.

### Trocar uma foto
1. Salve a imagem em `assets/img/` (de preferência `.jpg`, boa resolução).
2. Em `js/config.js`, troque o nome do arquivo (ex.: `"linho-dupla.png"` → `"verao.jpg"`).

### Cores e fontes
Ficam no topo de [`css/styles.css`](css/styles.css), em `:root` (ex.: `--blue`, `--cream`).

---

## Estrutura

```
index.html         → a página (estrutura + textos + SEO)
css/styles.css     → visual (cores, layout, animações)
js/config.js       → conteúdo editável (textos, fotos, contatos)
js/main.js         → interações (menu, galeria, animações)
assets/img/        → imagens
favicon.svg        → ícone da aba
```

## Rodar localmente
Abrir `index.html` direto no navegador já funciona. Para o melhor resultado:
```bash
npx serve .
# ou
python -m http.server
```

## Publicar alterações
Todo `git push` para a branch `main` atualiza o site no ar automaticamente.

---

## Fotos que ainda ajudariam (qualidade máxima)
- 🌃 **Fachada à noite** em alta resolução (foto principal do site).
- Qualquer imagem `.png` que esteja serrilhada, reenviar em tamanho maior.

## Ideias para o futuro
- Domínio próprio (ex.: `boutiquefrance.com.br`) via arquivo `CNAME`.
- Catálogo com mais peças / categorias.
- Venda online (e-commerce) quando fizer sentido.

# Gabriel Barioni — Site Pessoal

Feed editorial tipo rede social, com posts sobre consciência, presença e vida intencional.

## Estrutura

```
gabrielbarioni/
├── index.html          ← Feed principal
├── css/
│   └── style.css       ← Todo o estilo
├── js/
│   ├── posts.js        ← Dados/conteúdo dos posts
│   └── main.js         ← Interatividade (menu, modal, cursor)
├── pages/
│   ├── sobre.html
│   └── contato.html
└── assets/             ← Coloque suas imagens aqui (post1.jpg, post2.jpg...)
```

## Como adicionar um novo post

**1. Em `js/posts.js`**, adicione um novo objeto:
```js
meupost: {
  category: "Categoria",
  title: "Título do Post.",
  date: "ABR 2025",
  read: "5 min leitura",
  icon: "✦",
  bg: "linear-gradient(135deg, #0a0a0a, #1a1a2a)",
  content: `<p>Seu texto aqui...</p>`
}
```

**2. Em `index.html`**, adicione o card no `<main class="feed">`:
```html
<article class="card" data-slug="meupost" onclick="openPost('meupost')">
  <div class="card-img-wrap">
    <img src="assets/meupost.jpg" alt="Meu Post" onerror="this.style.display='none'" />
    <div class="card-img-placeholder" style="background: linear-gradient(135deg, #0a0a0a, #1a1a2a);">
      <span class="placeholder-icon">✦</span>
    </div>
    <div class="card-category">Categoria</div>
  </div>
  <div class="card-body">
    <h2 class="card-title">Título do Post.</h2>
    <p class="card-intro">Introdução breve aqui.</p>
    <div class="card-meta">
      <span class="card-date">ABR 2025</span>
      <span class="card-read">5 min leitura</span>
    </div>
  </div>
</article>
```

## Imagens

- Coloque as imagens na pasta `assets/`
- Nomeie como `post1.jpg`, `post2.jpg`, etc. (ou o nome que quiser, combinando com o `src` no HTML)
- Se não tiver imagem, o placeholder colorido aparece automaticamente

## Deploy no GitHub Pages

1. Suba para um repositório no GitHub
2. Vá em Settings → Pages
3. Selecione a branch `main` e pasta `/` (root)
4. Pronto — seu site estará em `https://g-barioni.github.io/gabrielbarioni`


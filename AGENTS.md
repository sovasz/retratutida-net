# retratutida-net

Site de conteúdo/afiliado sobre Retatrutida. Afiliado ao Pharmazil (pharmazil.com).

## Stack
- Astro 5 (static output)
- Cloudflare Pages
- Sem framework UI (Astro puro + CSS custom)

## Replicar para novo domínio
1. `gh repo create sovasz/<novo-dominio> --template sovasz/retratutida-net --public`
2. Clone o novo repo
3. Edite `site.config.ts` (name, domain, brand colors, affiliate UTM source)
4. Atualize `astro.config.mjs` > `site`
5. Escreva conteúdo único em `src/content/` (não reutilize conteúdo de outros sites)
6. Crie um novo projeto no Cloudflare Pages apontando para o novo repo
7. Configure o domínio custom no Cloudflare Pages

## Estrutura de conteúdo
- `src/content/blog/` — artigos longos (1500+ palavras)
- `src/content/comparar/` — comparações com tabela (frontmatter: products[], tableRows[])
- `src/content/glossario/` — definições técnicas (frontmatter: related[], products[])
- `src/content/review/` — reviews de produto (frontmatter: product, brand, rating, pros[], cons[], verdict)

## Regra de ouro
Cada domínio precisa de conteúdo genuinamente distinto — não copie artigos entre sites.
Ângulo, profundidade e formato diferentes por domínio.

## Dev
```
npm install
npm run dev
npm run build
npm run check
```

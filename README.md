# Trilinha Bordados — Site estático (Next.js + GitHub Pages)

## Rodando local

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

Gera a pasta `out/` pronta para GitHub Pages.

## Deploy

- Configure em `Settings > Pages > Source: GitHub Actions`.
- O workflow está em `.github/workflows/deploy.yml`.

## Atualizar produtos Shopee (HTML estático)

1. Salve o HTML da seção `.shop-page__all-products-section` em `tmp/shopee-section.html`.
2. Rode:

```bash
npm run parse:shopee-html
```

Isso atualiza `src/data/shopeeProducts.static.json`, consumido pela Home e pela página de patches.

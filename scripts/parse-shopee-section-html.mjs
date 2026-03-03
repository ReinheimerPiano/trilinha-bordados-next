import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";

const inputPath = process.argv[2] || "tmp/shopee-section.html";
const outputPath = process.argv[3] || "src/data/shopeeProducts.static.json";

function parseOrders(text) {
  const match = text.match(/(\d+)\s*Vendido/i);
  return match ? Number(match[1]) : 0;
}

async function main() {
  const html = await fs.readFile(path.resolve(inputPath), "utf8");
  const $ = load(html);

  const items = [];
  $(".shop-page__all-products-section .shop-search-result-view__item a.contents").each((_, element) => {
    const card = $(element);
    const title = card.find("img[alt]").first().attr("alt")?.trim() || card.find(".line-clamp-2").first().text().trim();
    const image = card.find("img[src]").first().attr("src")?.trim() || "";
    const href = card.attr("href") || "";
    const shopeeUrl = href.startsWith("http") ? href : `https://shopee.com.br${href}`;
    const priceText = card.find("span").toArray().map((node) => $(node).text().trim()).find((text) => text.startsWith("R$")) || "";
    const soldText = card.text();
    const orders = parseOrders(soldText);

    if (title && shopeeUrl) {
      items.push({
        title,
        price: priceText,
        orders,
        image,
        shopeeUrl,
      });
    }
  });

  const unique = Array.from(new Map(items.map((item) => [item.shopeeUrl, item])).values());
  await fs.writeFile(path.resolve(outputPath), `${JSON.stringify(unique, null, 2)}\n`, "utf8");
  console.log(`OK: ${unique.length} produtos gravados em ${outputPath}`);
}

main().catch((error) => {
  console.error(`Falha ao parsear HTML da Shopee: ${error.message}`);
  process.exit(1);
});

const dataFile = "/Users/asadrizvi/Documents/Projects/streethaute/packages/local/src/data.json";
// export default async function handler(req, res) {
//   const { products }  = JSON.parse((await require("fs/promises").readFile(dataFile)).toString());
//   await require("fs").writeFileSync(dataFile, JSON.stringify({products: products.map(p => {
//     p.path = "/" + p.slug;
//     return p
//   })}));
//   res.end();
// }
export default async function handler() {
  console.log("fetching products");
  const productIds = (await (await fetch("https://docs.cloud.kabeers.network/static/streethaute/products.php")).json() as any as Array<{
    "id": string,
    "description": string[],
    "productUrl": string,
  }>);
  const products = [];
  for (const product of productIds) {
    console.log("getting product: ", product.productUrl);
    console.log(encodeURIComponent(product.productUrl));
    const productData = await (await fetch("https://docs.cloud.kabeers.network/static/streethaute/product.php?id=" + encodeURIComponent(product.productUrl), { cache: "no-cache" })).text();
    try {
      products.push(JSON.parse(productData));
    } catch (e) {
      console.log(productData)
      throw e
    }
  }
  console.log("writing to data.json");
  require("fs").writeFileSync("/Users/asadrizvi/Documents/Projects/streethaute/packages/local/src/data.json", JSON.stringify({ products }));
}

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

interface ProductOption {
  quantity: number;
  price: number;
  originalPrice: number;
  savings: number;
  discount: number;
}

interface CheckoutInfo {
  template: number;
  productOptions: ProductOption[];
  timerDuration: number;
  spotLimit: number;
}

export async function getCheckoutData(templateNumber: number): Promise<CheckoutInfo> {
  const filename =
    templateNumber === 2
      ? 'splash-foam-checkout-template2.md'
      : 'splash-foam-checkout-template1.md';

  const checkoutPath = path.join(process.cwd(), '_checkout', filename);
  const fileContents = await fs.readFile(checkoutPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    template: templateNumber,
    productOptions: matterResult.data.productOptions as ProductOption[],
    timerDuration: Number(matterResult.data.timerDuration),
    spotLimit: Number(matterResult.data.spotLimit),
  };
}

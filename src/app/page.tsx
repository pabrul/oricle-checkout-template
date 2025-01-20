// src/app/page.tsx
import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import matter from 'gray-matter';
import CheckoutPage from '@/components/checkout-page';

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

export default function Home({
  searchParams,
}: {
  searchParams: { template?: string };
}) {
  // Determine which template to use from query params or default to template 1
  const templateNumber = searchParams.template ? parseInt(searchParams.template) : 1;

  // Choose the correct markdown file
  const filename = templateNumber === 2 ? 'splash-foam-checkout-template2.md' : 'splash-foam-checkout-template1.md';

  // Read the markdown file
  const checkoutPath = path.join(process.cwd(), '_checkout', filename);
  const fileContents = fs.readFileSync(checkoutPath, 'utf8');

  // Parse and validate the markdown frontmatter
  const matterResult = matter(fileContents);
  const checkoutData: CheckoutInfo = {
    template: templateNumber,
    productOptions: matterResult.data.productOptions as ProductOption[],
    timerDuration: Number(matterResult.data.timerDuration),
    spotLimit: Number(matterResult.data.spotLimit)
  };

  return (
    <main className="min-h-screen">
      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="font-bold mb-2">Template Switcher:</h2>
        <div className="space-x-4">
          <Link
            href="/?template=1"
            className={`px-4 py-2 rounded ${templateNumber === 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            Template 1
          </Link>
          <Link
            href="/?template=2"
            className={`px-4 py-2 rounded ${templateNumber === 2 ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            Template 2
          </Link>
        </div>
      </div>
      <CheckoutPage info={checkoutData} />
    </main>
  );
}
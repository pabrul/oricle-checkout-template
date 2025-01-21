'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
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

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [checkoutData, setCheckoutData] = useState<CheckoutInfo | null>(null);

  useEffect(() => {
    async function fetchData() {
      const template = searchParams.get('template') || '1';

      try {
        const response = await fetch(`/api/checkout?template=${template}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setCheckoutData(data);
      } catch (error) {
        console.error('Error fetching checkout data:', error);
      }
    }

    fetchData();
  }, [searchParams]);

  if (!checkoutData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="font-bold mb-2">Template Switcher:</h2>
        <div className="space-x-4">
          <Link
            href="/?template=1"
            prefetch={false}
            className={`px-4 py-2 rounded ${checkoutData.template === 1 ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
          >
            Template 1
          </Link>
          <Link
            href="/?template=2"
            prefetch={false}
            className={`px-4 py-2 rounded ${checkoutData.template === 2 ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
          >
            Template 2
          </Link>
        </div>
      </div>
      <CheckoutPage info={checkoutData} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<p>Loading search parameters...</p>}>
        <CheckoutContent />
      </Suspense>
    </main>
  );
}

import { NextResponse } from 'next/server';
import { getCheckoutData } from '@/lib/checkout';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const template = searchParams.get('template') ? Number(searchParams.get('template')) : 1;

  try {
    const checkoutData = await getCheckoutData(template);
    return NextResponse.json(checkoutData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}

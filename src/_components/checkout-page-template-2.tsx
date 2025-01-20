// src/_components/checkout-page-template-2.tsx
// src/_components/checkout-page-template-2.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { PayPalButton } from '../components/ui/paypal-button';

export interface ProductOption {
    quantity: number;
    price: number;
    savings: number;
    images: string[];
}

export interface CheckoutPageTemplate2Props {
    title: string;
    subtitle?: string;
    limitedOffer?: {
        enabled: boolean;
        spots: number;
        timeRemaining: string;
    };
    productOptions: ProductOption[];
}

const CheckoutPageTemplate2: React.FC<CheckoutPageTemplate2Props> = ({
    title,
    subtitle,
    limitedOffer,
    productOptions
}) => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <Image
                    src="/logo.png"
                    alt="Company Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                />
                <div className="flex items-center gap-2">
                    <Image
                        src="images/trust-badges/secure-checkout.png"
                        alt="Secure Checkout"
                        width={100}
                        height={32}
                        className="object-contain"
                    />
                </div>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                    {/* Limited Offer Banner */}
                    {limitedOffer?.enabled && (
                        <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                            <p className="text-center font-bold">
                                HURRY! LIMITED TO {limitedOffer.spots} SPOTS ONLY!
                                <br />
                                Your spot is reserved for {limitedOffer.timeRemaining}
                            </p>
                        </div>
                    )}

                    {/* Product Selection */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Select Quantity</h2>
                        <p className="text-sm text-gray-600 mb-4">How many hearing aids do you want?</p>

                        <div className="space-y-4">
                            {productOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-lg p-4 ${index === 1 ? 'bg-yellow-50 border-yellow-200' : ''
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <input
                                            type="radio"
                                            name="quantity"
                                            className="mt-2"
                                            defaultChecked={index === 1}
                                        />
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-medium">Buy {option.quantity} Pair</h3>
                                                <div className="text-right">
                                                    <div className="text-gray-500 line-through">${option.price + option.savings}</div>
                                                    <div className="text-2xl font-bold">${option.price}</div>
                                                    <div className="text-green-600 text-sm">You Save ${option.savings}</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {option.images.map((img, i) => (
                                                    <div key={i} className="w-24 h-24 relative">
                                                        <Image
                                                            src={img}
                                                            alt={`Product ${i + 1}`}
                                                            layout="fill"
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PayPal Button */}
                    <PayPalButton className="w-full mb-8" />

                    {/* Customer Information */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Customer Information</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full border rounded p-2"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full border rounded p-2"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </form>
                    </section>

                    {/* Shipping Information */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Country</label>
                                <select className="w-full border rounded p-2">
                                    <option value="US">United States</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Address</label>
                                <input
                                    type="text"
                                    className="w-full border rounded p-2 mb-2"
                                    placeholder="Street Address"
                                />
                                <input
                                    type="text"
                                    className="w-full border rounded p-2"
                                    placeholder="Apartment, suite, etc. (optional)"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">City</label>
                                <input
                                    type="text"
                                    className="w-full border rounded p-2"
                                    placeholder="City"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">State</label>
                                    <select className="w-full border rounded p-2">
                                        <option value="">Select State</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">ZIP Code</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        placeholder="ZIP Code"
                                    />
                                </div>
                            </div>
                        </form>
                    </section>

                    {/* Payment Information */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Card Number</label>
                                <input
                                    type="text"
                                    className="w-full border rounded p-2"
                                    placeholder="Card Number"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">Expiry Month</label>
                                    <select className="w-full border rounded p-2">
                                        <option value="">Month</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">Expiry Year</label>
                                    <select className="w-full border rounded p-2">
                                        <option value="">Year</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm mb-1">CVV</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded p-2"
                                        placeholder="CVV"
                                    />
                                </div>
                            </div>
                        </form>
                    </section>

                    {/* Complete Checkout Button */}
                    <button className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded">
                        Complete Checkout →
                    </button>

                    {/* Trust Badges */}
                    <div className="mt-8 text-center">
                        <Image
                            src="/trust-badges.png"
                            alt="Trust Badges"
                            width={300}
                            height={80}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-16 text-center text-sm text-gray-600">
                <div className="flex justify-center gap-4 mb-4">
                    <a href="/shipping" className="hover:underline">Shipping & Returns</a>
                    <a href="/contact" className="hover:underline">Contact Us</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/terms" className="hover:underline">Terms and Conditions</a>
                </div>
                <p>Copyright © 2024 Oricle. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default CheckoutPageTemplate2;
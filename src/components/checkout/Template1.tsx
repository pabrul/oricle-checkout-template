'use client';
// src/components/checkout/Template1.tsx
import React from 'react';

interface ProductOption {
    quantity: number;
    price: number;
    originalPrice: number;
    savings: number;
    discount: number;
}

interface CheckoutTemplate1Props {
    productOptions: ProductOption[];
    timerDuration: number;
    spotLimit: number;
}

const Template1: React.FC<CheckoutTemplate1Props> = ({
    productOptions,
}) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
            <h1 className="text-3xl font-bold mb-6">Template 1 (Clean Splash)</h1>
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl mb-4">Product Options:</h2>
                {productOptions.map((option, index) => (
                    <div key={index} className="mb-4 p-4 border rounded">
                        <p>Quantity: {option.quantity}</p>
                        <p>Price: ${option.price}</p>
                        <p>Original: ${option.originalPrice}</p>
                        <p>Save: ${option.savings}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Template1;
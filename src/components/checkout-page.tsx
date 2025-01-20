'use client';
// src/components/checkout-page.tsx
import React from 'react';
import Template1 from './checkout/Template1';
import Template2 from './checkout/Template2';

interface ProductOption {
    quantity: number;
    price: number;
    originalPrice: number;
    savings: number;
    discount: number;
}

interface CheckoutPageProps {
    info: {
        template: number;
        productOptions: ProductOption[];
        timerDuration: number;
        spotLimit: number;
    };
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ info }) => {
    return (
        <div>
            {info.template === 1 && (
                <Template1
                    productOptions={info.productOptions}
                    timerDuration={info.timerDuration}
                    spotLimit={info.spotLimit}
                />
            )}
            {info.template === 2 && (
                <Template2
                    productOptions={info.productOptions}
                    timerDuration={info.timerDuration}
                    spotLimit={info.spotLimit}
                />
            )}
            {info.template !== 1 && info.template !== 2 && (
                <div className="p-4 bg-red-100 text-red-700 rounded">
                    Invalid template number: {info.template}
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
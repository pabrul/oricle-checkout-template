'use client';

import React from 'react';
import Image from 'next/image';

export const PayPalButton: React.FC = () => {
    return (
        <div className="w-full">
            {/* Container with border and title */}
            <div className="relative border border-gray-200 rounded-lg p-6 mt-6">
                {/* Title that breaks the border */}
                <div className="absolute -top-3 left-0 w-full text-center">
                    <span className="bg-white px-4 text-xl font-semibold">
                        Express Checkout
                    </span>
                </div>

                {/* PayPal Button */}
                <button
                    className="w-full bg-[#ffd140] hover:bg-[#ffc439] transition-colors py-4 px-6 rounded-lg"
                    onClick={() => {
                        console.log('PayPal checkout clicked');
                    }}
                >
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/paypal-logo.png"
                            alt="PayPal"
                            width={140}
                            height={35}
                            className="object-contain"
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};
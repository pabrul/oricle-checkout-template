'use client';

import React from 'react';
import Image from 'next/image';
import { PayPalButton } from '@/components/PayPalButton';
import { Timer } from '@/components/Timer';
import { User, Clock3, MapPin, CreditCard } from 'lucide-react';

interface ProductOption {
    quantity: number;
    price: number;
    originalPrice: number;
    savings: number;
    discount: number;
}

interface CheckoutTemplate2Props {
    productOptions: ProductOption[];
    timerDuration: number;
    spotLimit: number;
}

const CheckoutTemplate2: React.FC<CheckoutTemplate2Props> = ({
    productOptions,
    timerDuration,
    spotLimit,
}) => {
    const [selectedOption, setSelectedOption] = React.useState<number>(1);
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/images/trust-badges/secure-checkout.png"
                            alt="Secure Checkout"
                            width={100}
                            height={30}
                        />
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Timer Banner */}
                <div className="bg-[#fff9e6] p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between px-4">
                        <div className="flex items-center space-x-4">
                            {/* 50% OFF Badge */}
                            <div className="relative">
                                <div className="bg-red-600 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center transform">
                                    <span className="text-2xl font-bold">50%</span>
                                    <span className="text-sm">OFF</span>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <span className="text-red-600 font-bold text-xl mr-2">HURRY!</span>
                                    <span className="text-xl font-bold">LIMITED TO {spotLimit} SPOTS ONLY!</span>
                                </div>
                                <div className="flex items-center mt-1">
                                    <span className="text-lg mr-2">Your spot is reserved for </span>
                                    <Clock3 className="text-red-600 font-bold text-xl mr-2" />

                                    <Timer duration={timerDuration} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* High Demand Notice */}
                <div className="bg-[#fee2e2] p-4 rounded-lg mb-6">
                    <div className="flex items-center justify-center space-x-2">
                        <p className="text-red-600 text-lg font-bold">
                            🔥 High Demand: <span className="text-black font-bold">84 people are looking this offer!</span>
                        </p>
                    </div>
                </div>

                {/* Select Quantity Header */}
                <div className="mb-6">
                    <div className="flex items-start mb-2">
                        <div className="w-10 h-10 mr-3">
                            <svg viewBox="0 0 24 24" className="w-full h-full">
                                <path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15Z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Select Quantity</h2>
                            <p className="text-gray-600">How many hearing aids do you want?</p>
                        </div>
                    </div>
                </div>

                {/* Product Selection */}
                <div className="mb-8">
                    <div className="space-y-4">
                        {productOptions.map((option, index) => (
                            <div
                                key={index}
                                className={`border-2 p-4 rounded-lg relative ${selectedOption === index
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                {index === 1 && (
                                    <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
                                        ★ BESTSELLER
                                    </div>
                                )}
                                {option.discount > 0 && (
                                    <div className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 text-xs rounded-full">
                                        {option.discount}% OFF
                                    </div>
                                )}
                                <label className="flex items-start justify-between cursor-pointer">
                                    <div className="flex items-start space-x-4">
                                        <input
                                            type="radio"
                                            name="quantity"
                                            checked={selectedOption === index}
                                            onChange={() => setSelectedOption(index)}
                                            className="mt-1 h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <div>
                                            <span className="font-medium text-lg">Buy {option.quantity} Pair</span>
                                            <div className="mt-2">
                                                <Image
                                                    src="/images/product.png"
                                                    alt={`${option.quantity} Pair`}
                                                    width={option.quantity * 60}
                                                    height={60}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="line-through text-gray-400">${option.originalPrice}</div>
                                        <div className="text-2xl font-bold">${option.price}</div>
                                        <div className="text-green-500 text-sm">You Save ${option.savings}</div>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PayPal Express Checkout */}
                <div className="mb-8">
                    <PayPalButton />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Customer Information */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center space-x-2 mb-6">
                            <User className="w-5 h-5 text-gray-600" />
                            <h2 className="text-xl font-bold">Customer Information</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="input-base"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="input-base"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input-base mt-4"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="input-base mt-4"
                        />
                    </div>

                    {/* Shipping Information */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center space-x-2 mb-6">
                            <MapPin className="w-5 h-5 text-gray-600" />
                            <h2 className="text-xl font-bold">Shipping Information</h2>
                        </div>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                            className="input-base mb-4"
                        >
                            <option value="United States">United States</option>
                        </select>
                        <input
                            type="text"
                            name="address1"
                            placeholder="Address"
                            value={formData.address1}
                            onChange={handleInputChange}
                            className="input-base mb-4"
                        />
                        <input
                            type="text"
                            name="address2"
                            placeholder="Apartment, unit, etc. (optional)"
                            value={formData.address2}
                            onChange={handleInputChange}
                            className="input-base mb-4"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="input-base"
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleInputChange}
                                className="input-base"
                            />
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="ZIP Code"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                className="input-base"
                            />
                        </div>
                    </div>

                    {/* Payment Information */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center space-x-2 mb-6">
                            <CreditCard className="w-5 h-5 text-gray-600" />
                            <h2 className="text-xl font-bold">Payment Information</h2>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                className="input-base"
                            />
                            <div className="grid grid-cols-3 gap-4">
                                <select
                                    name="expiryMonth"
                                    value={formData.expiryMonth}
                                    onChange={(e) => setFormData(prev => ({ ...prev, expiryMonth: e.target.value }))}
                                    className="input-base"
                                >
                                    <option value="">Month</option>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                            {String(i + 1).padStart(2, '0')}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="expiryYear"
                                    value={formData.expiryYear}
                                    onChange={(e) => setFormData(prev => ({ ...prev, expiryYear: e.target.value }))}
                                    className="input-base"
                                >
                                    <option value="">Year</option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i} value={String(new Date().getFullYear() + i)}>
                                            {new Date().getFullYear() + i}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    className="input-base"
                                    maxLength={4}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
                    >
                        Complete Checkout →
                    </button>

                    {/* Trust Badges */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center items-center space-x-4">
                            <Image
                                src="/images/trust-badges/guaranteed-safe.png"
                                alt="Guaranteed Safe Checkout"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <footer className="mt-8 pt-8 border-t border-gray-200">
                    <div className="text-center text-sm text-gray-500 space-y-4">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={100}
                            height={30}
                            className="mx-auto mb-4"
                        />
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="hover:text-gray-700">Shopping & Returns</a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-700">Contact Us</a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-700">Terms and Conditions</a>
                        </div>
                        <div>Copyright © 2024 Oricle. All Rights Reserved.</div>
                        <div className="flex justify-center space-x-2">
                            <Image src="/images/payment-methods.png" alt="Payment Methods" width={200} height={30} />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default CheckoutTemplate2;
// src/components/Timer.tsx
'use client';

import React, { useState, useEffect } from 'react';

interface TimerProps {
    duration: number;
}

export const Timer: React.FC<TimerProps> = ({ duration }) => {
    // Inicialmente, não renderizamos nada
    const [mounted, setMounted] = useState(false);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(duration);
    }, [duration]);

    useEffect(() => {
        if (!mounted || timeLeft === null || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev !== null ? prev - 1 : null));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, mounted]);

    // Não renderiza nada até o componente estar montado
    if (!mounted || timeLeft === null) {
        return (
            <div className="text-red-600 font-bold">
                {String(Math.floor(duration / 60)).padStart(2, '0')}:
                {String(duration % 60).padStart(2, '0')}
            </div>
        );
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="text-red-600 font-bold">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
    );
};
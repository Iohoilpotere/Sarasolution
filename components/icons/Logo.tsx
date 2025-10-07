
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg 
        className={className}
        width="48" 
        height="48" 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Sarasolutions Logo"
    >
        <path d="M60 110C87.6142 110 110 87.6142 110 60C110 32.3858 87.6142 10 60 10C32.3858 10 10 32.3858 10 60C10 87.6142 32.3858 110 60 110Z" stroke="url(#paint0_linear_logo)" strokeWidth="12"/>
        <path d="M85 45C85 36.7157 78.2843 30 70 30H50C41.7157 30 35 36.7157 35 45V45C35 53.2843 41.7157 60 50 60H70C78.2843 60 85 66.7157 85 75V75C85 83.2843 78.2843 90 70 90H50C41.7157 90 35 83.2843 35 75" stroke="white" strokeWidth="12" strokeLinecap="round"/>
        <defs>
            <linearGradient id="paint0_linear_logo" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A3E635"/>
                <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
        </defs>
    </svg>
);

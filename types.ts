import React from 'react';

// The Page enum is no longer needed for a single-page layout.
// Other types like Product, EstimatorFormData, GeminiSuggestion are removed
// as their corresponding components are removed.

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Fix: Re-adding types used by other components to resolve import errors.
export enum Page {
    Home,
    Estimator,
    Ecommerce,
    ClientArea,
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface EstimatorFormData {
    serviceType: string[];
    projectDetails: string;
    name: string;
    email: string;
    phone: string;
}

export interface GeminiSuggestion {
    suggestedServices: string[];
    reasoning: string;
}

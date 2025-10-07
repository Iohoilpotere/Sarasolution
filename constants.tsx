import React from 'react';
// Fix: Import Product type which is used by MOCK_PRODUCTS.
import { Service, Product } from './types';
import { BoltIcon, SunIcon, WrenchScrewdriverIcon, BuildingOffice2Icon, HomeModernIcon, RoadIcon } from './components/icons/FeatureIcons';
import { HomeIcon, ServicesIcon, ContactIcon } from './components/icons/NavIcons';

// Simplified navigation for a single-page layout.
export const NAV_LINKS = [
  { name: 'Home', href: '#home', icon: <HomeIcon /> },
  { name: 'Servizi', href: '#services', icon: <ServicesIcon /> },
  { name: 'Contatti', href: '#contact', icon: <ContactIcon /> },
];

export const SERVICES: Service[] = [
  {
    icon: <BoltIcon />,
    title: 'Impiantistica',
    description: 'Soluzioni complete per impianti elettrici, fotovoltaici, idraulici e di climatizzazione. Efficienza e innovazione al vostro servizio.',
  },
  {
    icon: <HomeModernIcon />,
    title: 'Edilizia e Ristrutturazioni',
    description: 'Interventi di costruzione e ristrutturazione per interni, esterni, tetti e facciate. Qualità e cura dei dettagli in ogni progetto.',
  },
   {
    icon: <SunIcon />,
    title: 'Energie Rinnovabili',
    description: 'Installazione di impianti fotovoltaici e solari termici per un futuro sostenibile e un risparmio energetico garantito.',
  },
  {
    icon: <WrenchScrewdriverIcon />,
    title: 'Manutenzione',
    description: 'Servizi di manutenzione programmata e di emergenza per garantire la massima efficienza e durata dei vostri impianti.',
  },
  {
    icon: <BuildingOffice2Icon />,
    title: 'Immobiliare',
    description: 'Investimenti immobiliari e gestione di proprietà. Troviamo la soluzione giusta per le vostre esigenze abitative o commerciali.',
  },
  {
    icon: <RoadIcon />,
    title: 'Lavori Stradali',
    description: 'Realizzazione e manutenzione di infrastrutture stradali, garantendo sicurezza e durabilità nel tempo.',
  },
];

// Fix: Restoring constants used by Estimator and Ecommerce components.
export const ESTIMATOR_SERVICES = [
  'Impianto Elettrico',
  'Impianto Fotovoltaico',
  'Impianto Idraulico',
  'Climatizzazione',
  'Ristrutturazione Interni',
  'Ristrutturazione Esterni',
  'Tetti e Coperture',
  'Facciate',
  'Manutenzione Caldaia',
  'Pronto Intervento',
];

export const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: 'Pannello Solare 450W', description: 'Pannello fotovoltaico monocristallino ad alta efficienza.', price: 199.99, imageUrl: 'https://images.pexels.com/photos/159397/solar-panel-array-power-supply-energy-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Caldaia a Condensazione 24kW', description: 'Caldaia murale a condensazione per riscaldamento e acqua calda sanitaria.', price: 890.00, imageUrl: 'https://images.pexels.com/photos/8954546/pexels-photo-8954546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Climatizzatore 12000 BTU', description: 'Climatizzatore inverter con pompa di calore, classe A+++.', price: 450.50, imageUrl: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Kit Termostato Smart', description: 'Controlla la temperatura di casa tua da remoto con il nostro kit smart.', price: 129.90, imageUrl: 'https://images.pexels.com/photos/1776580/pexels-photo-1776580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

import { Train, TrainClass, PaymentMethod } from './types';
import { CreditCardIcon, BankIcon, UpiIcon, WalletIcon } from './components/icons/PaymentIcons';
import React from 'react';

export const APP_ROUTES = {
  HOME: '/',
  SEARCH_RESULTS: '/search-results',
  PASSENGER_DETAILS: '/passenger-details',
  PAYMENT: '/payment',
  CONFIRMATION: '/confirmation',
  LOGIN: '/login',
};

export const MOCK_STATIONS: string[] = [
  'Madrid Atocha',
  'Barcelona Sants',
  'Sevilla Santa Justa',
  'Valencia Joaquín Sorolla',
  'Málaga María Zambrano',
  'Zaragoza Delicias',
  'Bilbao Abando',
  'Alicante Terminal'
];

export const MOCK_TRAINS: Train[] = [
  {
    id: 'T101',
    name: 'El Rápido del Sur',
    number: 'AVE 101',
    departureTime: '08:00',
    arrivalTime: '10:30',
    duration: '2h 30m',
    availableClasses: [TrainClass.AC2, TrainClass.AC1, TrainClass.CC],
    price: 75,
    origin: 'Madrid Atocha',
    destination: 'Sevilla Santa Justa',
  },
  {
    id: 'T102',
    name: 'Costa Express',
    number: 'ALV 205',
    departureTime: '09:15',
    arrivalTime: '12:45',
    duration: '3h 30m',
    availableClasses: [TrainClass.SL, TrainClass.AC3, TrainClass.EC],
    price: 55,
    origin: 'Madrid Atocha',
    destination: 'Valencia Joaquín Sorolla',
  },
  {
    id: 'T203',
    name: 'Norte Veloz',
    number: 'AVE 310',
    departureTime: '14:00',
    arrivalTime: '17:00',
    duration: '3h 00m',
    availableClasses: [TrainClass.AC3, TrainClass.AC2, TrainClass.AC1],
    price: 90,
    origin: 'Barcelona Sants',
    destination: 'Madrid Atocha',
  },
  {
    id: 'T404',
    name: 'El Mediterráneo',
    number: 'EUROMED 050',
    departureTime: '11:30',
    arrivalTime: '14:15',
    duration: '2h 45m',
    availableClasses: [TrainClass.CC, TrainClass.EC],
    price: 65,
    origin: 'Valencia Joaquín Sorolla',
    destination: 'Barcelona Sants',
  },
   {
    id: 'T505',
    name: 'Andaluz Express',
    number: 'AVE 552',
    departureTime: '16:45',
    arrivalTime: '19:20',
    duration: '2h 35m',
    availableClasses: [TrainClass.AC1, TrainClass.EC],
    price: 80,
    origin: 'Sevilla Santa Justa',
    destination: 'Málaga María Zambrano',
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'credit_card', name: 'Tarjeta de Crédito/Débito', icon: React.createElement(CreditCardIcon) },
  { id: 'net_banking', name: 'Banca Neta', icon: React.createElement(BankIcon) },
  { id: 'upi', name: 'UPI', icon: React.createElement(UpiIcon) },
  { id: 'irctc_wallet', name: 'E-wallet (Simulado)', icon: React.createElement(WalletIcon) },
];

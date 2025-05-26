
export enum TrainClass {
  SL = 'Sleeper (SL)',
  AC3 = 'AC 3 Tier (3A)',
  AC2 = 'AC 2 Tier (2A)',
  AC1 = 'AC First Class (1A)',
  CC = 'AC Chair car (CC)',
  EC = 'Exec. Chair Car (EC)'
}

export interface SearchCriteria {
  from: string;
  to: string;
  date: string;
  trainClass: TrainClass;
}

export interface Train {
  id: string;
  name: string;
  number: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  availableClasses: TrainClass[];
  price: number; // Base price, can vary by class
  origin: string;
  destination: string;
}

export interface Passenger {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
}

export interface BookingDetails {
  pnr: string;
  train: Train;
  passengers: Passenger[];
  totalAmount: number;
  bookingDate: string;
  journeyDate: string;
  selectedClass: TrainClass;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon?: React.ReactElement; // Asegurado como React.ReactElement
}
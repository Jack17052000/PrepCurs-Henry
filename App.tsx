
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import PassengerDetailsPage from './pages/PassengerDetailsPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';
import LoginPage from './pages/LoginPage';
import { APP_ROUTES } from './constants';

const App: React.FC = () => {
  return (
    <BookingProvider>
      <Routes>
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path={APP_ROUTES.HOME} element={<HomePage />} />
          <Route path={APP_ROUTES.SEARCH_RESULTS} element={<SearchResultsPage />} />
          <Route path={APP_ROUTES.PASSENGER_DETAILS} element={<PassengerDetailsPage />} />
          <Route path={APP_ROUTES.PAYMENT} element={<PaymentPage />} />
          <Route path={APP_ROUTES.CONFIRMATION} element={<ConfirmationPage />} />
          <Route path="*" element={<Navigate to={APP_ROUTES.HOME} replace />} />
        </Route>
      </Routes>
    </BookingProvider>
  );
};

export default App;

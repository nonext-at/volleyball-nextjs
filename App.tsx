import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TournamentsPage from './pages/TournamentsPage';
import ClinicsPage from './pages/ClinicsPage';
import AboutPage from './pages/AboutPage';
import MembershipPage from './pages/MembershipPage';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onNavigate={setCurrentPage} />;
      case Page.ABOUT:
        return <AboutPage onNavigate={setCurrentPage} />;
      case Page.TOURNAMENTS:
        return <TournamentsPage />;
      case Page.CLINICS:
        return <ClinicsPage />;
      case Page.MEMBERSHIP:
        return <MembershipPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-background-light">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;

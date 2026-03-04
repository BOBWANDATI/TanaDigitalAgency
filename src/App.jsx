import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WebDesign from './components/WebDesign';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [scrollToSection, setScrollToSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
    
    const hash = window.location.hash.substring(1);
    if (hash === 'web-design') {
      setCurrentView('web-design');
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view, section = null) => {
    setCurrentView(view);
    if (section) {
      setScrollToSection(section);
      window.location.hash = section;
    } else if (view === 'web-design') {
      window.location.hash = 'web-design';
    } else {
      window.location.hash = '';
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (scrollToSection && currentView === 'home') {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setScrollToSection(null);
      }, 100);
    }
  }, [currentView, scrollToSection]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      <main className="main-content">
        {currentView === 'home' ? (
          <>
            <Hero scrollY={scrollY} />
            <Services />
            <About />
            <Portfolio />
            <Courses />
            <Testimonials />
            <Contact />
          </>
        ) : (
          <WebDesign />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
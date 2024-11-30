import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { MainCoursesPage } from './pages/menu/MainCoursesPage';
import { SidesPage } from './pages/menu/SidesPage';
import { BeveragesPage } from './pages/menu/BeveragesPage';
import { JamaicanPattiesPage } from './pages/menu/JamaicanPattiesPage';
import { MeatMealsPage } from './pages/menu/MeatMealsPage';
import { ChickenMealsPage } from './pages/menu/ChickenMealsPage';
import { FishMealsPage } from './pages/menu/FishMealsPage';
import { SoupPage } from './pages/menu/SoupPage';
import { HardFoodPage } from './pages/menu/HardFoodPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Contact } from './components/Contact';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AppBanner } from './components/AppBanner';
import { ScrollToTop } from './components/ScrollToTop';

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <AnnouncementBar />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          <section className="pt-24">
            <Hero />
          </section>
          <section>
            <Problem />
          </section>
          <section>
            <Contact />
          </section>
        </main>
        <Footer />
        <AppBanner />
        <ScrollToTop />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/main-courses" element={<MainCoursesPage />} />
        <Route path="/menu/sides" element={<SidesPage />} />
        <Route path="/menu/beverages" element={<BeveragesPage />} />
        <Route path="/menu/jamaican-patties" element={<JamaicanPattiesPage />} />
        <Route path="/menu/meat-meals" element={<MeatMealsPage />} />
        <Route path="/menu/chicken-meals" element={<ChickenMealsPage />} />
        <Route path="/menu/fish-meals" element={<FishMealsPage />} />
        <Route path="/menu/soup" element={<SoupPage />} />
        <Route path="/menu/hard-food" element={<HardFoodPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
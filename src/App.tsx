import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { HistorySection } from './components/HistorySection';
import { WorkingMechanismSection } from './components/WorkingMechanismSection';
import { InstrumentationSection } from './components/InstrumentationSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { DisadvantagesSection } from './components/DisadvantagesSection';
import { AboutSection } from './components/AboutSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll to top whenever the active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="pt-20">
        {activeTab === 'home' && <HeroSection onNavigate={setActiveTab} />}
        {activeTab === 'introduction' && <IntroductionSection />}
        {activeTab === 'history' && <HistorySection />}
        {activeTab === 'working-mechanism' && <WorkingMechanismSection />}
        {activeTab === 'instrumentation' && <InstrumentationSection />}
        {activeTab === 'advantages' && <AdvantagesSection />}
        {activeTab === 'disadvantages' && <DisadvantagesSection />}
        {activeTab === 'about' && <AboutSection />}
      </main>
      
      <Footer />
    </div>
  );
}

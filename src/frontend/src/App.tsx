import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { TutoringSection } from './components/sections/TutoringSection';
import { FacultySection } from './components/sections/FacultySection';
import { NotesSection } from './components/sections/NotesSection';
import { LiveSessionsSection } from './components/sections/LiveSessionsSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TutoringSection />
        <FacultySection />
        <NotesSection />
        <LiveSessionsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;

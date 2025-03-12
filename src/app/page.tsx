import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopGrayNav from '@/components/TopGrayNav';
import MainNav from '@/components/MainNav';
import HeroSection from '@/components/HeroSection';
import WorkspaceSection from '@/components/WorkspaceSection';

const Home = () => (
  <main>
    <TopGrayNav />
    <MainNav />
    <HeroSection />
    <WorkspaceSection />
  </main>
);
export default Home;

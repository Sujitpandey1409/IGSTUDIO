import './App.css';
import Navabar from './Components.js/Navabar/Navbar';
import Hero from './Components.js/Hero/Hero';
import Home from './pages/Home/Home';
import Introduction from './pages/Introduction/Introduction';
import Testimonials from './pages/Testimonials/Testimonials';
import PracticesArea from './pages/PracticesArea/PracticesArea';

function App() {
  return (
    <div className="App">
      <Navabar />
      <Home />
      <Introduction />
      <Testimonials />
      <PracticesArea />
    </div>
  );
}

export default App;

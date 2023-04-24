import './App.css';
import { Outlet } from 'react-router-dom';
import Navtop from './components/Navtop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navtop />
        <Outlet></Outlet>
        <Footer />
    </div>
  );
}

export default App;

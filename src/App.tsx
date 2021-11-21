import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import Trade from './components/trade';
import Teams from './components/teams';
import About from './components/about';
import NavBot from './components/navbot';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trade' element={<Trade />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <NavBot />
      </div>
    </BrowserRouter>
  );
}

export default App;

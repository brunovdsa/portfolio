import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from '../pages/about';
import Home from '../pages/home';
import Projects from '../pages/projects';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

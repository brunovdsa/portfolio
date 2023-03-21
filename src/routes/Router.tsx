import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from '../pages/about';
import Home from '../pages/home';
import Projects from '../pages/projects';
import WorkExperience from '../pages/workExperience';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/experience' element={<WorkExperience />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

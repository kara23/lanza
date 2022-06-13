import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Login from './Components/Login';
import LandingPage from './Components/LandingPage';

function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/Landing_page' element={<LandingPage/>} />
          </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Login from './Components/Login';
import Users from './Components/Users';
import Resources from './Components/Resources';
import Registration from './Components/Registration';

function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/users' element={<Users/>} />
              <Route path='/resources' element={<Resources/>} />
              <Route path='/registration' element={<Registration/>} />
          </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;


import './App.css';
import Create from './Components/Create/Create';
import Read from './Components/Read/Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './Components/Update/Update';
import Delete from './Components/Delete/Delete';

function App() {
  return (

    <div className='main'>
      <div>
        <h2>React CRUD Operations</h2>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/Create' element={<Create />} />
          <Route path='/' element={<Read />} />
          <Route path='/Update' element={<Update />} />
          <Route path='/Delete' element={<Delete />} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;

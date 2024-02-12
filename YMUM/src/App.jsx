import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AdminInterface from './Components/AdminInterface';
import CustomerInterface from './Components/CustomerInterface';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CustomerInterface/>}></Route>
            <Route path='/AdminInterface' element={<AdminInterface/>}></Route>
          </Routes>
        </BrowserRouter>
        
    </>
  )
}
export default App

import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <main className='min-vh-100'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App

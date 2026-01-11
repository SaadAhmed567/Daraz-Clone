import React, { useState } from 'react' ;
import { Routes, Route } from 'react-router-dom' ;
import Navbar from './components/Navbar' ;
import Home from './pages/Home' ;
import ProductDetail from './pages/ProductDetail' ;

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onSearch={setSearchTerm} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<div className="text-center py-20">Page Not Found</div>} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Daraz All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

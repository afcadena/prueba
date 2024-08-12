import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeU from './Componentes/Paginas/homeU';
import AccountPage from './Componentes/Paginas/cuenta'; 
import HomeAdmin from './Componentes/Paginas/homeA';
import Inventario from './Componentes/Paginas/inventario'; 
import AdminPage from './Componentes/Paginas/proveedores'; 
import SalesPage from './Componentes/Paginas/ventas'; 
import './index.css';
import LoginRegister from './Componentes/Paginas/Login_register_ajax';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/homeu" element={<HomeU />} />
        <Route path="/accountpage" element={<AccountPage />} />
        <Route path="/HomeA" element={<HomeAdmin />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/SalesPage" element={<SalesPage />} />
        <Route path="/Login" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const HubPage = () => {
  return (
    <div>
      <h1>ХАБ ЦДО</h1>
      <ul>
        <li><Link to="/categories">Управление категориями</Link></li>
        <li><Link to="/warehouses">Управление складами</Link></li>
        <li><Link to="/suppliers">Управление поставщиками</Link></li>
        <li><Link to="/storage-location">Управление метсами хранения</Link></li>
        <li><Link to="/products">Управление товарами</Link></li>
        <li><Link to="/checks">Управление проверками</Link></li>
      </ul>
    </div>
  );
};

export default HubPage;

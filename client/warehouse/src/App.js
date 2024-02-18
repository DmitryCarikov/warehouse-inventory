import React from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { CssBaseline, Box } from '@mui/material';
import './App.css';

import LoginPage from './components/login';
import RegistrationPage from './components/register';
import CategoriesPage from './components/CategoriesPage';
import WarehousePage from './components/WareHousePage';
import SupplierPage from './components/SupplierPage';
import StorageLocation from './components/StorageLocation';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(fetchAuthMe());
    }
  }, [dispatch]);

  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Box component="main" flexGrow={1} sx={{ width: '100%' }}>
          <Routes>
            <Route path='/categories' element={<CategoriesPage></CategoriesPage>} />
            <Route path='/warehouses' element={<WarehousePage></WarehousePage>} />
            <Route path='/suppliers' element={<SupplierPage></SupplierPage>} />
            <Route path='/storage-location' element={<StorageLocation></StorageLocation>} />
            {/* {!isAuth && <Route path='/registration' element={<RegistrationPage/>} />} */}
            {!isAuth && <Route path='/login' element={<LoginPage />} />}
            {/* {isAuth && <Route path="*" element={<Navigate to="/" />} />} */}
            {!isAuth && <Route path="*" element={<Navigate to="/login" />} />}
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;

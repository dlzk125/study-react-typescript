import DefaultLayout from '../layout/Default';
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import React from 'react';

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;

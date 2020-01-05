import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import NavBar from '../../featuers/NavBar/NavBar';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <PageContainer />
  </div>
);

export default MainLayout;
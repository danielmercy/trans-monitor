import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './styles/shared.scss';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;

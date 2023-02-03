import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  {BrowserRouter,Routes,Route} from "react-router-dom";  

import Accueil from './Accueil';
import Login from './Login';
import Historique from './Historique';
import Apres from './Apres';
import Rencherir from './Rencherir';
import Rechercher  from './Rechercher';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path={''} element={<Accueil/>} ></Route>
        <Route path={'Login'} element={<Login/>} ></Route>
        <Route path={'Historique'} element={<Historique/>} ></Route>
        <Route path={'Rencherir'} element={<Rencherir/>} ></Route>
        <Route path={'Apres'} element={<Apres/>} ></Route>
        <Route path={'Rechercher'} element={<Rechercher/>} ></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

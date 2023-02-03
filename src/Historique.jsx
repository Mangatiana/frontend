import React, { Component ,useState, useEffect} from 'react';
import './assets/css/maps/vertical-layout-light/style.css.map';
import './assets/css/vertical-layout-light/style.css';
import './assets/vendors/feather/feather.css';
import './assets/vendors/ti-icons/css/themify-icons.css';
import './assets/vendors/css/vendor.bundle.base.css';
import './assets/images/favicon.png';
import './assets/vendors/select2/select2.min.css';
import './assets/vendors/select2-bootstrap-theme/select2-bootstrap.min.css';
import {url} from './url.js'; 

function Historique ()  {
  const[enche,setenchere]=useState([])
  console.log(url+'enchereavecmaxgagnant?idutilisateur='+sessionStorage.getItem('id'))
  useEffect(()=>{
      fetch(url+'enchereavecmaxgagnant?idutilisateur='+sessionStorage.getItem('id'))
          .then((response)=>response.json())
          .then((data)=>setenchere(data))
  },[] ); 
        return (
          <body>
            
        
          <div class="container-scroller">
          
          <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo mr-5">Enchere</a>
              
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span class="icon-menu"></span>
              </button>
      
              
           
            </div>
          </nav>
       
          <div class="container-fluid page-body-wrapper">
      
  
   
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="icon-grid menu-icon"></i>
                   <center><span class="menu-title">Accueil</span></center> 
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/Historique">
                    <i class="icon-grid menu-icon"></i>
                 <center>   <span class="menu-title">Historique de ses enchères</span></center>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/Rencherir">
                    <i class="icon-grid menu-icon"></i>
                    <center><span class="menu-title">Renchérir</span></center>
                  </a>
                </li>
               
              </ul>
            </nav>


        
            <div className="main-panel">
      
      <center><h3>Historique des enchères</h3></center>
            <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Produit</th>
                          <th>Prix initial</th>
                          <th>Enchere Max</th>
                          <th>Gagnant</th>
                          <th>Statut</th>
                      
                        </tr>
                      </thead>
                      <tbody>
                      {Array.isArray(enche)? enche.map((liste)=>(
                        <tr>
                          <td>{liste.enchere.nom}</td>
                          <td>{liste.enchere.mise_minimale} Ar</td>
                          <td>{liste.max} Ar</td>
                          <td> {liste.nom_gagnant} <b>{liste.prenom}</b></td>
                           <td>{liste.enchere.statut}</td>
                 
                        </tr>
                        )):"Personne n'a encore fait des enchères"}

                      </tbody>
                    </table>
                  </div>
         </div>  



 </div>


            </div>

            </body>

          
        );
 
}
 
export default Historique;
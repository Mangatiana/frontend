import React, { Component, useState, useEffect } from 'react';
import './assets/css/maps/vertical-layout-light/style.css.map';
import './assets/css/vertical-layout-light/style.css';
import './assets/vendors/feather/feather.css';
import './assets/vendors/ti-icons/css/themify-icons.css';
import './assets/vendors/css/vendor.bundle.base.css';
import './assets/images/favicon.png';
import './assets/vendors/select2/select2.min.css';
import './assets/vendors/select2-bootstrap-theme/select2-bootstrap.min.css';
import {url} from './url.js';

function Rechercher()  {


  const url1='/Login?idE=';
  const[enche,setenchere]=useState([])
  useEffect(()=>{
      fetch(url+'infoencours')
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
                  <a class="nav-link" href="">
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

                <li class="nav-item">
                  <a class="nav-link" href="/Rechercher">
                    <i class="icon-grid menu-icon"></i>
                    <center><span class="menu-title">Recherche avancée</span></center>
                  </a>
                </li>
               
              </ul>
            </nav>


        
            <div className="main-panel">
         
         <div className="content-wrapper">
          
           <center><h3>Liste des enchères</h3></center>
         <div className="row">
         {Array.isArray(enche)? enche.map((liste)=>(
         <div className="col-md-3 grid-margin stretch-card">
        
                                 
                                   
           <div className="card">
             <div className="card-body">
               <h4 className="card-title">
                
                
               {liste.nom}
                </h4>
            
               <div class="img-wrapper w-40 h-40 flex justify-center items-center">
               {liste.photo}
                <img className="" src="./Frontlisteencours/assets/img/avatars/avatar1.jpeg"/>

            </div>
               <p><b>Description: </b> {liste.description}</p>
                  <p><b> Prix minimal :</b> {liste.mise_minimale} Ar</p>
                  <a  href={url1+liste.idmettre_enchere}><button type="button" class="btn btn-outline-primary btn-fw btn-{size}"> Enchérir</button></a>
      
         
             </div>
           </div>
           
         </div>
 )):"pas d'enchère en cours"}

         
         
         </div>
         </div>
                
         </div>  



 </div>


            </div>

            </body>

          
        );
    
}
 
export default Rechercher;
import React, { Component,useState,useEffect } from 'react';
import './assets/css/maps/vertical-layout-light/style.css.map';
import './assets/css/vertical-layout-light/style.css';
import './assets/vendors/feather/feather.css';
import './assets/vendors/ti-icons/css/themify-icons.css';
import './assets/vendors/css/vendor.bundle.base.css';
import './assets/images/favicon.png';
import './assets/vendors/select2/select2.min.css';
import './assets/vendors/select2-bootstrap-theme/select2-bootstrap.min.css';
import {url} from './url.js'; 

function Rencherir () {
  const url1='/Apres?idE=';
  const[enche,setenchere]=useState([])
  useEffect(()=>{
      fetch(url+'encoreencherir?idutilisateur='+sessionStorage.getItem('id'))
          .then((response)=>response.json())
          .then((data)=>setenchere(data))
  },[] ); 
        return (
          <body>
            
        
          <div className="container-scroller">
          
          <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo mr-5">Enchere</a>
              
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span className="icon-menu"></span>
              </button>
      
              
           
            </div>
          </nav>
       
          <div className="container-fluid page-body-wrapper">
      
  
   
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="icon-grid menu-icon"></i>
                   <center><span className="menu-title">Accueil</span></center> 
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/Historique">
                    <i className="icon-grid menu-icon"></i>
                 <center>   <span className="menu-title">Historique de ses enchères</span></center>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/Rencherir">
                    <i className="icon-grid menu-icon"></i>
                    <center><span className="menu-title">Renchérir</span></center>
                  </a>
                </li>
               
              </ul>
            </nav>


        
            <div className="main-panel">
         
         <div className="content-wrapper">
          
       
         <center><h3>Liste des enchères en cours que vous avez déja enchéri. Votre solde est de : <b>{sessionStorage.getItem('sold')}</b></h3></center>
         <div className="row">
         {Array.isArray(enche)? enche.map((liste)=>(
         <div className="col-md-3 grid-margin stretch-card">
        
                                 
                                   
           <div className="card">
             <div className="card-body">
               <h4 className="card-title">
                
                
               {liste.enchere.nom}
                </h4>
            
               <div class="img-wrapper w-40 h-40 flex justify-center items-center">
            

            </div>
               <p><b>Description: </b> {liste.enchere.description}</p>
                  <p><b> Prix maximal en cours :</b> {liste.max} Ar</p>
                  <a  href={url1+liste.enchere.idmettre_enchere}><button type="button" class="btn btn-outline-primary btn-fw btn-{size}"> Enchérir</button></a>
      
         
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
 
export default Rencherir;
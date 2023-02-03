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
function valider(event) {
  event.preventDefault();
  let form = new FormData(document.getElementById("form"))
  let dataa=Object.fromEntries(form.entries());
  let xhr = new XMLHttpRequest();
  var j={
    "utilisateur": {
            "idutilisateur": dataa.iduser,
            "solde": sessionStorage.getItem('sold')
    },
    "mettre_enchere": {
            "idmettre_enchere":dataa.idE

    },
    "montant":dataa.mise}  
  xhr.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200){
          let response = this.responseText;
         
              window.location.href="/Rencherir"
              console.log("mety");
             
      }
  };
  xhr.open("get", url+'encherir?idu='+dataa.iduser+'&solde='+sessionStorage.getItem('sold')+'&ide='+dataa.idE+'&montant='+dataa.mise, true);
  xhr.setRequestHeader("Accept","application/json");
  xhr.setRequestHeader("Content-Type","application/json");
  xhr.send();
  
}
function Apres() {
  const queryparams=new URLSearchParams(window.location.search);
  var idE=queryparams.get('idE');
  console.log(idE)
  const[enche,setEnchere]=useState([])
  console.log(url+'enchereavecmax1?idu='+idE)
  useEffect(()=>{
      fetch(url+'enchereavecmax1?idu='+idE)
          .then((response)=>response.json())
          .then((data)=>setEnchere(data))
          
  },[] ); 
        return (
  
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
                     <center>Accueil</center> 
                    </a>
                  </li>
  
                  <li class="nav-item">
                    <a class="nav-link" href="/Historique">
                      <i class="icon-grid menu-icon"></i>
                   <center>   Historique de ses enchères</center>
                    </a>
                  </li>
  
                  <li class="nav-item">
                    <a class="nav-link" href="/Rencherir">
                      <i class="icon-grid menu-icon"></i>
                      <center>Renchérir</center>
                    </a>
                  </li>

                  
                 
                </ul>
              </nav>
  
  
  
          
              <div className="main-panel">
           
              <div className="content-wrapper">
           
          <div className="row">
          {Array.isArray(enche)? enche.map((liste)=>(
          <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
             <div className="card-body">
               <h4 className="card-title">{liste.enchere.nom}</h4>
               <div class="img-wrapper w-40 h-40 flex justify-center items-center">
              
                <img className="" src="./Frontlisteencours/assets/img/avatars/avatar1.jpeg"/>
            </div>
               <p><b>Description: </b> {liste.enchere.description}</p>
                  <p><b> Prix maximal en cours :</b> {liste.max} Ar</p>
        
              
         
             </div>
           </div>
            </div>
)):"Vous êtes le premier à enchérir"}







            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Encherir </h4>
               
                  <form className="forms-sample" onSubmit={valider} id='form' action="/">
                    <div className="form-group">
                      <p>Votre solde est de : <b>{sessionStorage.getItem('sold')}</b> Ar</p>
                    <input type='text' name='idE' value={idE} hidden/>
                    <input type='text' name='iduser' value={sessionStorage.getItem('id')} hidden/>
                      <label for="exampleInputEmail1">Votre mise :</label>
                      <input type="number" step="any" name='mise' className="form-control" id="exampleInputEmail1" placeholder="Ar"/>
                    </div>
                    

                    <button type="submit" id='bout'  className="btn btn-primary mr-2">Valider</button>
               
                  </form>
                </div>
              </div>
            </div>
          </div>






 














            </div>
                  
           </div>  
  
  
  
   </div>
  
            
              </div>
            

        );

}

export default Apres;
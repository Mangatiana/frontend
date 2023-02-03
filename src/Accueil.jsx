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
function searchss(event)
{
  event.preventDefault();

  const queryparams=new URLSearchParams(window.location.search);
  
  let form = new FormData(document.getElementById("form"))
  let dataa=Object.fromEntries(form.entries());
  console.log(url+"rechercheAvance?motCle="+dataa.mcl+"&debut="+dataa.dte+"&categorie="+dataa.ctg+"&prix="+dataa.prx+"&statut="+dataa.statt)
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200){
          let response = this.responseText;
          if(response != null){
           var val=JSON.parse(response)

           console.log(val)
              for(var i=0;i<val.length;i++)
              {
              
               var nom= val[i].nom
               var id= val[i].idmettre_enchere
               var photo= val[i].photo
               var desc= val[i].description
               var min= val[i].mise_minimale
              
               document.getElementById("rech").innerHTML+=" <div className='row'><div className='col-md-3 grid-margin stretch-card'><div className='card'+><div className='card-body'><h4 className='card-title'+>"+nom+"</h4><div class='img-wrapper w-40 h-40 flex justify-center items-center'></div><p><b>Description: </b>"+desc+"</p><p><b> Prix minimal :</b>"+min+"Ar</p><a  href="+"/Login?idE="+id+"><button type="+"button"+" class='btn btn-outline-primary btn-fw btn-{size}'> Enchérir</button></a></div></div></div>";
             
              }
              
       //     window.location.href="/Apres?idE="+idE
          }else{
              alert('Erreur mitsy ahn')
          }
      }
  };
  xhr.open("GET", url+"rechercheAvance?motCle="+dataa.mcl+"&debut="+dataa.dte+"&categorie="+dataa.ctg+"&prix="+dataa.prx+"&statut="+dataa.statt, true);
  xhr.send();
  xhr.setRequestHeader("Accept","application/json");
  xhr.setRequestHeader("Content-Type","application/json");


}
function Accueil()  {
  
  var url1='/Login?idE=';
  const[enche,setenchere]=useState([])
  useEffect(()=>{
      fetch(url+'infoencours')
          .then((response)=>response.json())
          .then((data)=>setenchere(data))
  },[] );
  
  
  const[cat,setcategory]=useState([])
  useEffect(()=>{
      fetch(url+'categories')
          .then((response)=>response.json())
          .then((data)=>setcategory(data))
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

        
              </ul>
            </nav>


        
            <div className="main-panel">
         
         <div className="content-wrapper">
          
         <center><h2>Recherche avancée</h2></center>
         <form className="" action="" onSubmit={searchss} id='form'>
          <div className="form-group row">
         <div className="col">
          Par mot clé
                      <input type="text" name='mcl' className="form-control"id="exampleInputEmail1" placeholder="Mot clé"/>
                      </div>   

                      <div className="col">
          Par date
                      <input type="date" name='dte' className="form-control"id="exampleInputEmail1" placeholder="date"/>
                      </div>
                      <div className="col">
          Par catégorie
         <select className="form-control" name='ctg'>
          
         {Array.isArray(cat)? cat.map((liste)=>(


         <option value={liste.idcategorie_enchere}>{liste.libelle}</option>
                      
              

                      
 )):"pas de categorie"}
                    </select>
                      </div>  
                      </div>  
                      <div className="form-group row">
                      <div className="col">
          Par prix
                      <input type="number" name='prx'step="any" className="form-control"id="exampleInputEmail1" placeholder="Prix"/>
                      </div>   

                        <div className="col">
          Par statut
          <select className="form-control" name='statt'>
                      <option value="0">En cours</option>
                      <option value="1">Fini</option>

                    </select>     </div>   
                      </div>
                      <input type="submit" value="Valider" className='form-control' />
         </form>
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
                










         <center><h3>Résultat des enchères</h3></center>
         <div className="content-wrapper" id="rech">
        



 </div>


 <div id='ppp'>


 </div>

 </div> </div>


            </div>

            </body>

          
        );
    
}
 
export default Accueil;
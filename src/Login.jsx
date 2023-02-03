import React, { Component ,useState} from 'react';
import './assets/css/maps/vertical-layout-light/style.css.map';
import './assets/css/vertical-layout-light/style.css';
import {url} from './url.js'; 


function Login() {
  const queryparams=new URLSearchParams(window.location.search);
  const idE=queryparams.get('idE');
  function login(event) {
    event.preventDefault();

    const queryparams=new URLSearchParams(window.location.search);
    const idE=queryparams.get('idE');
    let form = new FormData(document.getElementById("form"))
    let dataa=Object.fromEntries(form.entries());
    console.log(url+"login?mail="+dataa.mail+"&motdepasse="+dataa.motdepasse)
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            let response = this.responseText;
            if(response != null){
              
              var util=JSON.parse(response)
              if(util.idutilisateur!=0)
              {
                var id=util.idutilisateur
                var sold=util.solde
                sessionStorage.setItem('sold',sold)
                sessionStorage.setItem('id',id)
                alert(sessionStorage.getItem('id'))
                window.location.href="/Apres?idE="+idE
              }
              else 
              {
                alert('Erreur de Mot de passe ou email')
              }
              
           

         //     window.location.href="/Apres?idE="+idE
            }else{
                alert('Erreur mitsy ahn')
            }
        }
    };
    xhr.open("GET", url+"login?mail="+dataa.mail+"&motdepasse="+dataa.motdepasse, true);
    xhr.send();
    
  }

 
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
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
               
                  <form className="forms-sample" onSubmit={login} id='form'>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" name="mail" value="rova@gmail.com" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" name="motdepasse" value="rova1234" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary mr-2">Valider</button>
               
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

export default Login;
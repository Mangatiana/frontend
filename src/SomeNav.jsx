import React, { Component } from 'react';
import './assets/css/maps/vertical-layout-light/style.css.map';
import './assets/css/vertical-layout-light/style.css';

class SomeNav extends Component {
    state = {  } 
    render() { 
        return (



            
            <div className="container-fluid page-body-wrapper">
    
            <div className="theme-setting-wrapper">
              <div id="settings-trigger"><i className="ti-settings"></i></div>
              <div id="theme-settings" className="settings-panel">
                <i className="settings-close ti-close"></i>
                <p className="settings-heading">SIDEBAR SKINS</p>
                <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
                <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
                <p className="settings-heading mt-2">HEADER SKINS</p>
                <div className="color-tiles mx-0 px-4">
                  <div className="tiles success"></div>
                  <div className="tiles warning"></div>
                  <div className="tiles danger"></div>
                  <div className="tiles info"></div>
                  <div className="tiles dark"></div>
                  <div className="tiles default"></div>
                </div>
              </div>
            </div>


            <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Admin</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title">Employe</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="devis.jsp">Faire un devis</a></li>
              </ul>
            </div>
          </li>
  
        </ul>
      </nav>


          </div>
        );
    }
}
 
export default SomeNav;
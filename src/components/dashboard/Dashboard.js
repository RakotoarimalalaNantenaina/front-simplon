import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Atelier from './../atelier/atelier';
import Getatelier from './../atelier/getatelier'
import { Link } from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";


import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Dashboard extends Component {
  state = {
    modal5: false, 
  }

  get = () =>{
      return   document.getElementById('listecomponent').style.display = 'block'
  }
  //popops login fonction 
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
  
    const { user } = this.props.auth;

    return (
      <div className="container-fluid">
          
          <MDBNavbar color="red" dark expand="md" style={{ marginTop: "1px" }} id="navbar" scrolling>
          <MDBNavbarBrand>
            <img src="logo.png" alt="Logo" id="logoimage"/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>

            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="" onClick={this.onLogoutClick} className="nav-header" >Deconnexion</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>


      
                <ul class="navbar-nav mr-auto" id="navbarmobile">
                  <li class="nav-item active">
                  <button id="li1"  className="btn btn-primary" onClick={()=>{
                          document.getElementById('ajoutercomponent').style.display = 'none'
                          this.get()
                        }} href="#">listes de vos ateliers</button>
                  </li>
                  <li class="nav-item active">
                  <button id="li1" className="btn btn-primary"  onClick={()=>{
                          document.getElementById('ajoutercomponent').style.display = 'block'
                          document.getElementById('listecomponent').style.display = 'none'

                        }} href="#">Ajouter nouveau atelier</button>
                  </li>
                  <li class="nav-item active">
                    <Link to="/"><span id="btn-accueil" >Accueil</span></Link>
                  </li>
                 
                </ul>
            
                

            <div className="wrapper">
              <nav id="sidebar">
              <center>
                  <div className="sidebar-header">
                    <img src="logo.png" alt="logo" id="imagedash"/>
                        <h3 id="h3header">{user.name.split(" ")[0]}</h3>
                        <button id="li1" className="btn btn-primary"  onClick={()=>{
                          document.getElementById('ajoutercomponent').style.display = 'block'
                          document.getElementById('listecomponent').style.display = 'none'

                        }} href="#">Ajouter nouveau atelier</button><br/>
                        <button id="li1"  className="btn btn-primary" onClick={()=>{
                          document.getElementById('ajoutercomponent').style.display = 'none'
                          this.get()
                        }} href="#">listes de vos ateliers</button><br/>
                         <Link to="/" id="btn-accueil">Accueil</Link>

                  </div>
                  </center>
              </nav>
              
            </div>

            <div>
         
        </div>
    <center>
        <Atelier/>
    </center>

        <div className="row">
              <div className="col-md-2">

              </div>
              <div className="col-md-10">
              
                <Getatelier/>
              </div>
        </div>
        <footer className="page-footer" id="footerdash">
              <center>
                <span>© 2019 Copyright   <span id="spanfooter">RAKOTOARIMALALA Andrianavalona Nantenaina</span></span>
              </center>
        </footer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

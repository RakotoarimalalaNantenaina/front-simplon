import React, { Component } from 'react';
import Header from "./Header";
import Atelier from "./Atelier"

class Accueil extends Component {
  
  render() {
    let imgUrl = 'https://cdn.pixabay.com/photo/2015/12/17/16/56/salad-1097595_640.jpg'; 
    return (
      <div className="container-fluid">
        <Header />
        <div className="card card-image" id="header" style={{backgroundImage: 'url(' + imgUrl + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
          <div className="text-white text-center rgba-stylish-strong py-5 px-4">
            <div className="py-5">
              <h2 id="h2accueil">ATELIER DE CUISINE</h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5"><span id="spanheader">Comment avoir une formation de bonne cuisinier ??</span> 
              <br/><br/>Des personnes qui veulent apprendre à  cuisiner afin de manger correctement.
              </p>
              <a className="btn peach-gradient" href="#!" id="boutton-accueil"><i class="fas fa-clone left"></i>Voir tous les ateliers</a>
            </div>
          </div>
        </div>
        <Atelier/>
        <footer className="page-footer" id="footer">
              <center>
                <span>© 2019 Copyright   <span id="spanfooter">RAKOTOARIMALALA Andrianavalona Nantenaina</span></span>
              </center>
        </footer>
      </div>
    )
  }
}
export default Accueil; 

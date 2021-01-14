import React, { Component } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
// import { HashLink } from 'react-router-hash-link';
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus"
import Listings from "./Pages/Listings"
import SingleListing from './Pages/singleListing'
import Partners from "./Pages/Partners"
import SellAHome from "./Pages/SellAHome"
import Contact from "./Pages/Contact"
import Modal from "./Component/00-Modal/Modal"
import Footer from "./Component/09-Footer/Footer"
import "./App.css"

// Redux
import { Provider } from "react-redux"
import store from "./reduxStuff/store"

class App extends Component {
 
  state = {
    modal: false,
    navbar: false,
  }
  openModal = (data) => {
    this.setState({ modal: data })
  }
  closeModal = (data) => {
    this.setState({ modal: data })
  }
  render() {
    // window.addEventListener('scroll', this.changeNav )
    return (
      <Provider store={store}>
        <Router>
          <div>
            {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}        
            <Switch>
              <Route path="/about" exact component={Aboutus} />
              <Route path="/properties" exact component={Listings} />
              <Route path="/partners" exact component={Partners} />
              <Route path="/sellahome" exact component={SellAHome} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/singleListing/:id" exact component={SingleListing} />
              <Route
                path="/facebook"
                exact
                component={() => {
                  window.open(
                    "https://www.facebook.com/resurrectingpropertiesllc/"
                  )
                }}
              />
              <Route path="/" component={Home} />
               <Home/>
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

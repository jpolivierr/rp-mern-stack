import React, { Component } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
// import { HashLink } from 'react-router-hash-link';
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus"
import Listings from "./Pages/Listings"
import Partners from "./Pages/Partners"
import SellAHome from "./Pages/SellAHome"
import Contact from "./Pages/Contact"
import Modal from "./Component/00-Modal/Modal"
import Navigation from "./Component/00-Navigation/Navigation"
import Footer from "./Component/09-Footer/Footer"
import "./App.css"

// Redux
import { Provider } from "react-redux"
import store from "./store"

class App extends Component {
  state = {
    modal: false,
    navbar: false,
  }
  openModal = (data) => {
    this.setState({ modal: data })
  }
  closeModal = (data) => {
    console.log(data)
    this.setState({ modal: data })
  }

  changeNav = (e) => {
    if (window.scrollY >= 90) {
      this.setState({ navbar: true })
    } else {
      this.setState({ navbar: false })
    }
  }

  render() {
    // window.addEventListener('scroll', this.changeNav )
    return (
      <Provider store ={store}>
        <Router>
          <div>
            {this.state.modal ? <Modal closemodal={this.closeModal} /> : null}
            <Navigation truemodal={this.openModal} Position="" />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={Aboutus} />
              <Route path="/properties" exact component={Listings} />
              <Route path="/partners" exact component={Partners} />
              <Route path="/sellahome" exact component={SellAHome} />
              <Route path="/contact" exact component={Contact} />
              <Route
                path="/facebook"
                exact
                component={() => {
                  window.open(
                    "https://www.facebook.com/resurrectingpropertiesllc/"
                  )
                }}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

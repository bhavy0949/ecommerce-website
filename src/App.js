import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
          <Container>
              <Route path='/' component={HomePage} exact/>
              <Route path='/product/:id' component={ProductPage} exact/>
          </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

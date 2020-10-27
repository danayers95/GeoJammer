import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Spotify from "./pages/Spotify";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// represents the main control for the html displays
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Spotify} />
          <Route exact path="/callback" component={Spotify} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Spotify" component={Spotify} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

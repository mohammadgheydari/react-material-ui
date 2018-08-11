import React, { Component } from "react";
// import Header from "./Components/Layouts/Header";
// import Footer from "./Components/Layouts/Footer";
import { Header, Footer } from "./Components/Layouts";
import Exercises from "./Components/Exercises";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Exercises />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

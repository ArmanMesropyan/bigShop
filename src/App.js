import React from 'react'
import './assets/style/index.scss'
import './assets/icons/style.scss'
import HeaderNav from "./components/header-nav";
import Footer from "./components/footer";
import Router from "./router";

function App() {
    return (
        <div className="App">
            <HeaderNav/>
            <Router/>
            <Footer/>
        </div>
    );
}

export default App;

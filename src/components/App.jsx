import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"
import { Home, Omoss, Inspirasjon, Dress, Bryllup, Bedriftsavtale, Skredding } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss";
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
    return (
        <Router>
            <Header />
            <Nav />
            <main>
                <Route path='/' exact component={Home} />
                <Route path='/inspirasjon' component={Inspirasjon} />
                <Route path='/dress' component={Dress} />
                <Route path='/bryllup' component={Bryllup} />
                <Route path='/bedriftsavtale' component={Bedriftsavtale} />
                <Route path='/skredding' component={Skredding} />
                <Route path='/omoss' component={Omoss} />

            </main>
            <Footer />
            <MessengerCustomerChat
                pageId="426370337439956"
                appId="857075408483537"
            />
        </Router>
    )
}

export default App

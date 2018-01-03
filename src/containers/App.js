import React, { Component } from 'react';
import './App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    Route,
    HashRouter
} from "react-router-dom";
import MainPage from "../containers/MainPage";
import ArticlesPage from "../containers/ArticlesPage";
import CompanyPage from "../containers/CompanyPage";
import ProductsPage from "../containers/ProductsPage";
import ShopPage from "../containers/ShopPage";
import UserPage from "../containers/UserPage";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header/>
                    <div className="content">
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/articles" component={ArticlesPage}/>
                        <Route path="/products" component={ProductsPage}/>
                        <Route path="/aboutUs" component={CompanyPage}/>
                        <Route path="/shop" component={ShopPage}/>
                        <Route path="/user" component={UserPage}/>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

export default App;

{/*<Route path="/user" component={UserPage}/>*/}

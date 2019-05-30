import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import * as productData from './ProductList.json'


function App() {
  const [layout, setState] = useState("");
  //const [productData] = useState("");
  const changeUI = value => {
    setState(value);
  }
  return (
    <>
      <div className="container">
        <div className="well well-sm">
            <strong>Display</strong>
            <div className="btn-group">
              <a href="#" id="list" className="btn btn-default btn-sm" onClick={e => changeUI("list")}>
                <span className="glyphicon glyphicon-th-list"></span>
                  List
              </a>
              <a href="#" id="grid" className="btn btn-default btn-sm" onClick={e => changeUI("grid")}>
                <span className="glyphicon glyphicon-th"></span>
                  Grid
              </a>
            </div>
        </div>
        <div id="products" className="row list-group">
            <Products cssClass={layout} data={productData.products} />
        </div>
    </div>
    </>
  );
}

export default App;

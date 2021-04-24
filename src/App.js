import React from "react";
import ProductList from "./Components/ProductList";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import formatPrice from "./helpers/formatPrice";
import './App.css';

export default class App extends React.Component {

  state = { items: [] }

  addProduct = (item) => {
    this.setState((prevState) => {
      return {items: [item, ...prevState.items] };
    })
  }

  render() {
    const {items} = this.state;
    let subtotal = 0;
    const tax = 0.05;
    let subTax = 1;
    let total = 0;
    items.forEach(item => subtotal+=item.price);
    subTax = subtotal * tax
    total = subtotal + subTax;
    

    return (
      <div className="App">
        <ProductList addProduct={this.addProduct}/>
        <div>
          <Cart items={items}
                subtotal={formatPrice(subtotal)}
                subTax={formatPrice(subTax)}
                total={formatPrice(total)}/>
          <Checkout total={formatPrice(total)}/>
        </div>
      </div>
    );
  }
}

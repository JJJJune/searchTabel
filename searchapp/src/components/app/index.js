import React, { PureComponent } from 'react'
import './styles.css'
import SearchBar from '../app-searchbar'
import ProductTable from '../app-product-table'

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    handleFilterTextInput = (filterText) => {
        this.setState({
            filterText: filterText
        });
    }
    handleInStockInput = (inStockOnly) => {
        this.setState({
            inStockOnly:inStockOnly
        });
    }
    render() {
        return(
            <div className="app">
                <SearchBar 
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        onFilterTextInput={this.handleFilterTextInput}
                        onInStockInput={this.handleInStockInput}/>
                <ProductTable  
                        products={PRODUCTS}
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
    }
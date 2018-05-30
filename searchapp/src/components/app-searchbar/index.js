import React, { PureComponent } from 'react'
import './styles.css'

export default class SearchBar extends PureComponent {
    constructor(props){
        super(props)
    }
    handleFilterTextInputCahnge = (e) => {
        this.props.onFilterTextInput(e.target.value)
    }
    handleInstockInoutChange = (e) => {
        this.props.onInStockInput(e.target.checked)
    render() {
        return(
            <form className="app-searchbar">
                 <input type="text" 
                        placeholder="search..."
                        value={this.props.filterText}
                        onChange={this.handleFilterTextInputCahnge}/>
                 <p><input 
                        type="checkbox"
                        checked={this.props.isStockOnly}
                        onChange={this.handleInstockInoutChange}/>
                        {' '}onliy show products in stock</p>
            </form>
        );
    }
    }
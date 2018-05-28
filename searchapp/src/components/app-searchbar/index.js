import React, { PureComponent } from 'react'
import './styles.css'

export default class SearchBar extends PureComponent {
    render() {
        return(
            <form className="app-searchbar">
                 <input type="text" placeholder="search..."/>
                 <label><input type="checkbox"/>{' '}onliy show products in stock</label>
            </form>
        );
    }
    }
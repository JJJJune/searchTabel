import React, { PureComponent } from 'react'
import './styles.css'
import ProductTitle from '../app-product-title'
import ProductRow from '../app-product-row'
export default class ProductTable extends PureComponent {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
          if (product.category !== lastCategory) {
            rows.push(<ProductTitle category={product.category} key={product.category} />);
          }
          rows.push(<ProductRow product={product} key={product.name} />);
          lastCategory = product.category;
        });
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
      }
}
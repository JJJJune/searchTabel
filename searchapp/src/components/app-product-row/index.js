import React, { PureComponent } from 'react'
import './styles.css'

export default class ProductRow extends PureComponent {
    render() {
      //<ProductRow product={product} key={product.name} />
        var name = this.props.product.stocked ? this.props.product.name :
          <span style={{color: 'red'}}>
            {this.props.product.name}
          </span>;
        return (
          <tr>
            <td>{name}</td>
            <td>{this.props.product.price}</td>
          </tr>
        );
      }
}
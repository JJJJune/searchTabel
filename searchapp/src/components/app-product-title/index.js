import React, { PureComponent } from 'react'
import './styles.css'

export default class ProductTitle extends PureComponent {
    render() {
        return <tr><th colSpan="2">{this.props.category}</th></tr>;
      }
}
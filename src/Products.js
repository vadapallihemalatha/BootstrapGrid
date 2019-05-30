import React, { Component } from 'react';
import ProductRow from './ProductRow';

export class Products extends Component {
    render() {debugger;
        const { cssClass, data } = this.props;
        return (
           <>
                {data.map((data, index) => (
                    <ProductRow {...this.props} data={data} />
                ))}
           </>
        )
    }
}

export default Products

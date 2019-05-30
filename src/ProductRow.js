import React, { Component } from 'react'

export class ProductRow extends Component {
    render() {
        const { cssClass, data } = this.props;
        return (
            <>
                <div className={`item col-xs-4 col-lg-4 ${cssClass == "list" ? "list-group-item" : "grid-group-item"}`}>
                    <div className="thumbnail">
                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                        <div className="caption">
                            <h4 className="group inner list-group-item-heading">
                                {data.title}</h4>
                            <p className= "group inner list-group-item-text">
                                {data.description}
                            </p>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <p className="lead">
                                        {data.price}
                                    </p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <a className="btn btn-success" href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductRow

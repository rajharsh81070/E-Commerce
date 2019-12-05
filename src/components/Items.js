import React, { Component } from "react";
import { connect } from "react-redux";

import { loadItems } from "../store/items";
import AddRemoveButton from "./AddRemoveButton";

class Items extends Component {
  constructor(props) {
    super(props);

    this.itemUi = this.itemUi.bind(this);
  }

  componentDidMount() {
    const { loadItems, categoryId } = this.props;
    loadItems(categoryId);
  }

  addToCart(item) {
    alert(`Added ${item.name} to cart!`);
  }

  itemUi(item) {
    return (
      <div key={item.id} className="product-item">
        <img alt={item.name} src={item.poster} />
        <div className="product-detail">
          <div className="product-title">{item.name}</div>
          <div className="product-purchase">
            <span>₹{item.price}</span>
            <AddRemoveButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { items } = this.props;
    return <div className="products">{items.map(this.itemUi)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadItems: id => {
      dispatch(loadItems(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

import React from "react";
import { connect } from "react-redux";

import { toggleCart } from "../store/cart";
import AddRemoveButton from "./AddRemoveButton";

function Cart({ items, isOpen, toggleCart }) {
  const itemIds = Object.keys(items);

  function cartItemUi(itemId) {
    const item = { ...items[itemId], id: itemId };
    return (
      <div className="cart-item">
        <div className="cart-item-top">
          <div className="cart-item-title">{item.name}</div>
          <AddRemoveButton item={item} />
        </div>
        <div className="cart-item-purchase">
          {item.price} x {item.quantity} = {item.price * item.quantity}
        </div>
      </div>
    );
  }

  return (
    <div className={`cart ${isOpen ? "is-open" : ""}`}>
      <div className="cart-header">
        <div className="cart-header-title">Cart</div>
        <button className="button is-danger" onClick={toggleCart}>
          Close
        </button>
      </div>
      <div className="cart-items">
        {itemIds.length === 0 ? (
          <div className="cart-empty">You cart is empty!</div>
        ) : (
          itemIds.map(cartItemUi)
        )}
      </div>
      <div className="cart-footer">₹0</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.cart.items,
    isOpen: state.cart.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

const TOGGLE_CART = "cart/TOGGLE_CART";
const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
}

export function toggleCart() {
  return {
    type: TOGGLE_CART
  };
}

export default function cart(
  state = { items: {}, total: 0, isOpen: false },
  action
) {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };
    case ADD_ITEM: {
      console.log("hello", action.payload);
      const { id, ...data } = action.payload;
      let item = state.items[id];
      if (item) {
        item.quantity += 1;
      } else {
        item = {
          ...data,
          quantity: 1
        };
      }

      return { ...state, items: { ...state.items, [id]: item } };
    }
    case REMOVE_ITEM: {
      const { id } = action.payload;
      let item = state.items[id];
      if (item.quantity === 1) {
        delete state.items[id];
      } else {
        item.quantity -= 1;
      }

      return { ...state, items: { ...state.items } };
    }
    default:
      return state;
  }
}

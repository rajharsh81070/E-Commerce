import dummyApi from "../dummy";

export const GET_DONE = "items/GET_DONE";

export function loadItems(categoryId) {
  const items = dummyApi.getItems(categoryId);
  return {
    type: GET_DONE,
    payload: items
  };
}

export default function items(state = { list: [] }, action) {
  switch (action.type) {
    case GET_DONE:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}

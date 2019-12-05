import dummyApi from "../dummy";

export const GET_DONE = "categories/GET_DONE";
export const SET_SELECTED = "categories/SET_SELECTED";

export function loadCategories() {
  const categories = dummyApi.getCategories();
  return { type: GET_DONE, payload: categories };
}

export function setSelectedCategory(id) {
  return {
    type: SET_SELECTED,
    payload: id
  };
}

export default function categories(
  state = { list: [], selectedCategoryId: 1 },
  action
) {
  switch (action.type) {
    case GET_DONE:
      return { ...state, list: action.payload };
    case SET_SELECTED:
      return { ...state, selectedCategoryId: action.payload };
    default:
      return state;
  }
}

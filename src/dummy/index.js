import data from "./data.json";

// function asyncWait(wait) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), wait);
//   });
// }

function getCategories() {
  // await asyncWait(2000);
  return Array.from(data.categories);
}

function getItems(categoryId) {
  // await asyncWait(2000);
  const items = data.items.filter(item => categoryId === item.categoryId);
  return items;
}

export default {
  getCategories,
  getItems
};

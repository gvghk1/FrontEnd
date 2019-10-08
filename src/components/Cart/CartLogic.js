export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COUNT_UP = "COUNT_UP";
export const COUNT_DOWN = "COUNT_DOWN";

const axios = require("axios");
const url = "https://geek-text-backend.herokuapp.com/api";

var homeItems = {
  items: book_data(),
  addedItems: [],
  total: 0
};
async function book_data() {
  try {
    const response = await axios.get(url);
    homeItems.items = response.data;
    this.setState({ items: response.data });
  } catch (error) {
    console.error(error);
  }
}
const CartLogic = (state = homeItems, action) => {
  if (action.type === ADD) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.book_price
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.book_price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);
    let newTotal =
      state.total - itemToRemove.book_price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  if (action.type === COUNT_UP) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.book_price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === COUNT_DOWN) {
    let addedItem = state.items.find(item => item.id === action.id);
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.book_price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.book_price;
      return {
        ...state,
        total: newTotal
      };
    }
  } else {
    return state;
  }
};
export default CartLogic;

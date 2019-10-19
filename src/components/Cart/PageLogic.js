export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COUNT_UP = "COUNT_UP";
export const COUNT_DOWN = "COUNT_DOWN";
export const DETAILS = "DETAILS";
export const SAVE_ADD = "SAVE_ADD";
export const SAVE_ADD_CART = "SAVE_ADD_CART";
export const SAVE_REMOVE = "SAVE_REMOVE";
export const WISH_LIST_ADD = "WISH_LIST_ADD";
export const WISH_LIST_REMOVE = "WISH_LIST_REMOVE";

const axios = require("axios");
const url = "https://geek-text-backend.herokuapp.com/api";

var homeItems = {
  items: book_data(),
  addedItems: [],
  addedItemID: [],
  savedItems: [],
  wishlist: [],
  total: 0
};
async function book_data() {
  try {
    const response = await axios.get(url);
    homeItems.items = response.data;
    this.setState({ items: response.data });
  } catch (error) {}
}

//Only loads if the url returns nothing from backend
//Works with constructor from home.js; Please keep synced
function dbNotLoaded() {
  return [
    {
      _id: "0",
      id: 0,
      book_name: "Loading...",
      book_cover: "http://dummyimage.com/350x350.png/cc0000/ffffff",
      author_first_name: "",
      author_last_name: "",
      author_biography: "",
      book_desc: "",
      book_genre: "",
      book_publisher: "",
      book_releaseDate: "",
      book_rating: 0,
      email: "",
      gender: "",
      book_publishing_info: "",
      book_copies_sold: 0,
      book_price: 0,
      quantity: 0
    }
  ];
}

const PageLogic = (state = homeItems, action) => {
  if (!Array.isArray(state.items) || !state.items.length) {
    state.items = dbNotLoaded();
  }
  if (action.type === DETAILS) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItemID.find(item => action.id === item.id);
    if (existed_item) {
      return {
        ...state
      };
    } else {
      return {
        ...state,
        addedItemID: [addedItem]
      };
    }
  }
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
  }
  if (action.type === SAVE_ADD) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.savedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let newTotal =
      state.total - itemToRemove.book_price * itemToRemove.quantity;
    if (existed_item) {
      return state;
    } else {
      return {
        ...state,
        addedItems: new_items,
        savedItems: [...state.savedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === SAVE_ADD_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
    let new_items = state.savedItems.filter(item => action.id !== item.id);

    let itemToRemove = state.savedItems.find(item => action.id === item.id);
    let newTotal =
      state.total + itemToRemove.book_price * itemToRemove.quantity;
    if (existed_item) {
      return state;
    } else {
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        savedItems: new_items,
        total: newTotal
      };
    }
  }
  if (action.type === SAVE_REMOVE) {
    let new_items = state.savedItems.filter(item => action.id !== item.id);
    return {
      ...state,
      savedItems: new_items
    };
  }
  if (action.type === WISH_LIST_ADD) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.wishlist.find(item => action.id === item.id);
    if (existed_item) {
      return state;
    } else {
      return {
        ...state,
        wishlist: [...state.wishlist, addedItem]
      };
    }
  }
  if (action.type === WISH_LIST_REMOVE) {
    let new_items = state.wishlist.filter(item => action.id !== item.id);
    return {
      ...state,
      wishlist: new_items
    };
  } else {
    return state;
  }
};
export default PageLogic;

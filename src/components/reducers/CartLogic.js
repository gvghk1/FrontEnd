import DefaultImg from "./cover.png";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COUNT_UP = "COUNT_UP";
export const COUNT_DOWN = "COUNT_DOWN";

const homeItems = {
  items: [
    {
      bookname: "Courage Mountain",
      authorName: "Ferguson Yeomans",
      authorBio:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      bookDescrip:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      bookGenre: "Adventure|Children|Drama",
      book_pub: "Dotted Hawthorn",
      book_rel: "9/12/2018",
      bookRate: "5",
      price: 1.99,
      img: DefaultImg
    },
    {
      id: 2,
      bookname: "idk",
      authorName: "person",
      authorBio: "pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      bookDescrip:
        "2Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      bookGenre: "Adventure|Children|Drama",
      book_pub: "Dotted Hawthorn",
      book_rel: "9/12/2018",
      bookRate: "5",
      price: 2.49,
      img: DefaultImg
    }
  ],
  addedItems: [],
  total: 0
};
const CartLogic = (state = homeItems, action) => {
  if (action.type === ADD) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

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
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  if (action.type === COUNT_UP) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === COUNT_DOWN) {
    let addedItem = state.items.find(item => item.id === action.id);
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
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

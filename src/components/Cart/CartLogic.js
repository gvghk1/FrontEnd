export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COUNT_UP = "COUNT_UP";
export const COUNT_DOWN = "COUNT_DOWN";

const homeItems = {
  items: [
    {
      _id: "5d97808aeec2e9b7d414ce5a",
      id: 33,
      book_name: "Kind Hearts and Coronets",
      book_cover: "http://dummyimage.com/350x350.png/ff4444/ffffff",
      author_first_name: "Harvey",
      author_last_name: "Inskipp",
      author_biography:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      book_desc:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      book_genre: "Comedy|Drama",
      book_publisher: "Eastern Milkpea",
      book_releaseDate: "06/08/2019",
      book_rating: 4,
      email: "hinskippw@discuz.net",
      gender: "Male",
      book_publishing_info: "6/22/2019",
      book_copies_sold: 95,
      book_price: 4
    },
    {
      id: 2,
      bookname: "idk",
      authorName: "person",
      authorBio: "pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      bookDescrip:
        "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      bookGenre: "Adventure|Children|Drama",
      book_pub: "Dotted Hawthorn",
      book_rel: "9/12/2018",
      bookRate: "5",
      book_price: 999
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

export const WISH_LIST_ADD = "WISH_LIST_ADD";
export const WISH_LIST_REMOVE = "WISH_LIST_REMOVE";
export const WISH_LIST_ADDCART = "WISH_LIST_ADDCART";
export const WISH_LIST_RENAME = "WISH_LIST_RENAME";
export const WISH_LIST_CURRENT = "WISH_LIST_CURRENT";
export const ADD = "ADD";

// function trigger state change function - global function - Wish-List-add
export const addItemWish = id => {
  return {
    type: WISH_LIST_ADD,
    id
  };
};

// function trigger state change function - global function - Wish-List-Remove
export const wishRemove = id => {
  return {
    type: WISH_LIST_REMOVE,
    id
  };
};

// function trigger state change function - global function - global function - ADD
export const wishToCart = id => {
  return {
    type: ADD,
    id
  };
};

// function trigger state change function - global function - WISH_LIST_RENAME
export const changeWishName = event => {
  return {
    type: WISH_LIST_RENAME,
    event
  };
};

// function trigger state change function - global function - WISH_LIST_CURRENT.
export const currentWishName = event => {
  return {
    type: WISH_LIST_CURRENT,
    event
  };
};
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// function trigger state change function - global function - global function - ADD
export const wishToWish = id => {
  return {
    type: ADD,
    id
  };
};

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

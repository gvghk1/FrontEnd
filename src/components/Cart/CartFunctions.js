export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const COUNT_UP = "COUNT_UP";
export const COUNT_DOWN = "COUNT_DOWN";

//Add or delete cart item
export const addItem = id => {
  return {
    type: ADD,
    id
  };
};
export const removeItem = id => {
  return {
    type: REMOVE,
    id
  };
};

//Amount of each item in the cart
export const addQuantity = id => {
  return {
    type: COUNT_UP,
    id
  };
};
export const subtractQuantity = id => {
  return {
    type: COUNT_DOWN,
    id
  };
};

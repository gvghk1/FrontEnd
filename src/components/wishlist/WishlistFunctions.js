export const WISH_LIST_ADD = "WISH_LIST_ADD";
export const WISH_LIST_REMOVE = "WISH_LIST_REMOVE";

export const addItemWish = id => {
  return {
    type: WISH_LIST_ADD,
    id
  };
};
export const wishRemove = id => {
  return {
    type: WISH_LIST_REMOVE,
    id
  };
};

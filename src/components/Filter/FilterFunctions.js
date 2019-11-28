export const FILTER = "FILTER";
export const REFRESH = "REFRESH";
export const filtered = event => {
  return {
    type: FILTER,
    event
  };
};
export const refresh = event => {
  return {
    type: REFRESH,
    event
  };
};

export const DBADD = "DBADD";

export const addDB = event => {
  return {
    type: DBADD,
    event
  };
};

/**
 * Saves value into localStorage, saves JSON object
 * @param param {string}
 * @param value {any}
 */
export const storageSave = (param: string, value: any) => {
  localStorage.setItem(param, JSON.stringify(value));
};

/**
 * Gets value from localStorage from a JSON object
 * @param param {string}
 * @returns {any | null}
 */
export const storageGet = (param: string) => {
  const item = localStorage.getItem(param);
  if (item) {
    return JSON.parse(item);
  } else {
    return null;
  }
};

/**
 * Deletes value by param from localStorage
 * @param param {string}
 */
export const storageDelete = (param: string) => {
  localStorage.removeItem(param);
};

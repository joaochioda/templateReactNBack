const apiUrl = "http://localhost:5000/";

export const fetchUrl = (path: string) => {
  return fetch(apiUrl + path);
};

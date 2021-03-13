const url = process.env.SERVER_URI || "http://localhost:5000/api";

const token = "Bearer " + localStorage.getItem("token");

const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": token,
  },
};
const postOptions = (data) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
const deleteOptions = { method: "DELETE" };

export const getBooks = async () => {
  const res = await fetch(url + `/books`, getOptions);
  return res;
};

export const postBooks = async (data) => {
  const res = await fetch(url + `/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
};

export const getBookDetailByID = async (id) => {
  const res = await fetch(`${url}/books/${id}`, { method: "GET" });
  const data = await res.json();
  return data;
};

// authors
export const getAuthors = async () => {
  console.log(getOptions);
  const res = await fetch(url + "/authors", getOptions);
  const data = await res.json();
  return data;
};
export const getAuthorDetailByID = async (id) => {
  const resp = await fetch(`${url}/authors/${id}`, getOptions);
  const data = await resp.json();
  return data;
};

// genres
export const getGenres = async () => {
  const res = await fetch(url + "/genres", getOptions);
  const data = await res.json();
  return data.data;
};
export const getGenreDetailByID = async (id) => {
  const res = await fetch(`${url}/genres/${id}`, getOptions);
  const data = await res.json();
  return data;
};
export const postGenres = async (genre) => {
  const res = await fetch(`${url}/genres`, postOptions(genre));
  return res;
};
export const deleteGenres = async (id) => {
  const res = await fetch(`${url}/genres/${id}`, deleteOptions);
  return res;
};
export const putGenre = async (data) => {
  const genre = { name: data.name };
  const resp = await fetch(`${url}/genres/${data.id}`, {
    ...postOptions(genre),
    method: "PUT",
  });
  return resp;
};

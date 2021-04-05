import http from "../services/http";

const url = process.env.SERVER_URI || "http://localhost:5000/api";

const token = "Bearer " + localStorage.getItem("token");

const isAuthorized = (token) => {
  return token;
};

const getOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
};
const postOptions = (data) => {
  return {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

const deleteOptions = {
  method: "DELETE",
  headers: {
    Authorization: token,
    "Content-Type": "application/json",
  },
};

export const getDashboard = async () => {
  console.log("[api/index.js]");
  // [users, books, authors, genres]
  const responses = await Promise.all([
    // fetch(url + "/users", getOptions),
    fetch(url + "/books", getOptions),
    fetch(url + "/authors", getOptions),
    fetch(url + "/genres", getOptions),
    fetch(url + "/bookinstances", getOptions),
  ]);
  const results = await Promise.all(responses.map((res) => res.json()));
  console.log("[api/index.js]", results);

  let available = 0;
  if (results[3].length > 0) {
    available = results[3].filter((item) => item.status === "Available").length;
  }
  return {
    books: results[0].length,
    authors: results[1].length,
    genres: results[2].data.length,
    copies: results[3].length,
    availableCopies: available,
  };
};

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
  // const data = await res.json();
  return res;
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

// Book Instance Services
export const getAllBookInstances = async () => {
  const res = await fetch(`${url}/bookinstances/`, getOptions);
  return res;
};
export const getSingleBookInstances = async (id) => {
  const res = await fetch(`${url}/bookinstance/`, {
    ...getOptions,
    body: JSON.stringify({ id }),
  });
  return res;
};
export const createSingleBookInstance = async (data) => {
  const res = await fetch(`${url}/bookinstance/`, {
    ...postOptions(data),
    body: JSON.stringify(data),
  });
  return res;
};
export const getSingleBookInstanceByID = async (id) => {
  const res = await fetch(`${url}/bookinstance/`, {
    ...getOptions,
    body: JSON.stringify({ id }),
  });
  return res;
};
export const updateSingleBookInstanceByID = async (id) => {
  const res = await fetch(`${url}/bookinstance/`, {
    method: "PATCH",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({ id }),
  });
  return res;
};
export const deleteSingleBookInstanceByID = async (id) => {
  console.log("index.js", id);
  const res = await fetch(`${url}/bookinstance`, {
    ...deleteOptions,
    body: JSON.stringify({ id }),
  });
  return res;
};

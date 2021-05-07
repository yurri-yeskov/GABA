export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const clearUsers = () => {
  return {
    type: "CLEAR_USERS",
    payload: {},
  };
};

export const postBook = (book) => {
  return {
    type: "POST_BOOK",
    payload: book,
  };
};

export const editBook = (book) => {
  return {
    type: "EDIT_BOOK",
    payload: book,
  };
};

export const deleteBook = (book) => {
  return {
    type: "DELETE_BOOK",
    payload: book,
  };
};

export const clearBooksTemporary = () => {
  return {
    type: "CLEAR_BOOKS_TEMPORARY",
    payload: {},
  };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setBook = (book) => {
  return {
    type: "SET_BOOK",
    payload: book,
  };
};

export const addPostedBook = (book) => {
  return {
    type: "ADD_POSTED_BOOK",
    payload: book,
  };
};

export const setPostedBooks = (books) => {
  return {
    type: "SET_POSTED_BOOKS",
    payload: books,
  };
};

export const removePostedBook = (book) => {
  return {
    type: "REMOVE_POSTED_BOOK",
    payload: book,
  };
};

export const clearPostedBooks = () => {
  return {
    type: "CLEAR_POSTED_BOOKS",
    payload: [],
  };
};

export const addChat = (chat) => {
  return {
    type: "ADD_CHAT",
    payload: chat,
  };
};

export const clearChats = () => {
  return {
    type: "CLEAR_CHATS",
    payload: {},
  };
};

export const setChat = (chat) => {
  return {
    type: "SET_CHAT",
    payload: chat,
  };
};

export const unsetChat = () => {
    return {
        type: "UNSET_CHAT",
        payload: {}
    };
};

export const initiateRedirect = () => {
  return {
    type: "INITIATE_REDIRECT",
    payload: {},
  };
};

export const cancelRedirect = () => {
    return {
        type: "CANCEL_REDIRECT",
        payload: {}
    };
};

export const postSimilarBook = (payload) => {
  return {
    type: "CHANGE_SIMILAR_BOOK",
    payload,
  };
};
export const addBookOwner = (user) => {
  return {
    type: "ADD_BOOK_OWNER",
    payload: user,
  };
};

export const clearBookOwner = () => {
  return {
    type: "CLEAR_BOOK_OWNER",
    payload: {},
  };
};

import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const BookContext = (props) => {
  const [books, setBooks] = useState([
    {id: 'a1', name: 'JS basics'},
    {id: 'a2', name: 'JS advanced'},
    {id: 'a3', name: 'React JS'},
  ]);

  const addBook = () => {
    setBooks([
      ...books, 
      {id: 'a4', name: 'React TS JS'},
    ]);
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const value = {
    books,
    addBook,
    removeBook
  };

  return <CustomContext.Provider value={value}>
    {props.children}
  </CustomContext.Provider>
}
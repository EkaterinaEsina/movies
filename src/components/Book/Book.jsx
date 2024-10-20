import { useContext } from "react";
import { CustomContext } from "../../Сontext/BookContext";

export const Book = (props) => {
  const { name, publishYear, price, children } = props;

  const { addBook, removeBook, books = [] } = useContext(CustomContext);

  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <h2 className="book">Name: {book.name}</h2>
          <p>Publish year - {book.publishYear}</p>
          <p>Price - {book.price}</p>
          <p>{children}</p>
          {
            //<p></p>
          }
        </div>
      ))}
    </>
  );
};
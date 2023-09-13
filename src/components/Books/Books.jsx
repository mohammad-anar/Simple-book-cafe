import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({handleBookmark, handleMarkAsRead, handleLs}) => {
    // use state here 
    const [books, setBooks] = useState([]);
    // use effect is here 
    useEffect(() => {
        fetch('./books.json')
        .then(res => res.json())
        .then(data => {setBooks(data); handleLs(data)})
    }, []);



    return (
        <div className="md:col-span-2">
            {
                books.map(book => <Book
                     key={book.id}
                     book={book}
                     handleBookmark={handleBookmark}
                     handleMarkAsRead={handleMarkAsRead}
                ></Book>)
            }
           
        </div>
    );
};

Books.propTypes={
    handleBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
    handleLs: PropTypes.func
}

export default Books;
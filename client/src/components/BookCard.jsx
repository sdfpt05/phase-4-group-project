import React from "react";
import {Link} from "react-router-dom";

const BookCard = ({book}) => {
    const {title, author, imageUrl} = book;
    console.log('---------'+book)
return (
    <div className="book-card">
        <img src={imageUrl} alt={title} className="book-image" />
        <div className="book-details">
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
        <div className="book-actions">
            {/* <button>Edit</button> */}
            <Link to={`/book/${book.id}`}>Edit</Link>
            <Link to={`/book/${book.id}`}>Delete</Link>
        </div>
    </div>
)
}

export default BookCard
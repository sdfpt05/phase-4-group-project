import React from "react";

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
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
)
}

export default BookCard
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DeleteBook = () => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const deleteBook = async () => {
      try {
        const serverURL = `https://phase-4-group-project.onrender.com/book/${id}`; // Replace with server URL to delete book
        const res = await fetch(serverURL, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Failed to delete book');
        }
        console.log('Book deleted successfully');
        history.push('/books'); // Redirect to books list page after deletion
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    };

    deleteBook();
  }, [id, history]); // Execute deletion when `id` or `history` changes

  return (
    <div className='delete-book-container'>
      <h2>Deleting Book...</h2>
      {/* You can add a spinner or loading message here */}
    </div>
  );
};

export default DeleteBook;

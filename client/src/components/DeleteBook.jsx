import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serverURL } from '../utils';

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteBook = async () => {
      try {
        const serverURL = "`${serverURL}/api/${id}`"; // Replace with server URL to delete book
        const res = await fetch(serverURL, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Failed to delete book');
        }
        console.log('Book deleted successfully');
        navigate('/books'); // Redirect to books list page after deletion
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    };

    deleteBook();
  }, [id, navigate]); // Execute deletion when `id` or `history` changes

  return (
    <div className='delete-book-container'>
      <h2>Deleting Book...</h2>
      {/* You can add a spinner or loading message here */}
    </div>
  );
};

export default DeleteBook;

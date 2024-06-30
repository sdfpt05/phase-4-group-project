import { useState, useEffect } from "react"

export function useBooks() {
    const [books, setBooks]  = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const serverURL = 'https://phase-4-group-project.onrender.com/books'
            const res = await fetch(serverURL);
            if (!res.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setBooks(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
    
        fetchBooks(); 
      }, []);

      return { books }
}
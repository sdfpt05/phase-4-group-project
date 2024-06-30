import { useState, useEffect } from 'react';
import './css/Dashboard.css';
import { useBooks } from '../use-books';


const Dashboard = () => {
    const [clients, setClients] = useState(0);
    const [admin, setAdmin] = useState(0);
    // const [books, setBooks] = useState(0);
    const { books } = useBooks()

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const serverURL = '/dashboard'; // Replace with server URL to fetch dashboard data
                const res = await fetch(serverURL, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                if (res.ok) {
                    const data = await res.json();
                    setClients(data.client);
                    setAdmin(data.admin);
                    setBooks(data.book);
                } else {
                    throw new Error('Failed to fetch dashboard data');
                }
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, []); 

    return (
        <div className="dashboard">
            <div className="dashboard-box">
                <h2>Total Books</h2> <br />
                <h2>{books.length}</h2>
            </div>
            <div className="dashboard-box">
                <h2>Total Clients</h2> <br />
                <h2>{clients}</h2>
            </div>
            <div className="dashboard-box">
                <h2>Total Admins</h2> <br />
                <h2>{admin}</h2>
            </div>
        </div>
    );
};

export default Dashboard;

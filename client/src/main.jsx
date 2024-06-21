import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './components/Books'
import Signup from './components/Signup'
import AddClient from './components/AddClient'
import AddBook from './components/AddBook'
import Dashboard from './components/Dashboard'
import EditBook from './components/EditBook'
import DeleteBook from './components/DeleteBook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<App />}/>
      <Route path= '/books' element={<Books />}/>
      <Route path= '/signup' element={<Signup />}/>
      <Route path= '/addclient' element={<AddClient />}/>
      <Route path= '/addbook' element={<AddBook />}/>
      <Route path= '/dashboard' element={<Dashboard />}/>
      <Route path= '/book/:id' element={<EditBook />}/>
      <Route path= '/delete/:id' element={<DeleteBook />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

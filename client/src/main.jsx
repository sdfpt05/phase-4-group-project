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
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import { AuthProvider } from './authcontext'
import Login from './components/Login'
import Logout from './components/Logout'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}> 
      <Route path= '/' element={<App />}/>
      <Route path= '/books' element={<Books />}/>
      <Route path= '/signup' element={<Signup />}/>
      <Route path= '/login' element={<Login />}/>
      <Route path= '/logout' element={<Logout />}/>
      <Route path= '/addclient' element={<AddClient />}/>
      <Route path= '/addbook' element={<AddBook />}/>
      <Route path= '/dashboard' element={<Dashboard />}/>
      <Route path= '/book/:id' element={<EditBook />}/>
      <Route path= '/delete/:id' element={<DeleteBook />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)

import './App.css'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Books from './components/Books'
import AddClient from './components/AddClient'

function App() {
  return (
    <div>
      <Signup/>
      <Navbar/>
      <Home/>
      <Books/>
      <AddClient/>
    </div>
  )
}

export default App;
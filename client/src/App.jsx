import './App.css'
import { Signup } from './components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Books from './components/Books'

function App() {
  return (
    <div>
      <SignupForm/>
      <Navbar/>
      <Home/>
      <Books/>
    </div>
  )
}

export default App;
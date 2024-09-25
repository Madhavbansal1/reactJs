import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Contest/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <h1>heloo world</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App

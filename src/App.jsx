import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Search from "./components/Search"
import HomePage from "./components/HomePage"
import Message from "./components/Message"
import Notification from "./components/Notification"



function App() {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Search />
        <Notification />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/messages" element={<Message />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

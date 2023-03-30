import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"



function App() {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Details />
      </div>
    </Router>
  )
}

export default App

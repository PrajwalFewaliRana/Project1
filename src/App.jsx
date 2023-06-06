import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import HomePage from "./components/HomePage";
import Message from "./components/Message";
import Notification from "./components/Notification";
import Explore from "./components/Explore";
import Reels from "./components/Reels";
import Create from "./components/Create";
import Profile from "./components/Profile";
import More from "./components/More";
import Navbar from "./components/Navbar";
import LastBar from "./components/LastBar";
import SmallBox from "./components/SmallBox";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <SmallBox />
        <Sidebar />
        <Search />
        <Notification />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/profile/" element={<Profile />} />
        </Routes>
        <Create />
        <More />
      </div>
      <LastBar />
    </Router>
  );
}

export default App;

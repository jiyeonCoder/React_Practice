import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Link to Home</Link>
        <Link to="/cat">Link to Cat</Link>
        <Link to="/dog">Link to Dog</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home data={"I'm data"} />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;

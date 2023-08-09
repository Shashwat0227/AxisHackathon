import Home from "./pages1/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./pages1/CreatePost";
import { routhPath } from "./routes1/routes";
import AllPost from "./pages1/Allpost";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhPath.home} element={<Home />} />
        <Route path={routhPath.create} element={<CreatePost />} />
        <Route path={routhPath.post} element={<AllPost />} />
      </Routes>
    </Router>
  );
}

export default App;

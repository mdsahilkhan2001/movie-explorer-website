 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import MovieDetails from "./pages/MovieDetails";
import MovieProvider from "./context/MovieListContext";



const App = () => (
  <MovieProvider>
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  </MovieProvider>
);

export default App;

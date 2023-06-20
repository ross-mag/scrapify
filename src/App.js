import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import SongsPage from "./pages/SongsPage/SongsPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import ScrapbookPage from "./pages/ScrapbookPage/ScrapbookPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/scrapbook" element={<ScrapbookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

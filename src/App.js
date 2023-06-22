import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import NotesPage from "./pages/NotesPage/NotesPage";
import ScrapbookPage from "./pages/ScrapbookPage/ScrapbookPage";
import Callback from "./components/Callback/Callback";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/callback" component={Callback} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/scrapbook" element={<ScrapbookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MusicPage from "./pages/MusicPage/MusicPage";
import JournalPage from "./pages/JournalPage/JournalPage";
import ScrapbookPage from "./pages/ScrapbookPage/ScrapbookPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { SelectedSongsProvider } from "./SelectedSongsContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SelectedSongsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/scrapbook" element={<ScrapbookPage />} />
          </Routes>
        </SelectedSongsProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;
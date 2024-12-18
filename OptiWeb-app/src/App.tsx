import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { GalleryPage, HomePage } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

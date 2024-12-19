import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { GalleryPage, HomePage } from "./pages";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage/EventPage";
import SponsorsPage from "./pages/SponsorsPage/SponsorsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import CommitteePage from "./pages/CommitteePage/CommitteePage";
import "./App.css";
import ImageSwiper from "./components/ImageSwiper/ImageSwiper";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      {/* <ImageSwiper /> */}
    </>
  );
};

export default App;

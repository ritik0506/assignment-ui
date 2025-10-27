import React from "react";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import GallerySection from "./components/GallerySection/GallerySection";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="right-side">
        <ProfileSection />
        <div className="card-divider" aria-hidden="true" />
        <GallerySection />
      </div>
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";
import "./GallerySection.css";

const GallerySection = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
  ]);
  const galleryRef = useRef(null);

  const addImage = () => {
    const newImage = `https://picsum.photos/200?random=${Math.random()}`;
    setImages([...images, newImage]);
  };

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;
    const scrollAmount = galleryRef.current.clientWidth * 0.85;
    galleryRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="gallery-section">
      <aside className="gallery-sidebar">
        <div className="sidebar-icon">?</div>
        <div className="sidebar-icon sidebar-icon-grid" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </aside>

      <div className="gallery-content">
        <div className="gallery-header">
          <div className="gallery-title">Gallery</div>
          <div className="gallery-actions">
            <button className="gallery-add" onClick={addImage} type="button">
              + Add Image
            </button>
            <div className="gallery-nav">
              <button
                type="button"
                onClick={() => scrollGallery(-1)}
                aria-label="Scroll left"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => scrollGallery(1)}
                aria-label="Scroll right"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="gallery-images" ref={galleryRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Gallery item ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

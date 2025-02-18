import React, { useState, useEffect } from 'react';
import '../styles/details.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Jumbotron: React.FC = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  // Event listener to detect user interaction with the iframe
  useEffect(() => {
    const iframe = document.querySelector('iframe');

    if (iframe) {
      iframe.addEventListener('click', () => {
        setHasInteracted(true); // Set to true when the iframe is clicked
      });
    }

    // Handle the page unload event
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasInteracted) {
        const message = "You have interacted with the video. Are you sure you want to leave this page?";
        event.returnValue = message; // Standard for most browsers
        return message; // For some browsers
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasInteracted]);

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
        </a>
      </header>

      <div
        className="p-5 mb-4 bg-body-tertiary rounded-3"
        style={{
          backgroundImage: "url('https://interplanetary.tv/wp-content/uploads/2024/12/Superman-2025-landscape-poster-2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '560px',
          position: 'relative',
        }}
      >

        {/* Buttons Container In Movie Cover Section */}
        <div className="custom-buttons-container">
          <button className="btn btn-primary btn-lg" type="button">
            Add To My Watchlist
          </button>
          <button className="btn btn-primary btn-lg" type="button">
            Watched Already
          </button>
        </div>
      </div>

      {/* Trailer Section */}
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-3 text-bg-dark rounded-3 d-flex flex-column align-items-center justify-content-center">
            <h3 className="mb-3">The Movie Trailer</h3> {/* This keeps the title aligned with the video */}
            <div className="d-flex justify-content-center w-100">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uhUht6vAsMY?si=3NqXkwrBC1kJWHAU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ maxWidth: '100%', height: 'auto' }}
              ></iframe>
            </div>
          </div>
        </div>



        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3 review-container" style={{ padding: '10px' }}>
            <h2>Reviews</h2>
            <p style={{ fontStyle: 'italic' }}>
              "I’m a big fan of Superman, and I’ve been waiting for this movie for so long. After just watching the trailer, I can already tell that this movie is going to be a hit. I’m so excited to watch it!"
            </p>
            <h4><strong>Stanley B.</strong></h4>

            {/* Image Placeholder for Logo */}
            <div className="text-center mb-4">
              <img
                src="/LightThemeLogo.png"
                alt="Logo Placeholder"
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
              />
            </div>

            <button className="btn btn-outline-secondary" type="button">
              NEXT
            </button>
          </div>
        </div>

      </div>

      <footer className="pt-3 mt-4 text-body-secondary border-top">
        © 2025
      </footer>
    </div>
  );
};

export default Jumbotron;

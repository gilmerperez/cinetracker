import React, { useState, useEffect } from 'react';
import '../styles/details.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDetails } from '../api/detailsAPI';
import { CardDetails } from '../interfaces/CardDetails';


const Jumbotron: React.FC<{ id: number }> = ({ id }) => {
  
  const poster_url = "https://image.tmdb.org/t/p/w500";
  const [cardDetails, setDetails] = useState<CardDetails>({});

  useEffect(() => {
    getDetails({ MovieID : id })
      .then((data) => {
        console.log(data+"data");
        setDetails(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);


  return (
    <div className="container py-4" style={{ backgroundImage: `url(${poster_url + cardDetails.BackdropLink})` }}>
      <div className='main-holder' style={{ backgroundColor: 'green' }}>
        <div className='details-holder'>
          <div className='movie-title'>{cardDetails.Title}</div>
          <div className='movie-overview'>{cardDetails.Overview}</div>
          <div className='movie-year'>{cardDetails.Year}</div>
          <div className='movie-buttons'></div>
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
    </div>
  );
};

export default Jumbotron;

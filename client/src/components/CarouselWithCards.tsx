import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Type definitions for the props (if needed)
interface Card {
  cardNumber: number;
}

const CarouselWithCards: React.FC = () => {
  // Number of slides and cards per slide
  const totalSlides: number = 5;
  const cardsPerSlide: number = 5;

  // Function to create the carousel dynamically
  const createSlides = () => {
    const slides: JSX.Element[] = [];
    const indicators: JSX.Element[] = [];

    for (let i = 0; i < totalSlides; i++) {
      // Create slide item
      const isActive: string = i === 0 ? 'active' : '';

      const slideItem = (
        <div key={i} className={`carousel-item ${isActive}`}>
          <div className="row">
            {Array.from({ length: cardsPerSlide }).map((_, j) => {
              const cardNumber = i * cardsPerSlide + j + 1;
              return (
                <div className="col-2" key={j}>
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src={`https://via.placeholder.com/150?text=Card+${cardNumber}`}
                      className="card-img-top"
                      alt={`Card ${cardNumber}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card {cardNumber}</h5>
                      <Link to={`/card/${cardNumber}`} className="btn btn-primary">
                        Go somewhere
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
      slides.push(slideItem);

      // Create carousel indicator button
      const indicatorButton = (
        <button
          key={i}
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={i}
          aria-label={`Slide ${i + 1}`}
          className={i === 0 ? 'active' : ''}
          aria-current={i === 0 ? 'true' : undefined}
        />
      );
      indicators.push(indicatorButton);
    }

    return { slides, indicators };
  };

  const { slides, indicators } = createSlides();

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">{indicators}</div>
      <div className="carousel-inner">{slides}</div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselWithCards;

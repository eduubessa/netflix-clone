import React from 'react';
import './MovieRow.css';

function MovieRow ({title, items}) {
  return (
      <div className="movies-row">
          <h2>{title}</h2>
          <div className="movie-row-list-area">
              <div className="movie-row-list">
                  { items.results.length > 0 && items.results.map((item, key) => (
                      <div className="movie-row-list-item" key={key}>
                          <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
};

export default MovieRow;
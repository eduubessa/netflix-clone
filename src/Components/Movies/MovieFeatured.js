import React from "react";
import "./MovieFeatured.css"
import "remixicon/fonts/remixicon.css"

function MovieFeatured({item}) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top, center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">{item.original_name}</div>
                    <div className="featued-info">
                        <div className="featured-points">{item.vote_average} pontos</div>
                        <div className="featured-year">{firstDate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} Temporadas</div>
                        <div className="featured-overview">{item.overview}</div>
                        <div className="featured-buttons">
                            <a href={`/watch/${item.id}`} className="featured-button-watch">► Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured-button-mylist">+ Minha Lista</a>
                        </div>
                        <div className="featured-genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieFeatured;
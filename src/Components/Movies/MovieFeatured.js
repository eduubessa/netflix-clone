import React from "react";
import "./MovieFeatured.css"
import "remixicon/fonts/remixicon.css"

function MovieFeatured({item}) {

    let firstDate = new Date(item.first_air_date);

    console.log(item);

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top, center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">{item.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-points">{item.vote_average}</div>
                        <div className="featured-year">{ firstDate.getFullYear()}</div>
                        <div className="featured-overview">{item.overview}</div>
                        <div className="featured-buttons">
                            <button className="featured-button-watch"><i className="ri-play-fill"></i> Watch Now</button>
                            <button className="featured-button-info"><i className="ri-information-line"></i> Mais informações</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieFeatured;
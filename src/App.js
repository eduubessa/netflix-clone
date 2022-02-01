import './App.css';
import React, {useEffect, useState} from "react";
import TheMovieDatabase from "./Services/TheMovieDatabase";

import MovieRow from "./Components/Movies/MovieRow";
import MovieFeatured from "./Components/Movies/MovieFeatured";

function App() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);

    useEffect(() => {
        const __init__ = async () => {
            let list = await TheMovieDatabase.fetchInitiliazeList()
            setMovieList(list);

            let originals = list.filter(movie => movie.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenData = await TheMovieDatabase.fetchMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenData);
        }

        __init__()

    }, []);

    return (
        <div className="page">
            { featuredData && <MovieFeatured item={featuredData} /> }

            <section className="lists">
                {
                    movieList.map((item, key) => (
                        <div className="movie">
                            <MovieRow key={key} title={item.title} items={item.items}/>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default App;

const SERVICE_API_BASE='https://api.themoviedb.org/3';
const SERVICE_API_KEY='24b6fc35673a14b2e08dfbf418bb864f';

/**
 * Base request
 * @param endpoint
 * @returns {Promise<any>}
 */
const basicFetch = async (endpoint) => {
    const req = await fetch(`${SERVICE_API_BASE}${endpoint}`)
    const json = await req.json()
    return json;
}

/**
 *  - Originais da Netflix
 *  - Recomendados (trending)
 *  - Em altas (top rated)
 *  - Por categoria (ação, comédia, terror, romance, documentários)
 */
async function fetchInitiliazeList() {
  return [
      {
          slug: 'originals',
          title: 'Originais da Netflix',
          items: await basicFetch(`/discover/tv?with_network=213&language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
      {
          slug: 'trending',
          title: 'Recomendados para si!',
          items: await basicFetch(`/trending/all/week?language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
      {
          slug: 'toprated',
          title: 'Em altas',
          items: await basicFetch(`/movie/top_rated?language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
      {
          slug: 'action',
          title: 'Ação',
          items: await basicFetch(`/discover/movie?with_genres=28&language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
      {
          slug: 'comedy',
          title: 'Comédia',
          items: await basicFetch(`/discover/movie?with_genres=35&language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
      {
          slug: 'horror',
          title: 'Terror',
          items: await basicFetch(`/discover/movie?with_genres=27&language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
      {
          slug: 'romance',
          title: 'Romântico',
          items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
      {
          slug: 'documentary',
          title: 'Documentário',
          items: await basicFetch(`/discover/movie?with_genres=99&language=pt-PT&api_key=${SERVICE_API_KEY}`)
      },
  ]
}

async function fetchMovieInfo(movieId, type) {
    let info = {};

    if(movieId)
    {
        switch (type) {
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-PT&api_key=${SERVICE_API_KEY}`);
                break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-PT&api_key=${SERVICE_API_KEY}`);
                break;
            default:
                info = null;
                break;
        }
    }

    return info;
}

export default {
    fetchInitiliazeList,
    fetchMovieInfo
}
export const getMovies = async () => {
    return await fetch(`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return ("Error can't get data from the api: " + error);
        });
};

export const searchMovie = async (q) => {
    return await fetch(`${process.env.REACT_APP_BASE_URL}/search/movie?query=${q}&api_key=${process.env.REACT_APP_APIKEY}`)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            return ("Error can't get data from the api: " + error);
        });
};
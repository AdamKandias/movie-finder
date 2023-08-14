import { useEffect, useState } from "react";
import { getMovies, searchMovie } from "./api/api";
import Card from "./components/Card";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchInput, setsSearchInput] = useState([]);

  useEffect(() => {
    getMovies().then(data => {
      setPopularMovies(data.results);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    if (searchInput.length > 1) {
      searchMovie(searchInput).then(data => {
        setSearchMovies(data.results);
      }).catch(error => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="text-danger fw-bold">MOVIE FINDER</h1>
              <h2 className="text-info">SEARCH AND GET MOVIES DETAIL FAST, QUICKLY, AND UPDATED</h2>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="" alt="" />
            <p className="text-white">random image</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h4 className="text-white text-center">Search Your Movie</h4>
          <form onChange={ (e) => handleOnChange(e) } className='col-md-6 mx-auto' method="get" action="">
            <input className="form-control" value={ searchInput } onChange={ (e) => setsSearchInput(e.target.value) } type="text" name="search" placeholder='Search movies here' />
          </form>
          <div className="d-flex flex-wrap">
            { searchMovies.length !== 0 ? (
              searchMovies.map((movie, i) => (
                movie.poster_path != null ? (
                  <div key={ i } className="mt-4 col-6 col-sm-4 col-md-3 p-2">
                    <Card
                      image={ movie.poster_path }
                      year={ movie.release_date.split("-")[0] }
                      title={ movie.title }
                      rate={ movie.vote_average }
                    />
                  </div>
                ) : <></>
              ))
            ) : <></> }
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h3 className="text-center text-white mb-2">Popular Movies</h3>
          <div className="d-flex flex-wrap">
            { popularMovies.map((movie, i) => {
              return <div key={ i } className="col-6 col-sm-4 col-md-3 p-2">
                <Card image={ movie.poster_path } year={ movie.release_date.split("-")[0] } title={ movie.title } rate={ movie.vote_average } />
              </div>;
            }) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

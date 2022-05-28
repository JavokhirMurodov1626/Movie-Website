import React, { useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import Filter from "./common/filter";
import MoviesTable from "./movies.Table";
import { useNavigate } from "react-router-dom";
import SearchBox from "./common/searchBox";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataCount, setDataCount] = useState(4);
  const [currentGenre, setCurrentGenre] = useState({
    _id: "",
    name: "All Genres",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const genres = getGenres();
    const allMovies = getMovies();
    const allGenres = [{ _id: "", name: "All Genres" }, ...genres];
    setMovies(allMovies);
    setGenres(allGenres);
  }, []);
  const handleDelete = (movieId) => {
    const newMovies = movies.filter((movie) => movie._id != movieId);
    setMovies(newMovies);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleChangeGenre = (genre) => {
    setCurrentGenre(genre);
    setCurrentPage(1);
    setSearchQuery("");
  };
  const handleNavigate = () => {
    navigate("/movies/new");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentGenre({});
    setCurrentPage(1);
  };

  const handleLike = (movie) => {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index] = movie;
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
  };

  if (movies.length === 0) return <p>There are no movies in the databse!</p>;
  let filtered = movies;
  if (searchQuery) {
    filtered=filtered.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filtered);
  }
  if (currentGenre && currentGenre._id) {
    filtered = movies.filter((movie) => movie.genre.name === currentGenre.name);
  }

  const paginatedMovies = paginate(filtered, currentPage, dataCount);
  return (
    <div className="row">
      <div className="col-3">
        <Filter
          genres={genres}
          currentGenre={currentGenre}
          onChangeGenre={handleChangeGenre}
        />
      </div>

      <div className="col">
        <button onClick={handleNavigate} className="btn btn-primary mb-4">
          New Movie
        </button>
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <p>There are {movies.length} movies in the database</p>
        <MoviesTable
          data={paginatedMovies}
          onLike={handleLike}
          onDelete={handleDelete}
        />

        <Pagination
          dataCount={dataCount}
          currentPage={currentPage}
          moviesCount={filtered.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;

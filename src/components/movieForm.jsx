import Joi from "joi-browser";
import React from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Form from "./common/form";
import { withRouter } from "./withRouter";

class MovieForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "",
        genreId: "",
        numberInStock: "",
        dailyRentalRate: "",  
      },
      genres: [],
      errors: {},
    };
  }
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.navigate("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.navigate(-1);
  };
  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3 mt-4">
          <h1 className="text-primary mb-4 text-center">Movie Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderSelect("genreId", "Genre", this.state.genres)}
            {this.renderInput("numberInStock", "Number in Stock")}
            {this.renderInput("dailyRentalRate", "Rate")}
            {this.renderButton("Save")}
          </form>
          {this.state.data._id}
        </div>
      </div>
    );
  }
}

export default withRouter(MovieForm);

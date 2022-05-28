import React from "react";

const Filter = ({ genres, currentGenre, onChangeGenre }) => {
  return (
    <ul className="list-group text-center">
      {genres.map((genre) => (
        <li
          onClick={() => onChangeGenre(genre)}
          key={genre._id}
          className={
            genre._id === currentGenre._id
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;

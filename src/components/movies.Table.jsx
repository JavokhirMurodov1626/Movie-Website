import React from "react";
import Table from "./common/table";
import Like from "./common/like";

const MoviesTable = ({ data, onLike, onDelete }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => <Like movie={item} onHandleLike={onLike} />,
    },
    {
      key: "delete",
      content: (item) => (
        <button onClick={() => onDelete(item._id)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];
  return (
    <div className="movie-table">
      <Table
        columns={columns}
        data={data}
        onLike={onLike}
        onDelete={onDelete}
      />
    </div>
  );
};

export default MoviesTable;

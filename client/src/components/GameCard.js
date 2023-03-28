import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GameCard() {
  const [{ data: game, error, status }, setGame] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/games/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((game) =>
          setGame({ data: game, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setGame({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);


  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div className="gameDiv">
    <li className="card">
      <h1>{game.title}</h1>
      <p className="genreLabel">Genre: {game.genre}</p>
      <img 
      src={img} 
      alt={title} 
      />
      <p className="priceLabel">Price: {game.price}</p>
      <div className="description">
        <h2>Description</h2>
          <p>{game.description}</p>
      </div>
    </li>
    </div>
  );
}

export default GameCard;
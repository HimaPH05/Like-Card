import React, { useState } from "react";

const Card = ({ title }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <p>
        Status: <strong>{liked ? "Favorite" : "Not Favorite"}</strong>
      </p>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
};

export default Card;

import React, { useState } from "react";

const Card = ({ title }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <p>
        Status: <strong>{liked ? "Liked" : "Not Liked"}</strong>
      </p>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Card;

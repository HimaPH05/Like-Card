import React from "react";
import Card from "./Card";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>My Favorite Technologies</h1>

      <div className="card-container">
        <Card title="React" />
        <Card title="JavaScript" />
        <Card title="HTML" />
        <Card title="CSS" />
      </div>
    </div>
  );
}

export default App;

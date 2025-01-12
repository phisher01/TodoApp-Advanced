import React from "react";
import "./welcome.css";


export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Hey there, Welcome to Your Todo List!</h1>
      <p className="welcome-message">
        Organize your tasks and stay productive. Ready to begin?
      </p>
      <button className="start-btn" onClick={onStart}>
        Start Now
      </button>
    </div>
  );
}

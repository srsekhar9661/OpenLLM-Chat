import React from "react";
import "./Home.css";
import { useState } from "react";


function Home() {
    const [apikey, setApikey] = useState('');

    const handleAPIKey = () => {
        if (!apikey){
            return alert('API is required to start the chatting.')
        }
        sessionStorage.setItem('API_KEY', apikey);
        alert('api key is stored with in the session storage, now you can start chatting.')
    }
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Build. Prompt. Create.
        </h1>

        <p className="hero-subtitle">
          A powerful open-source LLM chatbot running entirely in your browser.
          Bring your own API key and start exploring AI instantly.
        </p>

        <div className="api-section">
          <input
            type="password"
            placeholder="Enter your API Key"
            className="api-input"
            onChange={(e) => setApikey(e.target.value)}
          />
          <button className="start-btn" onClick={handleAPIKey}>
            Start Chatting →
          </button>
        </div>

        <p className="note">
          Your API key is stored only in session storage. Once the session is over. Your API key will be removed from the Browser.
        </p>
      </div>
    </div>
  );
}

export default Home;
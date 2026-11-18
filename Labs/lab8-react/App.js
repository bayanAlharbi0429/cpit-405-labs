// Bayan Alharbi - 2305950
// Lab 8: Link Shrinker
import { useState } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";

const css = `
  body { margin: 0; font-family: Arial, sans-serif; background: #f2f2f4; }
  nav { background: #865457; padding: 8px; display: flex; gap: 8px; }
  nav a { background: #c9969a; color: #222; padding: 8px 12px; text-decoration: none; border-radius: 3px; }
  nav a.active { background: #e8bfc2; font-weight: bold; }
  .card { max-width: 540px; margin: 0 auto; background: white; padding: 20px; min-height: 380px; }
  h1 { text-align: center; }
  label { display: block; font-weight: bold; margin-top: 10px; }
  input { width: 100%; box-sizing: border-box; padding: 8px; margin-top: 4px; border: 1px solid #ccc; border-radius: 3px; }
  .center { text-align: center; }
  button { margin-top: 16px; padding: 8px 18px; background: #007bff; color: white; border: 0; border-radius: 4px; cursor: pointer; }
  .result { background: #f4f4f4; padding: 10px; text-align: center; font-weight: bold; margin-top: 6px; }
  .error { color: #b3261e; margin-top: 10px; }
`;

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [code, setCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  // codes that were already used, so two links can't get the same code
  const [used, setUsed] = useState({});

  // random code with 6 letters or numbers, for when the code input is empty
  function randomCode() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  function handleShorten() {
    setError("");
    setShortUrl("");

    // new URL() throws an error when the text is not a real link
    try {
      new URL(longUrl.trim());
    } catch (e) {
      setError("Please enter a valid URL, for example https://react.dev");
      return;
    }

    let finalCode = code.trim();
    if (finalCode === "") {
      // keep generating until I get a code that is not used
      do {
        finalCode = randomCode();
      } while (used[finalCode]);
    } else if (!/^[A-Za-z0-9_-]+$/.test(finalCode)) {
      setError("The short code can only have letters, numbers, - and _");
      return;
    } else if (used[finalCode] && used[finalCode] !== longUrl.trim()) {
      setError("This code is already used for another link, choose a different one.");
      return;
    }

    setUsed({ ...used, [finalCode]: longUrl.trim() });
    setShortUrl("https://cpt405.co/" + finalCode);
  }

  return (
    <div className="card">
      <h1>Link Shrinker</h1>

      <label htmlFor="long">Long URL:</label>
      <input
        id="long"
        type="text"
        value={longUrl}
        onChange={function (e) {
          setLongUrl(e.target.value);
        }}
        placeholder="https://react.dev/learn/reusing-logic-with-custom-hooks"
      />

      <label htmlFor="code">Enter short code:</label>
      <input
        id="code"
        type="text"
        value={code}
        onChange={function (e) {
          setCode(e.target.value);
        }}
        placeholder="react101"
      />

      <div className="center">
        <button onClick={handleShorten}>Shorten</button>
      </div>

      {error && <p className="error">{error}</p>}

      {shortUrl && (
        <div>
          <label>Short URL</label>
          <div className="result">{shortUrl}</div>
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="card">
      <h1>About us</h1>
      <p>
        Link Shrinker turns a long link into a short one that is easier to share. You can
        write your own custom code, or leave it empty and the app picks a random one.
      </p>
      <p>This app was made for CPIT-405 Lab 8 with React, useState and React Router.</p>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <style>{css}</style>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About us</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

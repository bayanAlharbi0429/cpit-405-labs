// Bayan Alharbi - 2305950
// Lab 9: recipe search with the Spoonacular API
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, NavLink, Link, useParams } from "react-router-dom";

const API_KEY = "b101f35722aa442f8b57d00f781425fd";
const API = "https://api.spoonacular.com/recipes";

const css = `
  body { margin: 0; font-family: Arial, sans-serif; background: #fcfcfc; }
  nav { background: #2c2c2c; padding: 12px 16px; display: flex; gap: 20px; }
  nav a { color: white; text-decoration: none; font-size: 14px; }
  nav a.active { font-weight: bold; text-decoration: underline; }
  .page { padding: 16px 20px; }
  form { display: flex; }
  form input { flex: 1; padding: 12px; border: 1px solid #333; }
  form button { padding: 0 18px; background: #0a8a8a; color: white; border: 0; cursor: pointer; letter-spacing: 1px; }
  .grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 22px; margin-top: 22px; }
  .recipe-card { width: 220px; padding: 8px; box-shadow: 0 1px 6px rgba(0,0,0,.15); border-radius: 6px; background: white; }
  .recipe-card img { width: 100%; border-radius: 6px; }
  .recipe-card a { font-weight: bold; color: #1a0dab; }
  .details img { max-width: 420px; width: 100%; }
  .details .summary { font-size: 14px; line-height: 1.4; }
  .error { color: #b3261e; }
`;

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState("");

  // fetch with useState: runs when the user presses Search
  function handleSearch(e) {
    e.preventDefault();
    if (query.trim() === "") {
      setMessage("Type a recipe name first.");
      return;
    }
    setMessage("Loading...");

    fetch(API + "/complexSearch?apiKey=" + API_KEY + "&number=10&query=" + encodeURIComponent(query))
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        setRecipes(data.results);
        setMessage(data.results.length === 0 ? "No recipes found." : "");
      })
      .catch(function (err) {
        setRecipes([]);
        setMessage("Something went wrong: " + err.message);
      });
  }

  return (
    <div className="page">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
          placeholder="Search for a recipe, for example pasta"
        />
        <button type="submit">SEARCH</button>
      </form>

      {message && <p>{message}</p>}

      <div className="grid">
        {recipes.map(function (r) {
          return (
            <div className="recipe-card" key={r.id}>
              <img src={r.image} alt={r.title} />
              {/* the id is in the link, the details page reads it with useParams */}
              <p>
                <Link to={"/recipe/" + r.id}>{r.title}</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  // fetch with useEffect: runs when the page loads
  useEffect(
    function () {
      fetch(API + "/" + id + "/information?apiKey=" + API_KEY)
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then(function (data) {
          setRecipe(data);
        })
        .catch(function (err) {
          setError("Could not load the recipe: " + err.message);
        });
    },
    [id]
  );

  if (error) {
    return (
      <div className="page">
        <p className="error">{error}</p>
      </div>
    );
  }
  if (!recipe) {
    return (
      <div className="page">
        <p>Loading...</p>
      </div>
    );
  }

  // the steps are inside analyzedInstructions, so I check it exists first
  const steps =
    recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0
      ? recipe.analyzedInstructions[0].steps
      : [];

  return (
    <div className="page details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />

      {/* the summary comes from the API as HTML text */}
      <p className="summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />

      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map(function (ing, i) {
          return <li key={i}>{ing.original}</li>;
        })}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {steps.map(function (s) {
          return <li key={s.number}>{s.step}</li>;
        })}
      </ol>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>About</h2>
      <p>A small recipe finder made for CPIT-405 Lab 9. The recipes come from the Spoonacular API.</p>
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
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

import { FormEvent, useState } from "react";
import * as api from "./api";
import { Recipes } from "./types";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipes[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = await api.searchRecipes(searchTerm, 1);

    setRecipes(data.results);
    setSearchTerm("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Get Recipe</button>
      </form>

      {recipes.map((recipe) => (
        <div>Title : {recipe.title}</div>
      ))}
    </>
  );
};

export default App;

import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza – Order Now</h1>
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
      <Pizza
        name="The hongkong Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
      <Pizza
        name="The Vietname Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

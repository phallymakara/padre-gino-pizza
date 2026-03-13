import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza – Order Now</h1>
      <Order
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Order
        name="The hongkong Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Order
        name="The Vietname Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

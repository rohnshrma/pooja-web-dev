import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Card from "./Components/Card";
function App() {
  return (
    <>
      <main className="d-flex align-items-center justify-content-around">
        <Card
          title="Pizza"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbBoESC-0jPlLGkoQB1eydQ_ZrZfmETtCWg&s"
          price="$250"
        />
        <Card
          title="Burger"
          price="$123"
          url="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
        />
        <Card
          title="Pasta"
          price="$340"
          url="https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg"
        />
      </main>
    </>
  );
}

export default App;

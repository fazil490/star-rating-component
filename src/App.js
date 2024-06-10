import { useState } from "react";
import "./App.css";

const starCount = [1, 2, 3, 4, 5];
const StarRating = () => {
  const [rating, setRating] = useState(0);
  function handleState(index) {
    setRating(index);
  }
  return (
    <div className="star-rating">
      {starCount.map((star) => (
        <span
          onClick={() => handleState(star)}
          className={star <= rating ? "star-filled" : "star"}
          key={star}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <StarRating />
    </div>
  );
}

export default App;

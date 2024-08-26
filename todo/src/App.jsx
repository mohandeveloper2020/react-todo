import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;

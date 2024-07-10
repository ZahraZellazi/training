import { useState } from "react";

function Navigation() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <nav>
        <button onClick={() => setCounter(1)}>Take me to page 1</button>
        <button onClick={() => setCounter(2)}>Take me to page 2</button>
        <button onClick={() => setCounter(3)}>Take me to page 3</button>
        <button onClick={() => setCounter(4)}>Take me to page 4</button>
      </nav>

      {count === 1 ? (
        <h1>Page 1</h1>
      ) : count === 2 ? (
        <h1>Page 2</h1>
      ) : count === 3 ? (
        <h1>Page 3</h1>
      ) : (
        <h1>Page 4</h1>
      ) }
    </div>
  );
}

export default Navigation;

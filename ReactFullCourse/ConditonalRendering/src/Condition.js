import { useState } from "react";

function Condition() {
  //old Logic
  var oldBol = false;
  //react  Logic
  const [bol, setBol] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setBol(!bol);
        }}
      >
        change
      </button>
      {bol == false ? <h1>hello</h1> : <h1>bye</h1>}
    </div>
  );
}

export default Condition;

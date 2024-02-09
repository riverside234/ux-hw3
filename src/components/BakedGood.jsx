import { useState } from "react";

export default function BakedGood(props) {
  const [amount, setAmount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: props.featured === false ? "white" : "lightblue",
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{"$" + props.price}</p>
      <div>
        <button
          className="inline"
          disabled={amount === 0 ? true : false}
          onClick={() => setAmount((preAmount) => preAmount - 1)}
        >
          -
        </button>
        <p className="inline">{amount}</p>
        <button
          className="inline"
          onClick={() => setAmount((preAmount) => preAmount + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

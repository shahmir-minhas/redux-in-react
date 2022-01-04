import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyCake } from "../Redux/Cake/CakeActions";

const NewCake = (props) => {
  const [number, setNumber] = React.useState(1);
  //useselector will get the number of cakes from state
  // alternative to mapStateToProp
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);

  //usedispatch will map dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h4>With input</h4>
      <h2>num of cakes - {numberOfCakes}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(buyCake(number));
        }}
      >
        Buy {number} Cakes
      </button>
    </div>
  );
};

export default NewCake;

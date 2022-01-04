import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyIceCream } from './../Redux/IceCream/IceCreamActions';

const IceCream = () => {
  //useselector will get the number of iceCreams from state
  // alternative to mapStateToProp
  const numberOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);

  //usedispatch will map dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h4>With hooks</h4>
      <h2>num of IceCreams - {numberOfIceCream}</h2>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default IceCream;

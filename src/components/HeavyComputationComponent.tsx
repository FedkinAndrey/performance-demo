// HeavyComputationComponent.js
import React from 'react';
import {calculateFibonacciSum} from "../utils/fibonacciUtils.ts";



const HeavyComputationComponent = ({ num }) => {
  // const result = heavyComputation(num);
  const result = calculateFibonacciSum(num)

  return <>
    <div>Computation Result heavy sum: {result.sum}</div>
    <div>Computation Result heavy timeTaken: {result.timeTaken}</div>
  </>
};

export default HeavyComputationComponent;

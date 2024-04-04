import React, { useMemo } from 'react';
import {calculateFibonacciSum} from "../utils/fibonacciUtils.ts";

const OptimizedHeavyComputationComponent = React.memo(({ num }) => {
  const result = useMemo(() => calculateFibonacciSum(num), [num]);


  return <>
    <div>Computation Result optimized sum: {result.sum}</div>
    <div>Computation Result optimized timeTaken: {result.timeTaken}</div>
  </>
});

export default OptimizedHeavyComputationComponent;

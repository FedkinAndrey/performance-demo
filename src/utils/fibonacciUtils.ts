export interface FibonacciResult {
  sum: number;
  timeTaken: number;
}

export const calculateFibonacciSum = (n: number): FibonacciResult => {
  const startTime = performance.now();

  let a = 0;
  let b = 1;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += a;
    const temp = a + b;
    a = b;
    b = temp;
  }

  const endTime = performance.now();
  return { sum, timeTaken: endTime - startTime };
};

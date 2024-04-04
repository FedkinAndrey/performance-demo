import {useState} from "react";
import PerformanceComparisonChart from "./components/PerformanceComparisonChart.tsx";
import HeavyComputationComponent from "./components/HeavyComputationComponent.tsx";
import OptimizedHeavyComputationComponent from "./components/OptimizedHeavyComputationComponent.tsx";
import {calculateFibonacciSum} from "./utils/fibonacciUtils.ts";
import {LazyLoadComponent} from "./components/LazyLoadComponent.tsx";
import './App.css'


function App() {
  const [data, setData] = useState({
    originalTime: null,
    optimizedTime: null,
  });

  const handleMeasurePerformance = () => {
    const num = 100000;

    const startOriginal = performance.now();
    calculateFibonacciSum(num)
    const endOriginal = performance.now();

    const startOptimized = performance.now();
    calculateFibonacciSum(num)
    const endOptimized = performance.now();

    setData({
      originalTime: endOriginal - startOriginal,
      optimizedTime: endOptimized - startOptimized,
    });
  };

  return (
    <div>
      <button onClick={handleMeasurePerformance}>Measure Performance</button>
      <div>
        <HeavyComputationComponent num={10000} />
        <OptimizedHeavyComputationComponent num={10000} />
      </div>
      {data.originalTime && data.optimizedTime && (
        <PerformanceComparisonChart
          originalTime={data.originalTime}
          optimizedTime={data.optimizedTime}
        />
      )}

      <h1>Lazy load section</h1>
      <LazyLoadComponent/>
    </div>
  );
}

export default App;

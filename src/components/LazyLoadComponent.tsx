// FetchComponent.js
import React, {useState, useEffect, useRef} from 'react';

export const LazyLoadComponent = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const isFirstLoad = useRef(true); // Add a ref to track the first load

  useEffect(() => {
    // Only fetch data if it's not the first load or if it is the very first component mount
    if (!isFirstLoad.current || page === 1) {
      const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
        const data = await response.json();
        setItems((prevItems) => [...prevItems, ...data]);
        setIsLoading(false);
        isFirstLoad.current = false; // After the first fetch, mark as not first load
      };

      fetchData();
    }
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '600px', padding: '20px' }}>
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <button onClick={loadMore} style={{ padding: '10px 20px', margin: '20px 0', cursor: 'pointer' }}>Load More</button>
      )}
    </div>
  );
};


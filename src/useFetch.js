import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        const { venues } = await response.json();
        setData(venues);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    })();
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
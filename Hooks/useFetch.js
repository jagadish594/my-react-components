import { useState, useEffect } from "react";

export function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
    return () => {
      controller.abort();
    };
  }, [url]);
  return { isLoading, data, setUrl, error };
}
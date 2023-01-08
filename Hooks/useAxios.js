import axios from "axios";
import { useState, useEffect } from "react";

export function useAxios() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [url, setUrl] = useState("");
  useEffect(() => {
    async function getData(url) {
      try {
        let data = await axios.get(url);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (url) {
      getData(url);
    }
  }, [url]);
  return {
    data: data,
    error: error,
    isLoading: isLoading,
    setUrl: setUrl,
  };
}

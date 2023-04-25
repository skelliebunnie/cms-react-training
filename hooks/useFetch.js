import { useState, useEffect } from "react";

// type fetchProps = {
//   url: string
// }

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if(data === null) setLoading(true);
    
    setLoading(false);
  }, [loading])

  useEffect(() => {
    if(loading) {
    	fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setData([]);
        setLoading(false);
      })
    }
  }, [loading]);

  return {data: [data], loading: loading, error: error};
};

export default useFetch;
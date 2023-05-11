import { useState, useEffect } from "react";

type apiResponse = {
  data: {
    id: number,
    title: string,
    issueNumber: number,
    publishDate: string,
    creators: {
      resourceURI: string,
      name: string,
      role: string
    },
    thumbnail: string
  },
  loading: Boolean,
  error: any
}

const useFetch = (url: string): apiResponse => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<any>(null);
  
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

  return {data, loading, error};
};

export default useFetch;
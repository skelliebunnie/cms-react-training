import { useState, useEffect } from "react";
import md5 from 'md5';


const useFetch = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<any>(null);
  
  const [limit, setLimit] = useState<number>(15);
  const [total, setTotal] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  
  const [filter, setFilter] = useState<any>({character: '', creator: ''});
  
  const baseUrl = `http://gateway.marvel.com/v1/public`;
  const publicKey = `${process.env.NEXT_PUBLIC_API_KEY_PUBLIC}`;
  const privateKey = `${process.env.NEXT_PUBLIC_API_KEY_PRIVATE}`;
  
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey);
  
  const standardProps = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=${limit}`;
  
  const initialUrl = `${baseUrl}/comics?${standardProps}`;
  
  const fetchData = async() => {
    setError(false);
    setLoading(true);
    
    let fetchUrl = initialUrl;
    
    if(offset > 0) {
      fetchUrl += `&offset=${offset}`;
    }
    
    if(filter && filter.character !== "") {
      fetchUrl = `${baseUrl}/characters?name=${filter.character}&${standardProps}`;
    } else if(filter && filter.creator !== "") {
      fetchUrl = `${baseUrl}/creators?name=${filter.creator}&${standardProps}`;
    }
    
    try {
      const results = await fetch(fetchUrl)
      .then((res) => res.json())
      .then((res) => {
        if(res.code !== 200) {
          setError(true);
          setLoading(false);
          return;
        }
        console.log(res.data)
        setData(res.data);
        setTotal(res.data.total);
        setLoading(false);
        setError(false);
      })
    } catch(err:any) {
      setError(true);
      setLoading(false);
    }
  }

  return {data, loading, error, total, limit, fetchData};
};

export default useFetch;
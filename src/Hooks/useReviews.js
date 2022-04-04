
import { useState } from 'react';
import { useEffect } from 'react';
const useReviews = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews);
    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setReviews(data))
    }, [])
    
    return []
};

export default useReviews;
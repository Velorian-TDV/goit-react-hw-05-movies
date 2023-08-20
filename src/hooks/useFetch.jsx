import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();

                if (!response.ok) return null

                setData(jsonData);
                setLoading(false);
                
            } catch (error) {
                setLoading(false);
                return null
            }
        };

        fetchData();
    }, [url]);

    return { data, loading };
};
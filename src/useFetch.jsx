import { useEffect, useState } from "react";

const useFetch = (url, sieveModel) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true)
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(sieveModel),
            headers: {
                'content-type': 'application/json;charset-UTF-8'
            }
        });
        const data = await response.json();


        setData(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [sieveModel.page])

    return [isLoading, data]
}

export default useFetch;
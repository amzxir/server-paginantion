import { useEffect, useState } from "react";
import _ from "lodash";

const usePaginationFetch = (url , pagesize) => {
    const [isLoading , setIsLoading] = useState(true);
    const [data , setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        const paginatedData = _.chunk(data , pagesize)
        console.log(paginatedData)

        setData(paginatedData)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData();
    },[])

    return [isLoading , data]
}

export default usePaginationFetch;
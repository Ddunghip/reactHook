import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";


// custom hook `https://api.covid19api.com/country/vietnam?from=${u}%3A00%3A00Z&to=${d}T00%3A00%3A00Z`
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        try {
            async function fetchData() {


                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];


                if (data && data.lenght > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY')
                        return item;
                    })


                }

                setData(data.reverse())
                setLoading(false)
                setIsError(false)
            }
            fetchData();




        } catch (e) {
            console.log('e>>>> check error', e.name, e.message);
            setLoading(false)
            setIsError(true)
        }

    }, [url])// = Didmount


    return {
        data, loading, isError
    }
}

export default useFetch;
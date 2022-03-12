import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { CancelToken } from "axios";


// custom hook `https://api.covid19api.com/country/vietnam?from=${u}%3A00%3A00Z&to=${d}T00%3A00%3A00Z`
const useFetch = (url, isCovidData) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)



    useEffect(() => {

        const ourRequest = axios.CancelToken.source()

        async function fetchData() {
            try {

                let res = await axios.get(url, { cancelToken: ourRequest.token, });
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0 && isCovidData === true) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY')
                        return item;
                    })

                    data = data.reverse();
                }

                setData(data)
                setLoading(false)
                setIsError(false)

            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('request canceled', err.message);
                } else {
                    setLoading(false)
                    setIsError(true)
                }
            }

        }
        setTimeout(() => {
            fetchData()

        }, 3000);

        return () => {
            ourRequest.cancel('canceled by the user')
        }

    }, [url])// = Didmount


    return {
        data, loading, isError
    }
}

export default useFetch;
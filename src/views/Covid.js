// import { useEffect, useState } from "react";
// import axios from "axios";
// import moment from 'moment';
import moment from "moment";
import useFetch from "../customize/fetch";

const Covid = () => {

    // set real time    

    let today = moment().startOf('day').toISOString(true);
    let priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    // let d = new Date().toISOString().slice(0, 10);
    // const u = new Date();
    // const month = u.getMonth();
    // u.setMonth(u.getMonth() - 1);
    // while (u.getMonth() === month) {
    //     u.setDate(u.getDate() - 1);
    // }
    // let y = moment().subtract(30, 'days')
    //2022-02-10T00
    const { data: dataCovid, loading, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}%3A00%3A00Z&to=${today}T00%3A00%3A00Z`, true)
    // let dataCovid = useFetch(url).data
    return (
        <>
            <h3>Covid Tracking</h3>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>

                    </tr>
                </thead>
                <tbody>
                    {isError === false && loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>

                                </tr>
                            )
                        })}
                    {loading === true &&
                        <tr><td colSpan='5' style={{ 'textAlign': 'center' }}>
                            Loading...
                        </td>
                        </tr>
                    }
                    {isError === true &&
                        <tr><td colSpan='5' style={{ 'textAlign': 'center' }}>
                            Somthing Wrong..                        </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
export default Covid;
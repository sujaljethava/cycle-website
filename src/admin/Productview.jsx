import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Productview = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/cycle/view.php')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const navigate = useNavigate()

    return (
        <>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((r) => {
                            return (
                                <tr key={r.id}>
                                    <td>
                                        <img src={`http://localhost/cycle/assets/img/${r.img}`} alt={r.name} />
                                    </td>
                                    <td>{r.name}</td>
                                    <td>${r.price}</td>
                                    <td>
                                        <button onClick={() => navigate(`/product/${r.id}`)}>Quick View</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Productview;

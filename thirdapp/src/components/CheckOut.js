import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CheckOut() {

    let [cart, setCart] = useState([]);
    let [price, setPrice] = useState(0);
    let price1 = 0

    useEffect(() => {
        const currentUser = localStorage.getItem("ExistUser")

        axios.post('http://localhost:3500/users-api/checkout', { currentUser })
            .then(res => setCart(res.data.data))
            .catch(err => console.log(err))

    }, [])

    { cart?.map(data => price1 = (price1 + ((data.price) * (data.quantity)))) }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', backgroundColor: '#f4f4f4', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '36px', color: '#3498db' }}>Total is: <span style={{ color: 'black' }}>${price1}</span></h1>
            <br />
            <h1 style={{ fontSize: '48px', color: '#2ecc71' }}>Order placed Successfully..!</h1>
        </div>

    )
}

export default CheckOut
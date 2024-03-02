import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './cart.css';

function Cart() {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  let removeItem = (id) => {
    setLoading(true);

    // Optimistic rendering
    let updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);

    let username = localStorage.getItem("ExistUser");
    let product = {
      name: username,
      id: id
    };

    axios.post('http://localhost:3500/users-api/removeItem', { product })
      .then(res => {
        // The server response can be logged or handled as needed
        console.log("Item removed successfully:", res.data);
      })
      .catch(err => {
        console.log(err);
        // If there is an error, revert the local state to the previous state
        setCart(cart);
      })
      .finally(() => {
        setLoading(false);
      });
  };

let [acc,setAcc]=useState(null)

  useEffect(() => {
    let username = localStorage.getItem("ExistUser");
    
    axios.post('http://localhost:3500/users-api/showCart', { username })
      .then(res => {
        // Ensure cart is not undefined before updating the state
        if (res.data.data !== undefined) {
          setCart(res.data.data);
        }
      })
      .catch(err => console.log(err));
  
  }, [setCart]);

  return (
    <div className='container'>
      {loading && <div>Loading...</div>}
      {(cart !== undefined && cart?.length !== 0) &&
        <div>
          <div className="cart">
            <table className="table">
              <thead>
                <tr>
                  <th>name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>description</th>
                  <th>Sub total</th>
                  <th>category</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map(data =>
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.quantity}</td>
                    <td>{data.description}</td>
                    <td>{(data.quantity) * (data.price)}</td>
                    <td>{data.category}</td>
                    <Link onClick={() => removeItem(data.id)}>
                      <i className="bi bi-trash3-fill remove"></i>
                    </Link>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div align="center">
            <button onClick={() => navigate('/checkout')}  className='btn btn' style={{ color: "black", backgroundColor: "skyblue" }}>place order</button>
          </div>
        </div>
      }
      {((cart === undefined) || (cart?.length === 0)) && <h1 align="center" style={{color:"white"}}>Cart is Empty !!!!!</h1>}
    </div>
  );
}

export default Cart;
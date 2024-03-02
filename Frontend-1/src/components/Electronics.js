import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card1 from './Card1'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLocation } from 'react-router-dom';


function Electronics(props) {

  let [products, setProducts] = useState([])

  const location = useLocation();
// useEffect(() => {
//   if (location.state === null || location.state.data.searchValue.length === 0) {
//     test1=0;
//     axios.get("http://localhost:3500/products-api/get-products")
//       .then(res => {
//         setProducts(res.data.payload);
//       })
//       .catch(err => console.log("error is : ", err));
//   } else {
//     axios.post(`http://localhost:3500/products-api/category/${obj.value}`)
//       .then(res => {
//         setProducts(res.data.data);
//       })
//       .catch(err => console.log("error is : ", err));
//   }
//   console.log(products); 
// }, [test1]); 


useEffect(() => {
  axios.get("http://localhost:3500/products-api/get-products")
    .then(res => {
      setProducts(res.data.payload);
      console.log(res.data.payload); // Log the updated state
    })
    .catch(err => console.log("error is : ", err));
    console.log(products)
}, [setProducts]);


  // let submitData=(obj) => {
  //   if (location.state === null || location.state.data.searchValue.length === 0) {
  //         axios.get("http://localhost:3500/products-api/get-products")
  //           .then(res => setProducts(res.data.payload))
  //           .catch(err => console.log("error is : ", err))
  //       }
  //       else {
  //         fetch(`http://localhost:3500/products-api/category`, {
  //           method:"POST",
  //           headers: {
  //             "Content-Type":"application/json"
  //           },
  //           body:JSON.stringify(obj)
  //         })
  //           .then(res => console.log(res))
  //           .catch(err => console.log("error is : ", err))
  //       }
  // }


  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1100 },
      items: 5
    },

    laptop: {
      breakpoint: { max: 1100, min: 1000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1000, min: 700 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className='container'>
      <Carousel responsive={responsive}>
        {products !== null && products.map((data) => <Card1 key={data._id} {...data} />)}
      </Carousel>
    </div>
  )
}

export default Electronics
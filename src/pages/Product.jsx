import { useEffect, useState } from "react";
import Header from "../component/Header";
import Nev from "../component/Nev";
import { getAllProductMethods } from "../services/productServices";

const Product = () => {
  const[productData, setProductData] = useState([])


  useEffect(() => {
    const getAllUsers = async() => {
      const userInfo = await getAllProductMethods()
      if(userInfo.status=== 200){
        setProductData(userInfo.data.products)

      }
  
    }
    getAllUsers()
  }, [])

  console.log('productData====',productData)
  return (
    <>
      <Header/>
      <div className="home">
      <div className="all-product">
          {/* <div className="product-card-left"></div> */}
          <div className="product-card-right">

            {productData && productData.map((val) => {
              
              return(
                <>
                <div className="product-box">
              <div className="producat-box-image">
                <img src={val.images[0]} alt="" />
              </div>
              <div className="producat-box-text">
                <p>brand:{val.brand}</p>
                <p>category{val.category}</p>
                <h3>price{val.price}</h3>
                <button>Add to card</button>
              </div>
            </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <Nev/>
    </>
  );
};
export default Product;
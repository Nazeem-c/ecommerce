import React,{useState,useEffect} from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/Api'

function Home() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      const fetchProduct = async()=>{
        const data = await getAllProducts();
        setProduct(data)
      }
     fetchProduct() 
    }, []);
    
  return (
    <div className='home'>
        {
                product.map((obj,index)=>{
                    return(
                        <div className='product' key={obj.id}>
            
                    <img src={obj.image} alt="alter" />
                    <h2>{obj.title}</h2>
                    <p>
                    <span className='price'>${obj.price}</span>
                    </p>
                    <button>Product Details</button>
                    
                </div>
                    )
                })
            }
       

    </div>
  )
}

export default Home